import React from "react";

export default function Layout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return <main className="max-w-4xl mx-auto py-4">{children}</main>;
}
