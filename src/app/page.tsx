import { Gallery } from "@/components/Gallery/Gallery";
import { Pagination } from "@/components/Pagination/Pagination";
import { SearchBar } from "@/components/SearchBar/SearchBar";
import { getPhotos, searchPhotos } from "@/lib/unsplash/client";

import styles from "./page.module.scss";
import { Photo } from "@/types/photo";

interface HomePageProps {
  searchParams: Promise<{
    page?: string;
    query?: string;
  }>;
}

export default async function HomePage({ searchParams }: HomePageProps) {
  const { page, query } = await searchParams;

  const currentPage = Math.max(1, Number(page) || 1);
  const searchQuery = query?.trim();

  let photos: Photo[];
  let totalPages: number | undefined;

  if (searchQuery) {
    const searchResult = await searchPhotos(searchQuery, currentPage);

    photos = searchResult.results;
    totalPages = searchResult.total_pages;
  } else {
    photos = await getPhotos(currentPage);
  }

  return (
    <main className={styles.page}>
      <div className={styles.container}>
        <h1 className={styles.title}>Photo Gallery</h1>

        <SearchBar query={searchQuery} />

        <Gallery photos={photos} />

        <Pagination
          currentPage={currentPage}
          query={searchQuery}
          totalPages={totalPages}
        />
      </div>
    </main>
  );
}
