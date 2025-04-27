import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "BURGER HEAVEN",
  description: "A hamburgueria orgânica favorita de São Paulo",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt">
      <body
        className="font-bowlby antialiased">
        {children}
      </body>
    </html>
  );
}
