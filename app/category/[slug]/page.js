import ProductGrid from "@/components/ProductGrid";
import {
  getProductsByCategory,
  getCategoryName,
  categories,
} from "@/data/products";
import Link from "next/link";
import { notFound } from "next/navigation";

export function generateStaticParams() {
  return categories.map((c) => ({ slug: c.slug }));
}

export default async function CategoryPage({ params }) {
  const { slug } = await params;
  const items = getProductsByCategory(slug);
  const name = getCategoryName(slug);

  if (!categories.find((c) => c.slug === slug)) {
    notFound();
  }

  return (
    <div>
      <div className="bg-navy py-10">
        <div className="max-w-7xl mx-auto px-4">
          <p className="text-brass text-xs mb-2">
            <Link href="/" className="hover:underline">
              Home
            </Link>{" "}
            / {name}
          </p>
          <h1 className="font-display text-3xl md:text-4xl text-ivory">
            {name}
          </h1>
          <p className="text-mist/70 mt-2 text-sm">
            {items.length} {items.length === 1 ? "product" : "products"}
          </p>
        </div>
      </div>

      {items.length > 0 ? (
        <ProductGrid products={items} />
      ) : (
        <p className="max-w-7xl mx-auto px-4 py-16 text-center text-ink/60">
          No products in this category yet.
        </p>
      )}
    </div>
  );
}
