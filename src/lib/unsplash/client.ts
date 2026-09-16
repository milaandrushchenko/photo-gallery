import type { Photo, SearchPhotosResponse } from "@/types/photo";

const UNSPLASH_API_URL = "https://api.unsplash.com";
const DEFAULT_PER_PAGE = 30;

class UnsplashApiError extends Error {
  constructor(
    public readonly status: number,
    statusText: string,
  ) {
    super(`Unsplash API request failed: ${status} ${statusText}`);
    this.name = "UnsplashApiError";
  }
}

async function unsplashFetch<T>(
  endpoint: string,
  params?: URLSearchParams,
): Promise<T> {
  const accessKey = process.env.UNSPLASH_ACCESS_KEY;

  if (!accessKey) {
    throw new Error("UNSPLASH_ACCESS_KEY is not configured");
  }

  const queryString = params ? `?${params.toString()}` : "";

  const response = await fetch(`${UNSPLASH_API_URL}${endpoint}${queryString}`, {
    headers: {
      Authorization: `Client-ID ${accessKey}`,
    },
  });

  if (!response.ok) {
    throw new UnsplashApiError(response.status, response.statusText);
  }

  return response.json() as Promise<T>;
}

export function getPhotos(
  page = 1,
  perPage = DEFAULT_PER_PAGE,
): Promise<Photo[]> {
  const params = new URLSearchParams({
    page: String(page),
    per_page: String(perPage),
  });

  return unsplashFetch<Photo[]>("/photos", params);
}

export function searchPhotos(
  query: string,
  page = 1,
  perPage = DEFAULT_PER_PAGE,
): Promise<SearchPhotosResponse> {
  const params = new URLSearchParams({
    query,
    page: String(page),
    per_page: String(perPage),
  });

  return unsplashFetch<SearchPhotosResponse>("/search/photos", params);
}

export async function getPhoto(id: string): Promise<Photo | null> {
  try {
    return await unsplashFetch<Photo>(`/photos/${encodeURIComponent(id)}`);
  } catch (error) {
    if (error instanceof UnsplashApiError && error.status === 404) {
      return null;
    }

    throw error;
  }
}
