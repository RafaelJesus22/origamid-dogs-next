"use client";

import { Photo } from "@/actions/get-photos";
import Image from "next/image";
import Link from "next/link";
import styles from "./feed.module.css";

interface Props {
  photos: Photo[];
}

export default function FeedPhotos({ photos }: Props) {
  return (
    <ul className={`${styles.feed} animeLeft`}>
      {photos?.map((photo) => (
        <li key={photo.id} className={styles.photo}>
          <Link href={`/foto/${photo.id}`} scroll={false}>
            <Image
              src={photo?.src}
              width={1500}
              height={1500}
              alt={photo.title}
              sizes="80vw"
            />
            <span className={styles.visualizacao}>{photo.acessos}</span>
          </Link>
        </li>
      ))}
      {!photos.length && (
        <div className="flex flex-1 items-center justify-center absolute inset-0">
          <p>Não existem postagem</p>
        </div>
      )}
    </ul>
  );
}
