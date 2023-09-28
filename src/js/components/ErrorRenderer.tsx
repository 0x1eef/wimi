import React from "react";

export function ErrorRenderer({ error }: {error: Error}) {
  const t = chrome.i18n.getMessage;
  return (
    <div className="error">
      <span>{t("error")}</span>:
      <span>&nbsp;{error.message}</span>
    </div>
  );
}
