"use client";

import Link from "next/link";
import { useRouter } from "next/navigation";
import { useState } from "react";
import { Search, Menu, X } from "lucide-react";
import { categories } from "@/data/products";

export default function Header() {
  const router = useRouter();
  const [query, setQuery] = useState("");
  const [menuOpen, setMenuOpen] = useState(false);

  function handleSearch(e) {
    e.preventDefault();

    if (query.trim()) {
      router.push(`/search?q=${encodeURIComponent(query.trim())}`);
      setMenuOpen(false);
    }
  }

  return (
    <header className="sticky top-0 z-50 shadow-md">
      {/* Header */}
      <div className="bg-navy">
        <div className="max-w-7xl mx-auto px-4 py-4">
          {/* Logo + Desktop Search + Mobile Menu */}
          <div className="flex items-center gap-4">
            {/* Logo */}
            <Link href="/" className="shrink-0">
              <span className="font-display text-2xl md:text-3xl text-black tracking-wide">
                Abarna Fancy
              </span>
            </Link>

            {/* Desktop Search */}
            <form
              onSubmit={handleSearch}
              className="hidden md:flex flex-1 items-center bg-search rounded-full overflow-hidden"
            >
              <input
                type="text"
                value={query}
                onChange={(e) => setQuery(e.target.value)}
                placeholder="Search for stationery, bags, jewelry..."
                className="flex-1 px-5 py-2.4 bg-transparent outline-none text-black"
              />

              <button
                type="submit"
                className="bg-black hover:bg-gray-800 px-5 py-2.5 text-white"
              >
                <Search size={18} />
              </button>
            </form>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setMenuOpen(!menuOpen)}
              className="ml-auto md:hidden text-black"
              aria-label="Toggle Menu"
            >
              {menuOpen ? <X size={28} /> : <Menu size={28} />}
            </button>
          </div>

          {/* Mobile Search */}
          <div className="mt-4 md:hidden">
            <form
              onSubmit={handleSearch}
              className="flex items-center bg-search rounded-full overflow-hidden"
            >
              <input
                type="text"
                value={query}
                onChange={(e) => setQuery(e.target.value)}
                placeholder="Search..."
                className="flex-1 px-4 py-1.5 bg-transparent outline-none text-black"
              />

              <button
                type="submit"
                className="bg-black hover:bg-gray-800 px-5 py-2.5 text-white"
              >
                <Search size={18} />
              </button>
            </form>
          </div>
        </div>
      </div>

      {/* Desktop Categories */}
      <nav className="hidden md:block bg-navyDeep">
        <div className="max-w-7xl mx-auto px-4 flex gap-6 overflow-x-auto py-3 text-sm">
          {categories.map((c) => (
            <Link
              key={c.slug}
              href={`/category/${c.slug}`}
              className="whitespace-nowrap text-black hover:text-white transition"
            >
              {c.name}
            </Link>
          ))}
        </div>
      </nav>

      {/* Mobile Menu */}
      {menuOpen && (
        <nav className="md:hidden bg-navyDeep shadow-lg">
          {categories.map((c) => (
            <Link
              key={c.slug}
              href={`/category/${c.slug}`}
              onClick={() => setMenuOpen(false)}
              className="block px-4 py-3 border-b border-gray-300 text-black hover:bg-gray-200"
            >
              {c.name}
            </Link>
          ))}
        </nav>
      )}
    </header>
  );
}