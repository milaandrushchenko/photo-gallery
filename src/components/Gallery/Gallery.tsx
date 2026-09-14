import type { Photo } from "@/types/photo";

import { PhotoCard } from "@/components/PhotoCard/PhotoCard";

import styles from "./Gallery.module.scss";

interface GalleryProps {
  photos: Photo[];
}

export function Gallery({ photos }: GalleryProps) {
  return (
    <div className={styles.gallery}>
      {photos.map((photo) => (
        <div key={photo.id} className={styles.item}>
          <PhotoCard photo={photo} />
        </div>
      ))}
    </div>
  );
}
