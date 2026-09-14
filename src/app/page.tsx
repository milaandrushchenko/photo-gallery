import { PhotoCard } from "@/components/PhotoCard/PhotoCard";
import { getPhotos } from "@/lib/unsplash/client";

export default async function HomePage() {
  const photos = await getPhotos();

  return (
    <main>
      <h1>Photo Gallery</h1>

      <div style={{ maxWidth: 400 }}>
        <PhotoCard photo={photos[0]} />
      </div>
    </main>
  );
}
