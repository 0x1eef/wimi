import React from "react";
import '@testing-library/jest-dom';
import { render, screen } from "@testing-library/react";
import { ResponseRenderer } from "~/components/ResponseRenderer";
import { getMessage } from "./mocks/chrome.i18n";

describe("ResponseRenderer.tsx", () => {
  const globalChrome = global.chrome;

  beforeEach(() => {
    const chrome: any = { i18n: { getMessage } };
    global.chrome = chrome;
  });

  afterEach(() => {
    global.chrome = globalChrome;
  });

  const defaultResponse = {
    IPAddress: "89.222.123.45",
    ISP: "FooBar Ltd",
    City: "FooBar City",
    Country: "United States of FooBar",
    isTorExitNode: false
  };

  describe("when isTorExitNode is false", () => {
    const response = { ...defaultResponse };

    beforeEach(() => {
      render(<ResponseRenderer response={response}/>);
    });

    test("an IP address is rendered", () => {
      expect(screen.getByText("IP Address")).toBeInTheDocument();
      expect(screen.getByText(response.IPAddress)).toBeInTheDocument();
    });

    test("an ISP is rendered", () => {
      expect(screen.getByText("ISP")).toBeInTheDocument();
      expect(screen.getByText(response.ISP)).toBeInTheDocument();
    });

    test("a location is rendered", () => {
      expect(screen.getByText("Location")).toBeInTheDocument();
      expect(screen.getByText(`${response.City}, ${response.Country}`)).toBeInTheDocument();
    });

    test("isTorExitNode is rendered as No", () => {
      expect(screen.getByText("Tor exit node")).toBeInTheDocument();
      expect(screen.getByText("No")).toBeInTheDocument();
    });
  });

  describe("when isTorExitNode is true", () => {
    const response = { ...defaultResponse, isTorExitNode: true };

    beforeEach(() => {
      render(<ResponseRenderer response={response}/>);
    });

    test("isTorExitNode is rendered as Yes", () => {
      expect(screen.getByText("Tor exit node")).toBeInTheDocument();
      expect(screen.getByText("Yes")).toBeInTheDocument();
    });
  });
});
