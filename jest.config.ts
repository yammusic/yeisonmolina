import nextJest from 'next/jest.js'
import type { Config } from 'jest'
import type { JestConfigWithTsJest } from 'ts-jest'

const createJestConfig = nextJest({
  // Provide the path to your Next.js app to load next.config.js and .env files in your test environment
  dir: './',
})

// Add any custom config to be passed to Jest
const config: JestConfigWithTsJest = {
  preset: 'ts-jest',
  coverageProvider: 'v8',
  testEnvironment: 'jsdom',
  setupFilesAfterEnv: ['<rootDir>/__tests__/setup-jest.ts'],
  testMatch: [
    '<rootDir>/src/**/*.(spec|test).[tj]s?(x)'
  ],
  moduleDirectories: [
    '<rootDir>/node_modules',
  ],
  testPathIgnorePatterns: [
    '<rootDir>/.next/',
    '<rootDir>/node_modules/',
    '<rootDir>/coverage',
    '<rootDir>/dist'
  ],
  transformIgnorePatterns: [
    '<rootDir>/node_modules/'
  ],
}

// createJestConfig is exported this way to ensure that next/jest can load the Next.js config which is async
export default createJestConfig(config as Config)
