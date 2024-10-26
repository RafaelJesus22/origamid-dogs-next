import getPhotoById from "@/actions/get-photo-by-id";
import PhotoContent from "@/components/custom/photo/photo-content";
import { notFound } from "next/navigation";

interface Props {
  params: {
    id: string;
  };
}

export async function generateMetadata({ params }: Props) {
  const { data } = await getPhotoById(params.id);

  if (!data) return { title: "Fotos" };

  return {
    title: data.photo.title,
  };
}

export default async function FotoPage({ params }: Props) {
  const { data } = await getPhotoById(params.id);

  if (!data) return notFound();

  return (
    <main className="container mainContainer">
      <PhotoContent data={data} single />
    </main>
  );
}
