"use client";

import { createContext, useContext, useEffect, useState } from "react";
import { products as baseProducts } from "@/data/products";

const LikesContext = createContext(null);
const STORAGE_KEY = "abarna_fancy_likes_v1";

function buildInitialCounts() {
  const counts = {};
  baseProducts.forEach((p) => {
    counts[p.id] = p.likes;
  });
  return counts;
}

export function LikesProvider({ children }) {
  const [counts, setCounts] = useState(buildInitialCounts);
  const [likedByUser, setLikedByUser] = useState({});
  const [hydrated, setHydrated] = useState(false);

  useEffect(() => {
    try {
      const saved = localStorage.getItem(STORAGE_KEY);
      if (saved) {
        const parsed = JSON.parse(saved);
        setCounts((prev) => ({ ...prev, ...parsed.counts }));
        setLikedByUser(parsed.likedByUser || {});
      }
    } catch (e) {
      // ignore corrupted storage
    }
    setHydrated(true);
  }, []);

  useEffect(() => {
    if (!hydrated) return;
    try {
      localStorage.setItem(
        STORAGE_KEY,
        JSON.stringify({ counts, likedByUser })
      );
    } catch (e) {
      // storage full or unavailable, ignore
    }
  }, [counts, likedByUser, hydrated]);

  function toggleLike(id) {
    setLikedByUser((prev) => {
      const isLiked = !!prev[id];
      setCounts((c) => ({
        ...c,
        [id]: Math.max(0, (c[id] ?? 0) + (isLiked ? -1 : 1)),
      }));
      return { ...prev, [id]: !isLiked };
    });
  }

  function getLikes(id) {
    return counts[id] ?? 0;
  }

  function isLiked(id) {
    return !!likedByUser[id];
  }

  return (
    <LikesContext.Provider
      value={{ counts, toggleLike, getLikes, isLiked, hydrated }}
    >
      {children}
    </LikesContext.Provider>
  );
}

export function useLikes() {
  const ctx = useContext(LikesContext);
  if (!ctx) throw new Error("useLikes must be used within LikesProvider");
  return ctx;
}
