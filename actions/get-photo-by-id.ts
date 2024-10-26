"use server";

import { PHOTO_GET } from "@/functions/api";
import apiError from "@/functions/api-error";
import { Photo } from "./get-photos";

export interface Comment {
  comment_ID: string;
  comment_post_ID: string;
  comment_author: string;
  comment_content: string;
}

export type PhotoData = {
  photo: Photo;
  comments: Comment[];
};

export default async function getPhotoById(id: string) {
  try {
    const { url } = PHOTO_GET(id);

    const response = await fetch(url, {
      next: {
        revalidate: 60,
        tags: ["photos", "comment"],
      },
    });

    if (!response.ok) throw new Error("404 | Foto não encontrada.");

    const data = (await response.json()) as PhotoData;

    return { data, ok: true, error: "" };
  } catch (error) {
    return apiError(error);
  }
}
