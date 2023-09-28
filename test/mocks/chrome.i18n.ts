import { readFileSync } from "fs";
import path from "path";

export function getMessage(key: string) {
  const buf = readFileSync(path.resolve("src/_locales/en/messages.json"));
  const messages = JSON.parse(buf.toString());
  return messages[key].message;
}
