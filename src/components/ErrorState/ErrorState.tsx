import styles from "./ErrorState.module.scss";

interface ErrorStateProps {
  title?: string;
  description?: string;
  onRetry: () => void;
}

export function ErrorState({
  title = "Something went wrong",
  description = "We couldn't load the data. Please try again.",
  onRetry,
}: ErrorStateProps) {
  return (
    <div className={styles.error}>
      <h2 className={styles.title}>{title}</h2>

      <p className={styles.description}>{description}</p>

      <button type="button" onClick={onRetry} className={styles.button}>
        Try again
      </button>
    </div>
  );
}
