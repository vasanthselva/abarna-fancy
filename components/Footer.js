import { categories } from "@/data/products";
import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-navyDeep text-mist mt-16">
      <div className="max-w-7xl mx-auto px-4 py-12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">
        {/* Brand */}
        <div>
          <h3 className="font-display text-2xl text-brassLight mb-3">
            Abarna Fancy
          </h3>
          <p className="text-sm text-mist/70 leading-6">
            A curated marketplace for goods chosen with care, not just sold at
            scale.
          </p>
        </div>

        {/* Shop */}
        <div>
          <h4 className="text-sm uppercase tracking-wider text-brass mb-3">
            Shop
          </h4>
          <ul className="space-y-2 text-sm">
            {categories.slice(0, 4).map((c) => (
              <li key={c.slug}>
                <Link
                  href={`/category/${c.slug}`}
                  className="hover:text-brassLight transition-colors"
                >
                  {c.name}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* Support */}
        <div>
          <h4 className="text-sm uppercase tracking-wider text-brass mb-3">
            Support
          </h4>
          <ul className="space-y-2 text-sm">
            <li>
              <Link
                href="https://wa.me/917639010048"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-brassLight transition-colors"
              >
                Contact Us
              </Link>
            </li>
          </ul>
        </div>
      </div>

      {/* Bottom */}
      <div className="border-t border-mist/10 py-4 text-center text-xs text-mist/50">
        © {new Date().getFullYear()} Abarna Fancy. All rights reserved.
      </div>
    </footer>
  );
}