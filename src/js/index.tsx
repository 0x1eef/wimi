import { render } from "preact";
import { App } from "~/components/App";

document.addEventListener("DOMContentLoaded", () => {
  const el: HTMLElement = document.querySelector("main")!;
  render(<App />, el);
});
