import React from "react";
import '@testing-library/jest-dom';
import { render, screen, act } from "@testing-library/react";
import { App } from "~/components/App";
import { getMessage } from "./mocks/chrome.i18n";
import { success, error, loading } from "./mocks/fetch";

describe("App.tsx", () => {
  beforeEach(() => {
    const chrome: any = { i18n: { getMessage } };
    global.chrome = chrome;
  });

  afterEach(() => {
    global.chrome = undefined;
  });

  describe("when the request is loading", () => {
    beforeEach(() => { global.fetch = loading; });
    afterEach(() => { global.fetch = undefined; });

    test("loading text is rendered", () => {
      render(<App/>);
      expect(screen.getByText("Loading...")).toBeInTheDocument();
    });
  });

  describe("when the request is a success", () => {
    beforeEach(() => { global.fetch = success; });
    afterEach(() => { global.fetch = undefined; });

    test("response is rendered", async () => {
      await act(() => render(<App/>));
      expect(screen.getByTestId("response")).toBeInTheDocument();
    });
  });

  describe("when the request throws an error", () => {
    beforeEach(() => { global.fetch = error; });
    afterEach(() => { global.fetch = undefined; });

    test("error is rendered", async () => {
      await act(() => render(<App/>));
      expect(screen.getByTestId("error")).toBeInTheDocument();
    });
  });
});
