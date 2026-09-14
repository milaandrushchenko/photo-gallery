"use client";

import { useState } from "react";

import type { Photo } from "@/types/photo";

import { GalleryViewSwitcher } from "@/components/GalleryViewSwitcher/GalleryViewSwitcher";
import { PhotoCard } from "@/components/PhotoCard/PhotoCard";

import styles from "./Gallery.module.scss";

interface GalleryProps {
  photos: Photo[];
}

export function Gallery({ photos }: GalleryProps) {
  const [columns, setColumns] = useState<3 | 5>(3);

  return (
    <>
      <GalleryViewSwitcher columns={columns} onChange={setColumns} />

      <div
        className={`${styles.gallery} ${
          columns === 5 ? styles.fiveColumns : styles.threeColumns
        }`}
      >
        {photos.map((photo) => (
          <div key={photo.id} className={styles.item}>
            <PhotoCard photo={photo} />
          </div>
        ))}
      </div>
    </>
  );
}
