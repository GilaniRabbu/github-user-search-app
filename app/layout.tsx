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
      <body className="h-full bg-[#F7F9F5] dark:bg-[#080A06] text-[#11160E] dark:text-[#ECF1E9]">
        <main className="min-h-full p-4">{children}</main>
      </body>
    </html>
  );
}
