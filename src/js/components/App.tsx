import React from "react";
import { ErrorRenderer } from "~/components/ErrorRenderer";
import { ResponseRenderer } from "~/components/ResponseRenderer";
import { useWebService } from "~/hooks/useWebService";

export function App() {
  const [response, error] = useWebService();
  const t = chrome.i18n.getMessage;
  if (response) {
    return <ResponseRenderer response={response} />;
  } else if (error) {
    return <ErrorRenderer error={error} />;
  } else {
    return (
      <div className="w-full h-48" data-testid="loader">
        <div className="flex flex-col h-5/6 justify-center w-3/4 m-auto"></div>
        <footer className="flex items-center justify-center h-10">{t("loading")}</footer>
      </div>
    );
  }
}
