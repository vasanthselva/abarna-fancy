import { getProductById, products, getCategoryName } from "@/data/products";
import { notFound } from "next/navigation";
import Link from "next/link";
import ProductGrid from "@/components/ProductGrid";
import ProductDetailClient from "./ProductDetailClient";

export function generateStaticParams() {
  return products.map((p) => ({ id: p.id }));
}

export default async function ProductPage({ params }) {
  const { id } = await params;
  const product = getProductById(id);
  if (!product) notFound();

  const related = products
    .filter((p) => p.category === product.category && p.id !== product.id)
    .slice(0, 4);

  return (
    <div className="max-w-7xl mx-auto px-4 py-8">
      <p className="text-xs text-ink/50 mb-4">
        <Link href="/" className="hover:underline">
          Home
        </Link>{" "}
        /{" "}
        <Link
          href={`/category/${product.category}`}
          className="hover:underline"
        >
          {getCategoryName(product.category)}
        </Link>{" "}
        / {product.name}
      </p>

      <ProductDetailClient product={product} />

      {related.length > 0 && (
        <ProductGrid products={related} title="You may also like" />
      )}
    </div>
  );
}
