import getPhotos from "@/actions/get-photos";
import { getUser } from "@/actions/get-user";
import Feed from "@/components/custom/feed/feed";
import Link from "next/link";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Minha conta",
};

export default async function ContaPage() {
  const { data: user } = await getUser();
  const { data: photos } = await getPhotos({ user: user?.nome });

  return (
    <main>
      {photos?.length ? (
        <Feed photos={photos || []} />
      ) : (
        <div>
          <p className="text-slate-700 text-xl mb-4">Nenhuma foto encontrada</p>
          <Link href="/conta/postar" className="button inline-block">
            Poste uma agora
          </Link>
        </div>
      )}
    </main>
  );
}
