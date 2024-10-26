import getStats from "@/actions/get-stats";
import { Metadata } from "next";
import dynamic from "next/dynamic";

const ContaEstatisticas = dynamic(
  () => import("@/components/custom/conta/conta-estatisticas"),
  {
    loading: () => <p>Carregando...</p>,
    ssr: false,
  }
);

export const metadata: Metadata = {
  title: "Estatísticas | Minha conta",
};

export default async function EstatisticasPage() {
  const { data } = await getStats();

  if (!data) return null;

  return (
    <main>
      <ContaEstatisticas data={data} />
    </main>
  );
}
