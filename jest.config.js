/** @type {import('ts-jest').JestConfigWithTsJest} */
module.exports = {
  preset: 'ts-jest',
  testEnvironment: 'jsdom',
  setupFilesAfterEnv: ['@testing-library/jest-dom/extend-expect'],
  moduleFileExtensions: ['ts', 'tsx', 'js', 'jsx', 'json', 'node'],
  moduleNameMapper: {
    "\\.(css|less|sass|scss)$": "identity-obj-proxy"
  },
  globals: {
    'ts-jest': {
      tsconfig: 'tsconfig.json',
      diagnostics: false,
    },
  },
  testMatch: [
    '<rootDir>/tests/**/*.test.(ts|tsx|js|jsx)',
  ],
  collectCoverageFrom: [
    '<rootDir>/src/**/*.(ts|tsx)',
  ],
  coverageReporters: ['json', 'lcov', 'text', 'clover'],
};
