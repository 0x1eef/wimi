import { TResponse, Response } from "/lib/response";
import { useEffect, useState } from "react";

type Maybe<T> = T | null;

export function useWebService(): [Maybe<TResponse>, Maybe<Error>] {
  const endpoint = "https://wtfismyip.com/json";
  const [response, setResponse] = useState<Maybe<TResponse>>(null);
  const [error, setError] = useState<Maybe<Error>>(null);

  useEffect(() => {
    fetch(endpoint)
      .then((res) => res.json())
      .then((json) => setResponse(Response(json)))
      .catch((err) => setError(err));
  });

  return [response, error];
}
