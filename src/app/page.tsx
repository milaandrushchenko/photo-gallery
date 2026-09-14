import { Gallery } from "@/components/Gallery/Gallery";
import { getPhotos } from "@/lib/unsplash/client";

import styles from "./page.module.scss";

export default async function HomePage() {
  const photos = await getPhotos();

  return (
    <main className={styles.page}>
      <div className={styles.container}>
        <h1 className={styles.title}>Photo Gallery</h1>

        <Gallery photos={photos} />
      </div>
    </main>
  );
}
