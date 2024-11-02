import getPhotos from "@/actions/get-photos";
import Feed from "@/components/custom/feed/feed";

interface Props {
  params: {
    user: string;
  };
}

export default async function UserPage({ params }: Props) {
  const { data } = await getPhotos({ user: params.user });

  if (!data) return null;

  return (
    <section className="container mainSection">
      <h1 className="title">{params.user}</h1>
      <Feed photos={data} user={params.user} />
    </section>
  );
}
