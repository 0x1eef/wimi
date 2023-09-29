import React from "react";
import '@testing-library/jest-dom';
import { render, screen } from "@testing-library/react";
import { ErrorRenderer } from "~/components/ErrorRenderer";
import { getMessage } from "./mocks/chrome.i18n";

describe("ErrorRenderer.tsx", () => {
  const error = new Error("This is an example error message");

  beforeEach(() => {
    const chrome: any = { i18n: { getMessage } };
    global.chrome = chrome;
    render(<ErrorRenderer error={error}/>);
  });

  afterEach(() => {
    global.chrome = undefined;
  });

  test("an error is rendered", () => {
    expect(screen.getByText("Error")).toBeInTheDocument();
    expect(screen.getByText(error.message)).toBeInTheDocument();
  });
});
