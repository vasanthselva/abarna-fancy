import ProductGrid from "@/components/ProductGrid";
import { products } from "@/data/products";

export default async function SearchPage({ searchParams }) {
  const { q: rawQ } = await searchParams;
  const q = (rawQ || "").toLowerCase();
  const results = q
    ? products.filter(
        (p) =>
          p.name.toLowerCase().includes(q) ||
          p.category.toLowerCase().includes(q)
      )
    : [];

  return (
    <div>
      <div className="bg-black py-10">
        <div className="max-w-7xl mx-auto px-4">
          <h1 className="font-display text-3xl text-white">
            Results for "{rawQ}"
          </h1>
          <p className="text-white/70 mt-2 text-sm">
            {results.length} {results.length === 1 ? "product" : "products"}{" "}
            found
          </p>
        </div>
      </div>

      {results.length > 0 ? (
        <ProductGrid products={results} />
      ) : (
        <p className="max-w-7xl mx-auto px-4 py-16 text-center text-white/60">
          No products matched your search. Try a different term.
        </p>
      )}
    </div>
  );
}
