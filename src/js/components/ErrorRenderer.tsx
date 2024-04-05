import React from "react";

export function ErrorRenderer({ error }: { error: Error }) {
  const t = chrome.i18n.getMessage;
  return (
    <div data-testid="error" className="w-full h-48">
      <div className="flex flex-col h-5/6 justify-center w-3/4 m-auto">
      </div>
      <footer className="flex items-center justify-center h-10">
        <span className="font-bold">{t("error")}</span>: {error.message}
      </footer>
    </div>
  );
}
