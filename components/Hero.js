import Link from "next/link";
export default function Hero() {
  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-[#081521] via-[#0f1f2e] to-[#1a2d3f]">
      <div className="absolute inset-0 opacity-20 bg-[radial-gradient(circle_at_top_right,_#C9A24B,_transparent_55%)]" />
      <div className="absolute inset-0 opacity-10 bg-[linear-gradient(rgba(255,255,255,0.08)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.08)_1px,transparent_1px)] bg-[size:48px_48px]" />

      <div className="relative mx-auto flex min-h-[80vh] max-w-7xl items-center px-4 py-20 md:py-28">
        <div className="max-w-2xl">
          <p className="mb-4 text-xs uppercase tracking-[0.35em] text-[#C9A24B]">
            Abarna Fancy
          </p>

          <h1 className="text-4xl font-semibold leading-tight text-[#F7F1E8] md:text-6xl">
            Luxury pieces for everyday elegance.
          </h1>

          <p className="mt-5 max-w-xl text-base text-[#D6D0C8] md:text-lg">
            Discover curated fashion, jewelry, and home accents crafted to make
            every moment feel refined.
          </p>

          <div className="mt-8 flex flex-wrap gap-4">
           <Link
          href="/category/Stationary"
          className="inline-block mt-8 bg-brass hover:bg-orange transition-colors text-navyDeep font-medium px-8 py-3 rounded-full"
        >
          view products
        </Link>
          </div>
        </div>
      </div>
    </section>
  );
}