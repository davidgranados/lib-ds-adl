module.exports = {
  "setupFiles": ["<rootDir>/src/setupTests.ts"],
  "preset": "ts-jest",
  "testEnvironment": "node",
  "testPathIgnorePatterns": ["node_modules"],
  "collectCoverage": true,
  "collectCoverageFrom": [
    "**/*.{ts,tsx}",
    "!*.js",
    "!*.stories.tsx",
    "!**/node_modules/**",
    "!**/vendor/**"
  ],
  "coverageDirectory": "coverage",
  "coverageThreshold": {
    "global": {
      "branches": 0,
      "functions": 0,
      "lines": 0,
      "statements": 0
    }
  },
  "moduleDirectories": ["node_modules", "src"]
}
