import type { Photo } from "@/types/photo";

const UNSPLASH_API_URL = "https://api.unsplash.com";
const DEFAULT_PER_PAGE = 30;

export async function getPhotos(
  page = 1,
  perPage = DEFAULT_PER_PAGE,
): Promise<Photo[]> {
  const accessKey = process.env.UNSPLASH_ACCESS_KEY;

  if (!accessKey) {
    throw new Error("UNSPLASH_ACCESS_KEY is not configured");
  }

  const params = new URLSearchParams({
    page: String(page),
    per_page: String(perPage),
  });

  const response = await fetch(
    `${UNSPLASH_API_URL}/photos?${params.toString()}`,
    {
      headers: {
        Authorization: `Client-ID ${accessKey}`,
      },
    },
  );

  if (!response.ok) {
    throw new Error(
      `Failed to fetch photos: ${response.status} ${response.statusText}`,
    );
  }

  return response.json() as Promise<Photo[]>;
}
