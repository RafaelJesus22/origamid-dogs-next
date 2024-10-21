import ContaPhotoPost from "@/components/custom/conta/conta-photo-post";
import { Metadata } from "next";

export const runtime = "edge";

export const metadata: Metadata = {
  title: "Postar | Minha conta",
};

export default async function PostarPage() {
  return (
    <main>
      <ContaPhotoPost />
    </main>
  );
}
