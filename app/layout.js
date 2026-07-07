import "./globals.css";
import { LikesProvider } from "@/context/LikesContext";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

export const metadata = {
  title: "Abarna Fancy",
  description:
    "Abarna Fancy — stationery, jewellery, hair accessories, beauty products, fragrance, and more, all in one place.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="font-body text-ink bg-ivory">
        <LikesProvider>
          <Header />
          <main className="min-h-[60vh]">{children}</main>
          <Footer />
        </LikesProvider>
      </body>
    </html>
  );
}
