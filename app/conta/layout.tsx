import AccountHeader from "@/components/custom/conta/conta-header";
import React from "react";

export default function ContaLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <div className="container">
      <AccountHeader />
      {children}
    </div>
  );
}
