import { TServerResponse } from "~/lib/response";

export function success(_path: RequestInfo | URL, _options?: RequestInit) {
  const json = () => (
    new Promise<TServerResponse>((resolve) => (
      resolve({
        YourFuckingIPAddress: "127.0.0.1",
        YourFuckingISP: "FooBar Ltd",
        YourFuckingCity: "Foo City",
        YourFuckingCountry: "United States of FooBar",
        YourFuckingTorExit: false
      })
    )
  ));

  return new Promise<any>((resolve) => {
    resolve({ status: 200, json });
  });
}

export function error(_path: RequestInfo | URL, _options?: RequestInit) {
  return new Promise<any>(() => {
    throw new Error("Request error");
  });
}

export function loading(_path: RequestInfo | URL, _options?: RequestInit) {
  return new Promise<any>(() => null);
}
