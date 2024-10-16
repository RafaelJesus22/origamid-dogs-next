import { Photo } from "@/actions/get-photos";
import Image from "next/image";
import Link from "next/link";
import styles from "./feed.module.css";

interface Props {
  photos: Photo[];
}

export default async function FeedPhotos({ photos }: Props) {
  return (
    <ul className={`${styles.feed} animeLeft`}>
      {photos.map((photo) => (
        <li key={photo.id} className={styles.photo}>
          <Link href={`/foto/${photo.id}`} scroll={false}>
            <Image
              src={photo.src}
              width={1500}
              height={1500}
              alt={photo.title}
              sizes="80vw"
            />
            <span className={styles.visualizacao}>{photo.acessos}</span>
          </Link>
        </li>
      ))}
    </ul>
  );
}
