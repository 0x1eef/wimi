import { TResponse, Response } from "/lib/response";
import { useEffect, useState } from "react";

type Maybe<T> = T | null;

export function useWebService(): [Maybe<TResponse>, Maybe<Error>] {
  const endpoint = "https://wtfismyip.com/json";
  const [response, setResponse] = useState<Maybe<TResponse>>(null);
  const [error, setError] = useState<Maybe<Error>>(null);

  function receive(res: Response) {
    if (res.status === 200) {
      return res.json();
    } else {
      const message = "There was an unexpected response from the web service. " +
                      `The status code was ${res.status}`;
      throw new Error(message);
    }
  }

  useEffect(() => {
    fetch(endpoint)
      .then(receive)
      .then((json) => setResponse(Response(json)))
      .catch((err) => setError(err));
  });

  return [response, error];
}
