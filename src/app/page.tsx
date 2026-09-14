import { getPhotos } from "@/lib/unsplash/client";

export default async function HomePage() {
  const photos = await getPhotos();

  return (
    <main>
      <h1>Photo Gallery</h1>

      <pre>{JSON.stringify(photos[0], null, 2)}</pre>
    </main>
  );
}
