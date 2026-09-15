"use client";

import { FormEvent, useState } from "react";
import { useRouter } from "next/navigation";

import styles from "./SearchBar.module.scss";

export function SearchBar() {
  const router = useRouter();
  const [query, setQuery] = useState("");

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();

    const trimmedQuery = query.trim();

    if (!trimmedQuery) {
      return;
    }

    router.push(`/?query=${encodeURIComponent(trimmedQuery)}`);
  }

  return (
    <form className={styles.search} onSubmit={handleSubmit} role="search">
      <input
        type="search"
        value={query}
        onChange={(event) => setQuery(event.target.value)}
        placeholder="Search photos"
        aria-label="Search photos"
        className={styles.input}
      />

      <button type="submit" className={styles.button}>
        Search
      </button>
    </form>
  );
}
