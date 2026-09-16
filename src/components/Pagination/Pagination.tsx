import Link from "next/link";
import styles from "./Pagination.module.scss";
import { getPageHref } from "@/utils/getPageHref";

import { ChevronLeft, ChevronRight } from "lucide-react";
interface PaginationProps {
  currentPage: number;
  query?: string;
  totalPages?: number;
}

export function Pagination({
  currentPage,
  query,
  totalPages,
}: PaginationProps) {
  const maxVisiblePages = 5;

  let startPage = Math.max(1, currentPage - 2);
  let endPage =
    totalPages !== undefined
      ? Math.min(totalPages, startPage + maxVisiblePages - 1)
      : startPage + maxVisiblePages - 1;

  if (totalPages !== undefined && endPage - startPage + 1 < maxVisiblePages) {
    startPage = Math.max(1, endPage - maxVisiblePages + 1);
  }

  const pages = Array.from(
    { length: endPage - startPage + 1 },
    (_, index) => startPage + index,
  );
  const hasNextPage = totalPages === undefined || currentPage < totalPages;
  return (
    <nav className={styles.pagination} aria-label="Pagination">
      {currentPage > 1 && (
        <Link
          href={getPageHref(currentPage - 1, query)}
          className={styles.control}
          aria-label="Previous page"
        >
          <ChevronLeft size={18} aria-hidden="true" />
        </Link>
      )}

      <div className={styles.desktopPages}>
        {pages.map((page) => (
          <Link
            key={page}
            href={getPageHref(page, query)}
            className={`${styles.page} ${
              page === currentPage ? styles.active : ""
            }`}
            aria-current={page === currentPage ? "page" : undefined}
          >
            {page}
          </Link>
        ))}
      </div>

      <div className={styles.mobilePages}>
        {currentPage > 1 && (
          <Link
            href={getPageHref(currentPage - 1, query)}
            className={styles.page}
          >
            {currentPage - 1}
          </Link>
        )}

        <span className={`${styles.page} ${styles.active}`}>{currentPage}</span>

        {hasNextPage && (
          <Link
            href={getPageHref(currentPage + 1, query)}
            className={styles.page}
          >
            {currentPage + 1}
          </Link>
        )}
      </div>

      {hasNextPage && (
        <Link
          href={getPageHref(currentPage + 1, query)}
          className={styles.control}
          aria-label="Next page"
        >
          <ChevronRight size={18} aria-hidden="true" />
        </Link>
      )}
    </nav>
  );
}
