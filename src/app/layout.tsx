import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import "./globals.css";
import { CartProvider } from "@/components/cart/CartContext";

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  variable: "--font-poppins",
});

export const metadata: Metadata = {
  title: "Sweet Dreams Bakery - Fresh Artisan Breads & Pastries",
  description: "Discover our handcrafted artisan breads, fresh pastries, and delicious cakes. Made with love and the finest ingredients every day.",
  keywords: "bakery, artisan bread, pastries, cakes, fresh bread, bakery near me",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${poppins.variable} font-poppins antialiased`}>
        <CartProvider>
          {children}
        </CartProvider>
      </body>
    </html>
  );
}
