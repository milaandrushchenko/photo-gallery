import Image from "next/image";

import type { Photo } from "@/types/photo";

interface PhotoDetailsProps {
  photo: Photo;
}

export function PhotoDetails({ photo }: PhotoDetailsProps) {
  return (
    <article>
      <Image
        src={photo.urls.regular}
        alt={photo.alt_description ?? `Photo by ${photo.user.name}`}
        width={photo.width}
        height={photo.height}
      />

      <div>
        <h1>
          {photo.description ?? photo.alt_description ?? "Untitled photo"}
        </h1>

        <p>Photo by {photo.user.name}</p>

        <dl>
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

          {photo.exif?.iso && (
            <div>
              <dt>ISO</dt>
              <dd>{photo.exif.iso}</dd>
            </div>
          )}
        </dl>
      </div>
    </article>
  );
}
