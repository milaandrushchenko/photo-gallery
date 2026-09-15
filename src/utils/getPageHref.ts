export function getPageHref(page: number, query?: string) {
  const params = new URLSearchParams();

  if (query) {
    params.set("query", query);
  }

  params.set("page", String(page));

  return `/?${params.toString()}`;
}
