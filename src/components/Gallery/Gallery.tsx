"use client";

import { useSyncExternalStore } from "react";

import { GalleryViewSwitcher } from "@/components/GalleryViewSwitcher/GalleryViewSwitcher";
import { PhotoCard } from "@/components/PhotoCard/PhotoCard";
import type { Photo } from "@/types/photo";

import styles from "./Gallery.module.scss";

interface GalleryProps {
  photos: Photo[];
}

type Columns = 3 | 5;

const COLUMNS_STORAGE_KEY = "gallery-columns";

function getColumnsSnapshot(): Columns {
  return localStorage.getItem(COLUMNS_STORAGE_KEY) === "5" ? 5 : 3;
}

function getServerColumnsSnapshot(): Columns {
  return 3;
}

function subscribeToColumns(callback: () => void) {
  window.addEventListener("storage", callback);
  window.addEventListener("gallery-columns-change", callback);

  return () => {
    window.removeEventListener("storage", callback);
    window.removeEventListener("gallery-columns-change", callback);
  };
}

export function Gallery({ photos }: GalleryProps) {
  const columns = useSyncExternalStore(
    subscribeToColumns,
    getColumnsSnapshot,
    getServerColumnsSnapshot,
  );

  const handleColumnsChange = (value: Columns) => {
    localStorage.setItem(COLUMNS_STORAGE_KEY, String(value));

    window.dispatchEvent(new Event("gallery-columns-change"));
  };

  return (
    <>
      <GalleryViewSwitcher columns={columns} onChange={handleColumnsChange} />

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
