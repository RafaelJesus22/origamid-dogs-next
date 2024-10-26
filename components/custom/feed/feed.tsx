"use client";

import { useEffect, useRef, useState } from "react";
import getPhotos, { Photo } from "@/actions/get-photos";
import FeedPhotos from "./feed-photos";
import Loading from "../helper/loading";
import styles from "./feed.module.css";

interface Props {
  photos: Photo[];
  user?: string | 0;
}

export default function Feed({ photos, user = 0 }: Props) {
  const [photosFeed, setPhotosFeed] = useState<Photo[]>(photos);
  const [isLoading, setIsLoading] = useState(false);
  const [isLastPage, setIsLastPage] = useState(photos.length === 6);
  const [page, setPage] = useState(1);

  const isFetching = useRef(false);

  function infiniteScroll() {
    if (isFetching.current || page === 1 || isLastPage) return;

    isFetching.current = true;
    setIsLoading(true);

    setTimeout(() => {
      setPage((current) => current + 1);
      isFetching.current = false;
      setIsLoading(false);
    }, 1000);
  }

  useEffect(() => {
    async function getPhotosByPage(page: number) {
      const actionData = await getPhotos(
        { page, total: 6, user },
        {
          cache: "no-store",
        }
      );

      if (actionData && actionData.data) {
        setPhotosFeed((photos) => [...photos, ...actionData.data]);
        if (actionData.data.length > 6) setIsLastPage(true);
      }
    }
    getPhotosByPage(page);
  }, [page, user]);

  useEffect(() => {
    if (isLastPage) {
      window.addEventListener("scroll", infiniteScroll);
      window.addEventListener("wheel", infiniteScroll);
    } else {
      window.removeEventListener("scroll", infiniteScroll);
      window.removeEventListener("wheel", infiniteScroll);
    }

    return () => {
      window.removeEventListener("scroll", infiniteScroll);
      window.removeEventListener("wheel", infiniteScroll);
    };
  }, [isLastPage]);

  return (
    <div>
      <FeedPhotos photos={photosFeed} />
      <div className={styles.loadingWrapper}>
        {isLoading && <Loading modal />}
      </div>
    </div>
  );
}
