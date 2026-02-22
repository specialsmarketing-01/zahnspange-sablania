"use client";

import { useEffect } from "react";

export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  useEffect(() => {
    console.error(error);
  }, [error]);

  return (
    <div style={{ padding: "2rem", textAlign: "center", minHeight: "40vh", display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center" }}>
      <h2 style={{ color: "#274a82", marginBottom: "1rem" }}>Etwas ist schiefgelaufen</h2>
      <p style={{ color: "#555", marginBottom: "1.5rem" }}>
        Bitte versuchen Sie die Seite erneut zu laden.
      </p>
      <button
        type="button"
        onClick={() => reset()}
        style={{
          padding: "0.5rem 1rem",
          background: "#274a82",
          color: "white",
          border: "none",
          borderRadius: "0.5rem",
          cursor: "pointer",
        }}
      >
        Erneut versuchen
      </button>
    </div>
  );
}
