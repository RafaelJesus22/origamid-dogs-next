import getPhotoById from "@/actions/get-photo-by-id";
import FeedModal from "@/components/custom/feed/feed-modal";
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

  return <FeedModal photo={data} />;
}
