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
    <html lang="en" className="h-full">
      <body className={`h-full bg-gray-50 dark:bg-gray-900`}>
        <main className="min-h-full p-4">{children}</main>
      </body>
    </html>
  );
}
