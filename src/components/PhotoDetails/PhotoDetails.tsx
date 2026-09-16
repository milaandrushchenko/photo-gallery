import Image from "next/image";

import type { Photo } from "@/types/photo";

import styles from "./PhotoDetails.module.scss";
import Link from "next/link";

interface PhotoDetailsProps {
  photo: Photo;
}

export function PhotoDetails({ photo }: PhotoDetailsProps) {
  return (
    <article className={styles.details}>
      <div className={styles.imageWrapper}>
        <Image
          src={photo.urls.regular}
          alt={photo.alt_description ?? `Photo by ${photo.user.name}`}
          width={photo.width}
          height={photo.height}
          className={styles.image}
        />
      </div>

      <div className={styles.content}>
        <h1 className={styles.title}>
          {photo.description ?? photo.alt_description ?? "Untitled photo"}
        </h1>

        <p className={styles.author}>Photo by {photo.user.name}</p>

        <dl className={styles.metadata}>
          <div>
            <dt>Likes</dt>
            <dd>{photo.likes}</dd>
          </div>

          <div>
            <dt>Dimensions</dt>
            <dd>
              {photo.width} × {photo.height}
            </dd>
          </div>

          {photo.exif?.model && (
            <div>
              <dt>Camera</dt>
              <dd>{photo.exif.model}</dd>
            </div>
          )}

          {photo.exif?.aperture && (
            <div>
              <dt>Aperture</dt>
              <dd>ƒ/{photo.exif.aperture}</dd>
            </div>
          )}

          {photo.exif?.focal_length && (
            <div>
              <dt>Focal length</dt>
              <dd>{photo.exif.focal_length} mm</dd>
            </div>
          )}

          {photo.exif?.iso && (
            <div>
              <dt>ISO</dt>
              <dd>{photo.exif.iso}</dd>
            </div>
          )}
        </dl>

        {photo.tags && photo.tags.length > 0 && (
          <div className={styles.tags}>
            {photo.tags.map((tag) => (
              <Link
                key={tag.title}
                href={`/?query=${encodeURIComponent(tag.title)}`}
                className={styles.tag}
              >
                {tag.title}
              </Link>
            ))}
          </div>
        )}
      </div>
    </article>
  );
}
