import { useEffect, ReactNode } from "react";
import { TResponse } from "~/lib/response";
import { Footer } from "~/components/Footer";
type TFunction = typeof chrome.i18n.getMessage;

export function ResponseRenderer({ response }: { response: TResponse }) {
  const t = chrome.i18n.getMessage;

  useEffect(() => {
    const { body } = document;
    const width = (() => {
      const addr = response.IPAddress;
      if (addr.length >= 30) {
        return 525;
      } else if (addr.length >= 20) {
        return 450;
      } else {
        return 400;
      }
    })();
    body.style.width = `${width}px`;
  }, [response]);

  return (
    <div className="w-full h-full">
      <div className="flex flex-col h-5/6 justify-center w-3/4 m-auto" data-testid="response">
        <Row name={t("ip_address")} value={response.IPAddress} />
        <Row name={t("location")} value={`${response.City}, ${response.Country}`} />
        <Row name={t("isp")} value={response.ISP} />
        <Row name={t("tor_exit_node")} value={<BooleanLabel on={response.isTorExitNode} t={t} />} />
      </div>
      <Footer>
        <a target="_blank" href={`https://${t("clean.myip.wtf")}`}>
          {t("clean.myip.wtf")}
        </a>
      </Footer>
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
      <div className="flex w-3/4 items-center justify-end">{value}</div>
    </div>
  );
}
