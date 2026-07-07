"use client";

import Image from "next/image";
import Link from "next/link";
import { Heart } from "lucide-react";
import { useLikes } from "@/context/LikesContext";

export default function ProductCard({ product }) {
  const { getLikes, isLiked, toggleLike } = useLikes();

  const liked = isLiked(product.id);
  const likeCount = getLikes(product.id);

  return (
    <div className="group bg-white rounded-lg shadow-card hover:shadow-cardHover transition-shadow duration-200 overflow-hidden flex flex-col">
      <Link href={`/product/${product.id}`} className="block relative">
        <div className="relative w-full aspect-square bg-mist overflow-hidden">
          <Image
            src={product.image}
            alt={product.name}
            fill
            sizes="(max-width: 768px) 50vw, 25vw"
            className="object-cover group-hover:scale-105 transition-transform duration-300"
          />
        </div>

        {product.badge && (
          <span className="absolute top-2 left-2 bg-navy text-brassLight text-[10px] uppercase tracking-wider px-2 py-1 rounded">
            {product.badge}
          </span>
        )}
      </Link>

      <div className="p-4 flex flex-col flex-1">
        <Link href={`/product/${product.id}`}>
          <h3 className="text-sm font-medium text-ink line-clamp-2 min-h-[2.5rem] hover:text-navy transition-colors">
            {product.name}
          </h3>
        </Link>

        <button
          onClick={() => toggleLike(product.id)}
          className={`mt-3 w-full flex items-center justify-center gap-2 text-sm py-2 rounded-md font-medium transition-colors ${
            liked
              ? "bg-blue text-white hover:bg-blue/90"
              : "bg-black text-white hover:bg-blue hover:text-black"
          }`}
        >
          <Heart size={15} fill={liked ? "currentColor" : "none"} />
          {liked ? "Liked" : "Like"} · {likeCount.toLocaleString("en-IN")}
        </button>
      </div>
    </div>
  );
}
