import { useWebService } from "~/hooks/useWebService";
export function App() {
  const t = chrome.i18n.getMessage;
  const [response, error] = useWebService();
  if (response) {
    return (
      <div data-testid="response" className="font-sans p-2 flex">
        <img className="w-8 h-8" src={`/images/flags/${response.countryCode}.svg`} />
        <div className="flex flex-col ml-3">
          <span className="text-xs">{response.IPAddress}</span>
          <span className="text-xs">{response.ISP}</span>
        </div>
      </div>
    );
  } else if (error) {
    return (
      <div data-testid="error" className="font-sans p-2 flex items-center w-full h-full">
        <img className="w-8 h-8" src={`/images/icon.svg`} />
        <span className="ml-3 text-xs">{t("error")}</span>
      </div>
    );
  } else {
    return (
      <div data-testid="loading" className="font-sans p-2 flex items-center w-full h-full">
        <img className="w-8 h-8" src={`/images/icon.svg`} />
        <span className="ml-3 text-xs">{t("loading")}</span>
      </div>
    );
  }
}
