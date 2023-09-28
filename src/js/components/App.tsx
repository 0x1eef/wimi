import React from "react";
import { ErrorRenderer } from "~/components/ErrorRenderer";
import { ResponseRenderer } from "~/components/ResponseRenderer";
import { useWebService } from "~/hooks/useWebService";

export function App() {
  const [response, error] = useWebService();
  const t = chrome.i18n.getMessage;
  if (response) {
    return (<ResponseRenderer response={response}/>);
  } else if (error) {
    return (<ErrorRenderer error={error}/>);
  } else {
    return (<div className="loader">{t("loading")}</div>);
  }
}
