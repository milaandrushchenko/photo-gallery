import Link from "next/link";

import styles from "./not-found.module.scss";

export default function NotFound() {
  return (
    <div className={styles.notFound}>
      <h1 className={styles.title}>Photo not found</h1>

      <p className={styles.description}>
        The photo you&apos;re looking for doesn&apos;t exist.
      </p>

      <Link href="/" className={styles.link}>
        Back to gallery
      </Link>
    </div>
  );
}
