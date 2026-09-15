import { PhotoDetails } from "@/components/PhotoDetails/PhotoDetails";
import { getPhoto } from "@/lib/unsplash/client";

interface PhotoPageProps {
  params: Promise<{
    id: string;
  }>;
}

export default async function PhotoPage({ params }: PhotoPageProps) {
  const { id } = await params;
  const photo = await getPhoto(id);

  return (
    <main>
      <PhotoDetails photo={photo} />
    </main>
  );
}
