import React, { ReactNode } from "react";
import { Footer } from "~/components/Footer";

export function Loader() {
  const t = chrome.i18n.getMessage;
  return (
    <div className="w-full h-48" data-testid="loader">
      <div className="flex flex-col h-5/6 justify-center w-3/4 m-auto"></div>
      <Footer>{t("loading")}</Footer>
    </div>
  );
}
