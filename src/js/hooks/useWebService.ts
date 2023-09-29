import { useEffect, useState } from "react";
import { TResponse, Response } from "~/lib/response";

type Maybe<T> = T | null;

export function useWebService(): [Maybe<TResponse>, Maybe<Error>] {
  const endpoint = "https://wtfismyip.com/json";
  const [response, setResponse] = useState<Maybe<TResponse>>(null);
  const [error, setError] = useState<Maybe<Error>>(null);

  function receive(res: Response) {
    if (res.status === 200) {
      return res.json();
    } else {
      const message = `Unexpected server response (${res.status})`;
      throw new Error(message);
    }
  }

  useEffect(() => {
    fetch(endpoint)
      .then(receive)
      .then((json) => setResponse(Response(json)))
      .catch((err) => setError(err));
  }, []);

  return [response, error];
}
