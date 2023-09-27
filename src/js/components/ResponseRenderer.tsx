import React from "react";
import { TResponse } from "/lib/response";

export function ResponseRenderer({ response }: {response: TResponse}) {
  const t = chrome.i18n.getMessage;

  function YesOrNoLabel({yes}: {yes: boolean}) {
    if (yes) {
      return (<label className="label label-rounded label-success">{t("yes")}</label>);
    } else {
      return (<label className="label label-rounded label-error">{t("no")}</label>);
    }
  }

  return (
    <div className="response">
      <div className="row">
        <div>{t("ip_address")}</div>
        <div>{response.IPAddress}</div>
      </div>
      <div className="row">
        <div>{t("isp")}</div>
        <div>{response.ISP}</div>
      </div>
      <div className="row">
        <div>{t("city")}</div>
        <div>{response.City}</div>
      </div>
      <div className="row">
        <div>{t("country")}</div>
        <div>{response.Country}</div>
      </div>
      <div className="row">
        <div>{t("tor_exit_node")}</div>
        <div>{<YesOrNoLabel yes={response.isTorExitNode}/>}</div>
      </div>
    </div>
  );
}
