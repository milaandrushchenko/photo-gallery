import Image from "next/image";
import Link from "next/link";

import type { Photo } from "@/types/photo";

import styles from "./PhotoCard.module.scss";

interface PhotoCardProps {
  photo: Photo;
}

export function PhotoCard({ photo }: PhotoCardProps) {
  return (
    <Link
      href={`/photos/${photo.id}`}
      className={styles.card}
      aria-label={`View photo by ${photo.user.name}`}
    >
      <Image
        src={photo.urls.regular}
        alt={photo.alt_description ?? `Photo by ${photo.user.name}`}
        width={photo.width}
        height={photo.height}
        className={styles.image}
      />
    </Link>
  );
}
