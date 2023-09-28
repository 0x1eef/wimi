import React from "react";

export function ErrorRenderer({ error }: {error: Error}) {
  return (
    <div className="error">
      <span>Error</span>:
      <span>&nbsp;{error.message}</span>
    </div>
  );
}
