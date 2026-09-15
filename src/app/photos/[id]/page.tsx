import { PhotoDetails } from "@/components/PhotoDetails/PhotoDetails";
import { getPhoto } from "@/lib/unsplash/client";
import styles from "./page.module.scss";

interface PhotoPageProps {
  params: Promise<{
    id: string;
  }>;
}

export default async function PhotoPage({ params }: PhotoPageProps) {
  const { id } = await params;
  const photo = await getPhoto(id);

  return (
    <main className={styles.page}>
      <div className={styles.container}>
        <PhotoDetails photo={photo} />
      </div>
    </main>
  );
}
