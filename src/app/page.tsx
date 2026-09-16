import { Suspense } from "react";

import { GalleryResults } from "@/components/Gallery/GalleryResults";
import { Loader } from "@/components/Loader/Loader";
import { SearchBar } from "@/components/SearchBar/SearchBar";

import styles from "./page.module.scss";

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

  return (
    <main className={styles.page}>
      <div className={styles.container}>
        <h1 className={styles.title}>Photo Gallery</h1>

        <SearchBar query={searchQuery} />

        <Suspense
          key={`${searchQuery ?? ""}-${currentPage}`}
          fallback={
            <div className={styles.galleryLoader}>
              <Loader />
            </div>
          }
        >
          <GalleryResults currentPage={currentPage} query={searchQuery} />
        </Suspense>
      </div>
    </main>
  );
}
