"use client";

import { ErrorState } from "@/components/ErrorState/ErrorState";

export default function Error({ reset }: { reset: () => void }) {
  return (
    <ErrorState
      description="We couldn't load this photo. Please try again."
      onRetry={reset}
    />
  );
}
