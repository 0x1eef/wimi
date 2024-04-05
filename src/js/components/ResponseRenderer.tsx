import React, { ReactNode } from "react";
import { TResponse } from "~/lib/response";
type TFunction = typeof chrome.i18n.getMessage;

export function ResponseRenderer({ response }: { response: TResponse }) {
  const t = chrome.i18n.getMessage;
  return (
    <div className="w-full h-48">
      <div className="flex flex-col h-5/6 justify-center w-3/4 m-auto" data-testid="response">
        <Row name={t("ip_address")} value={response.IPAddress} />
        <Row name={t("location")} value={`${response.City}, ${response.Country}`} />
        <Row name={t("isp")} value={response.ISP} />
        <Row name={t("tor_exit_node")} value={<BooleanLabel on={response.isTorExitNode} t={t} />} />
      </div>
      <footer className="flex items-center justify-center h-10">
        <a target="_blank" href="https://clean.myip.wtf">
          clean.myip.wtf
        </a>
      </footer>
    </div>
  );
}

function BooleanLabel({ on, t }: { on: boolean; t: TFunction }) {
  if (on) {
    return <label className="label label-rounded label-success">{t("yes")}</label>;
  } else {
    return <label className="label label-rounded label-error">{t("no")}</label>;
  }
}

function Row({ name, value }: { name: string; value: ReactNode }) {
  return (
    <div className="flex h-8">
      <div className="flex w-2/4 items-center font-semibold">{name}</div>
      <div className="flex w-2/4 items-center justify-end">{value}</div>
    </div>
  );
}
