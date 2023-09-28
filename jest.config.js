module.exports = {
  preset: 'ts-jest',
  testEnvironment: "jsdom",
  "moduleNameMapper": {
    "^~/(.*)$": "<rootDir>/src/js/$1"
  }
};
