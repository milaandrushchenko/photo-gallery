import { EmptyState } from "@/components/EmptyState/EmptyState";
import { Gallery } from "@/components/Gallery/Gallery";
import { Pagination } from "@/components/Pagination/Pagination";
import { getPhotos, searchPhotos } from "@/lib/unsplash/client";

interface GalleryResultsProps {
  currentPage: number;
  query?: string;
}

export async function GalleryResults({
  currentPage,
  query,
}: GalleryResultsProps) {
  if (query) {
    const searchResult = await searchPhotos(query, currentPage);
    const photos = searchResult.results;

    if (photos.length === 0) {
      return (
        <EmptyState
          title={`No photos found for "${query}"`}
          description="Try searching with a different keyword."
        />
      );
    }

    return (
      <>
        <Gallery photos={photos} />
        <Pagination
          currentPage={currentPage}
          query={query}
          totalPages={searchResult.total_pages}
        />
      </>
    );
  }

  const photos = await getPhotos(currentPage);

  if (photos.length === 0) {
    return (
      <EmptyState
        title="No photos found"
        description="There are no photos available on this page."
      />
    );
  }

  return (
    <>
      <Gallery photos={photos} />
      <Pagination currentPage={currentPage} />
    </>
  );
}
