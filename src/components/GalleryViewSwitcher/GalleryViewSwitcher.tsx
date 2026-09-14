"use client";

import styles from "./GalleryViewSwitcher.module.scss";

interface GalleryViewSwitcherProps {
  columns: 3 | 5;
  onChange: (columns: 3 | 5) => void;
}

export function GalleryViewSwitcher({
  columns,
  onChange,
}: GalleryViewSwitcherProps) {
  return (
    <div className={styles.switcher}>
      <button
        type="button"
        onClick={() => onChange(3)}
        aria-pressed={columns === 3}
      >
        3 columns
      </button>

      <button
        type="button"
        onClick={() => onChange(5)}
        aria-pressed={columns === 5}
      >
        5 columns
      </button>
    </div>
  );
}
