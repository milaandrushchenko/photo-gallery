import { Gallery } from "@/components/Gallery/Gallery";
import { getPhotos } from "@/lib/unsplash/client";
import styles from "./page.module.scss";
import { Pagination } from "@/components/Pagination/Pagination";

interface HomePageProps {
  searchParams: Promise<{
    page?: string;
  }>;
}

export default async function HomePage({ searchParams }: HomePageProps) {
  const { page } = await searchParams;

  const currentPage = Math.max(1, Number(page) || 1);

  const photos = await getPhotos(currentPage);

  return (
    <main className={styles.page}>
      <div className={styles.container}>
        <h1 className={styles.title}>Photo Gallery</h1>

        <Gallery photos={photos} />
        <Pagination currentPage={currentPage} />
      </div>
    </main>
  );
}
