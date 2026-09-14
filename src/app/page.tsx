import { Gallery } from "@/components/Gallery/Gallery";
import { getPhotos } from "@/lib/unsplash/client";

export default async function HomePage() {
  const photos = await getPhotos();

  return (
    <main>
      <h1>Photo Gallery</h1>

      <Gallery photos={photos} />
    </main>
  );
}
