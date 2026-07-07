import Link from "next/link";

export default function NotFound() {
  return (
    <div className="max-w-lg mx-auto px-4 py-24 text-center">
      <h1 className="font-display text-5xl text-navy mb-4">404</h1>
      <p className="text-ink/60 mb-8">
        We couldn't find the page you're looking for.
      </p>
      <Link
        href="/"
        className="inline-block bg-navy text-mist px-8 py-3 rounded-full hover:bg-brass hover:text-navyDeep transition-colors font-medium"
      >
        Back to Home
      </Link>
    </div>
  );
}
