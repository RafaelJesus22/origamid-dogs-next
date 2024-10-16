import { Photo } from "@/actions/get-photos";
import FeedPhotos from "./feed-photos";

interface Props {
  photos: Photo[];
}

export default async function Feed({ photos }: Props) {
  return (
    <div>
      <FeedPhotos photos={photos} />
    </div>
  );
}
