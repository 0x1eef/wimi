import React from "react";
import '@testing-library/jest-dom';
import { render, screen } from "@testing-library/react";
import { ErrorRenderer } from "~/components/ErrorRenderer";
import { getMessage } from "./mocks/chrome.i18n";

describe("ErrorRenderer.tsx", () => {
  const globalChrome = global.chrome;
  const error = new Error("This is an example error message");

  beforeEach(() => {
    const chrome: any = { i18n: { getMessage } };
    global.chrome = chrome;
    render(<ErrorRenderer error={error}/>);
  });

  afterEach(() => {
    global.chrome = globalChrome;
  });

  test("an error is rendered", () => {
    const { getByTestId, getByText } = screen;
    const span = getByTestId("error-message");
    expect(getByText("Error")).toBeInTheDocument();
    expect(span.textContent).toEqual(error.message);
  });
});
