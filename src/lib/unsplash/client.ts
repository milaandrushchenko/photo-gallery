const UNSPLASH_API_URL = "https://api.unsplash.com";

export async function getPhotos(page = 1, perPage = 30) {
  const accessKey = process.env.UNSPLASH_ACCESS_KEY;

  if (!accessKey) {
    throw new Error("UNSPLASH_ACCESS_KEY is not configured");
  }

  const response = await fetch(
    `${UNSPLASH_API_URL}/photos?page=${page}&per_page=${perPage}`,
    {
      headers: {
        Authorization: `Client-ID ${accessKey}`,
      },
    },
  );

  if (!response.ok) {
    throw new Error(`Failed to fetch photos: ${response.status}`);
  }

  return response.json();
}
