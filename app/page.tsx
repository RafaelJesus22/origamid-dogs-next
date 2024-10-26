import getPhotos from "@/actions/get-photos";
import Feed from "@/components/custom/feed/feed";

export default async function Home() {
  const { data: photos } = await getPhotos();

  return (
    <section className="container mainContainer">
      <Feed photos={photos || []} />
    </section>
  );
}
