module.exports = {
  verbose: true,
  testEnvironment: "jsdom",
  setupFilesAfterEnv: ["<rootDir>/jest.setup.ts"],
  testPathIgnorePatterns: [
    "<rootDir>/cypress/",
    "<rootDir>/.next/",
    "<rootDir>/node_modules/",
  ],
  moduleNameMapper: {
    "\\.(scss|sass|css)$": "identity-obj-proxy",
    "@/components/(.*)": "<rootDir>/src/components/$1",
    "@/utils/(.*)": "<rootDir>/src/utils/$1",
  },
};
