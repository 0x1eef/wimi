const path = require("path");
const toptions = { tsconfig: "<rootDir>/etc/tsconfig.json" }
module.exports = {
  rootDir: path.resolve(__dirname, ".."),
  transform: { "^.+\\.(ts|tsx)$": ["ts-jest", toptions]},
  preset: "ts-jest",
  testEnvironment: "jsdom",
  moduleNameMapper: { "^~/(.*)$": "<rootDir>/src/js/$1" },
  moduleFileExtensions: ["js", "ts", "tsx"],
};
