import type { ReactNode } from "react";

export function Footer({ children }: { children: ReactNode }) {
  return (
    <footer className="flex h-10">
      <div className="w-3/4 m-auto">{children}</div>
    </footer>
  );
}
