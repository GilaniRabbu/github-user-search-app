import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "GitHub User Search",
  description: "Search for GitHub users and view their profiles",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="h-full bg-blue-50 dark:bg-blue-900">
        <main className="min-h-full p-4">{children}</main>
      </body>
    </html>
  );
}
