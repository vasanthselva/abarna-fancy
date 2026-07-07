"use client";

import Image from "next/image";
import { useLikes } from "@/context/LikesContext";
import { Heart } from "lucide-react";

export default function ProductDetailClient({ product }) {
  const { getLikes, isLiked, toggleLike } = useLikes();
  const liked = isLiked(product.id);
  const likeCount = getLikes(product.id);

  return (
    <div className="grid md:grid-cols-2 gap-10">
      <div className="relative w-full aspect-square bg-white rounded-lg overflow-hidden shadow-card">
        <Image
          src={product.image}
          alt={product.name}
          fill
          sizes="(max-width: 768px) 100vw, 50vw"
          className="object-cover"
          priority
        />
        {product.badge && (
          <span className="absolute top-4 left-4 bg-navy text-brassLight text-xs uppercase tracking-wider px-3 py-1.5 rounded">
            {product.badge}
          </span>
        )}
      </div>

      <div>
        <h1 className="font-display text-2xl md:text-3xl text-navy">
          {product.name}
        </h1>

        <p className="text-ink/70 mt-5 leading-relaxed">
          {product.description}
        </p>

        <p className="mt-4 text-sm">
          {product.stock > 10 ? (
            <span className="text-green-700">In stock</span>
          ) : (
            <span className="text-clay">Only {product.stock} left</span>
          )}
        </p>

        <button
          onClick={() => toggleLike(product.id)}
          className={`mt-6 w-full flex items-center justify-center gap-2 py-3 rounded-full font-medium transition-colors ${
            liked
              ? "bg-blue text-white hover:bg-black/90"
              : "bg-black text-white hover:bg-blue hover:text-black"
          }`}
        >
          <Heart size={18} fill={liked ? "currentColor" : "none"} />
          {liked ? "Liked" : "Like this"} · {likeCount.toLocaleString("en-IN")}
        </button>
      </div>
    </div>
  );
}
