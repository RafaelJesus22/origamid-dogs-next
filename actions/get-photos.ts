"use server";

export type Photo = {
  id: number;
  author: string;
  title: string;
  date: string;
  src: string;
  peso: string;
  idade: string;
  acessos: string;
  total_comments: string;
};

export async function getPhotos(): Promise<Photo[]> {
  const response = await fetch(
    "https://dogsapi.origamid.dev/json/api/photo/?_page=1&total=6&user=0",
    {
      next: { revalidate: 60, tags: ["photos"] },
    }
  );
  return (await response.json()) as Photo[];
}
