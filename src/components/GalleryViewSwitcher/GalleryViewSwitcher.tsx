"use client";

import { Columns3, Grid3X3 } from "lucide-react";

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
        aria-label="Show 3 columns"
        aria-pressed={columns === 3}
        title="3 columns"
      >
        <Columns3 size={20} aria-hidden="true" />
      </button>

      <button
        type="button"
        onClick={() => onChange(5)}
        aria-label="Show 5 columns"
        aria-pressed={columns === 5}
        title="5 columns"
      >
        <Grid3X3 size={20} aria-hidden="true" />
      </button>
    </div>
  );
}
