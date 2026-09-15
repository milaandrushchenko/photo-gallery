import Link from "next/link";
import styles from "./Pagination.module.scss";

interface PaginationProps {
  currentPage: number;
}

export function Pagination({ currentPage }: PaginationProps) {
  const pages = Array.from(
    { length: 5 },
    (_, index) => Math.max(1, currentPage - 2) + index,
  );

  return (
    <nav className={styles.pagination} aria-label="Pagination">
      {currentPage > 1 && (
        <Link
          href={`/?page=${currentPage - 1}`}
          className={styles.control}
          aria-label="Previous page"
        >
          ←
        </Link>
      )}

      <div className={styles.desktopPages}>
        {pages.map((page) => (
          <Link
            key={page}
            href={`/?page=${page}`}
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
          <Link href={`/?page=${currentPage - 1}`} className={styles.page}>
            {currentPage - 1}
          </Link>
        )}

        <span className={`${styles.page} ${styles.active}`}>{currentPage}</span>

        <Link href={`/?page=${currentPage + 1}`} className={styles.page}>
          {currentPage + 1}
        </Link>
      </div>

      <Link
        href={`/?page=${currentPage + 1}`}
        className={styles.control}
        aria-label="Next page"
      >
        →
      </Link>
    </nav>
  );
}
