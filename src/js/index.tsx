import React from "react";
import ReactDOM from "react-dom/client";
import { App } from "~/components/App";

document.addEventListener("DOMContentLoaded", () => {
  const el: HTMLElement = document.getElementById("root")!;
  ReactDOM.createRoot(el).render(<App/>);
});
