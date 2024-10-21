"use client";

import { useUserContext } from "@/context/user-context";

export default function ContaPage() {
  const { user } = useUserContext();

  return (
    <main>
      <h1>Conta: {user?.nome}</h1>
    </main>
  );
}
