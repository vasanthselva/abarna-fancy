"use client";

import ProductCard from "./ProductCard";
import { useLikes } from "@/context/LikesContext";

export default function ProductGrid({ products, title, sortByLikes = true }) {
  const { counts } = useLikes();

  const ordered = sortByLikes
    ? [...products].sort(
        (a, b) => (counts[b.id] ?? b.likes) - (counts[a.id] ?? a.likes)
      )
    : products;

  return (
    <section className="max-w-7xl mx-auto px-4 py-10">
      {title && (
        <div className="flex items-center gap-4 mb-6">
          <h2 className="font-display text-2xl md:text-3xl text-navy">
            {title}
          </h2>
          <div className="h-px flex-1 bg-brass/30" />
        </div>
      )}
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5">
        {ordered.map((p) => (
          <ProductCard key={p.id} product={p} />
        ))}
      </div>
    </section>
  );
}
