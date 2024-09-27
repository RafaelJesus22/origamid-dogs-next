import { HomeIcon } from "lucide-react";
import Link from "next/link";

export default async function NotFound() {
  return (
    <main className="max-w-4xl mx-auto p-4 flex flex-col items-center justify-center h-[100vh]">
      <h1 className="font-bold text-3xl mb-4">Pagina não encontrada</h1>
      <Link href="/" className="flex items-center gap-2 mb-2">
        <HomeIcon /> Go home
      </Link>
    </main>
  );
}
