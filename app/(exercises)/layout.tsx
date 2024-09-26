import { HomeIcon } from "lucide-react";
import Link from "next/link";
import React from "react";

export default function Layout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <main className="max-w-4xl mx-auto p-4">
      <Link href="/" className="flex items-center gap-2 mb-2">
        <HomeIcon /> Go home
      </Link>
      {children}
    </main>
  );
}
