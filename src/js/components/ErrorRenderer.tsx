import React from "react";
import { Footer } from "~/components/Footer";

export function ErrorRenderer({ error }: { error: Error }) {
  const t = chrome.i18n.getMessage;
  return (
    <div data-testid="error" className="w-full h-full">
      <div className="flex flex-col h-5/6 justify-center w-3/4 m-auto"></div>
      <Footer>
        <span className="font-bold">{t("error")}</span>:
        <span data-testid="error-message">{error.message}</span>
      </Footer>
    </div>
  );
}
