import styles from "./SearchBar.module.scss";

interface SearchBarProps {
  query?: string;
}

export function SearchBar({ query }: SearchBarProps) {
  return (
    <form action="/" method="get" className={styles.search} role="search">
      <input
        type="search"
        name="query"
        defaultValue={query}
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
