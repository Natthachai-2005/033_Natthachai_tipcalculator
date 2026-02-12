import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Tip Calculator",
  description: "Tip calculator app",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="antialiased">
        {children}
      </body>
    </html>
  );
}
