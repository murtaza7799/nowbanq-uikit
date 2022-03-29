module.exports = {
  preset: "ts-jest",
  testPathIgnorePatterns: ["/node_modules/", "/uikit/dist/", "/.storybook/"],
  setupFilesAfterEnv: ["<rootDir>/src/setupTests.js"],
  transform: {
    "\\.(js|jsx)?$": "babel-jest",
    "^.+\\.svg$": "<rootDir>/svgTransform.js",
  },
};
