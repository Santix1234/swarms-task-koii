/** 
 * Comprehensive Jest Configuration for Koii Coordinator Middle Server
 * 
 * @description Configures test environment, module resolution, and test behavior
 * @see https://jestjs.io/docs/configuration
 */
module.exports = {
  // Test Environment Configuration
  // Determines the test runtime environment
  testEnvironment: 'node', // Node.js environment for backend testing

  // Preset for TypeScript support
  // Enables automatic TypeScript processing
  preset: 'ts-jest',

  // Root Directories
  // Specifies where Jest should look for test files
  roots: [
    '<rootDir>/src', // Primary source directory
    '<rootDir>/tests' // Test files directory
  ],

  // Test File Matching Patterns
  // Controls which files are considered tests
  testMatch: [
    '**/__tests__/**/*.+(ts|tsx)', // Match test directories
    '**/?(*.)+(spec|test).+(ts|tsx)' // Match test files with spec/test suffix
  ],

  // Module Name Mapping
  // Helps resolve module imports during testing
  moduleNameMapper: {
    // Mock external dependencies or complex imports
    '^@/(.*)$': '<rootDir>/src/$1', // Alias for source imports
    '@_koii/create-task-cli': '<rootDir>/src/tests/mocks/koii.ts', // Mock Koii CLI
    '@_koii/web3.js': '<rootDir>/src/tests/mocks/koii.ts' // Mock Web3 library
  },

  // Transform Configuration
  // Defines how different file types are processed
  transform: {
    // TypeScript transformation using ts-jest
    '^.+\\.tsx?$': ['ts-jest', {
      tsconfig: 'tsconfig.json', // Use project's TypeScript config
      diagnostics: {
        warnOnly: true // Prevent test failures on type errors
      }
    }]
  },

  // Coverage Report Configuration
  // Generates code coverage reports
  collectCoverage: true,
  coverageDirectory: '<rootDir>/coverage', // Output directory
  coverageReporters: ['text', 'lcov', 'json'], // Report formats
  coveragePathIgnorePatterns: [
    '/node_modules/', 
    '/tests/', 
    '/mocks/' // Ignore test and mock files
  ],

  // Performance and Timeout Settings
  maxWorkers: '50%', // Use half available CPU cores
  testTimeout: 10000, // 10 seconds max per test

  // Additional Jest Configuration Options
  verbose: true, // Detailed test output
  collectCoverageFrom: [
    'src/**/*.{js,ts}', 
    '!**/node_modules/**', 
    '!**/*.d.ts'
  ],

  // Setup and Teardown Files
  // Global test setup scripts
  setupFiles: [
    '<rootDir>/tests/setup.ts' // Global test configuration
  ],

  // Mock Configuration
  // Global mock settings
  automock: false, // Disable automatic mocking
  clearMocks: true // Clear mock calls between tests

  // Uncomment for specific environment configurations
  // globalSetup: './jest.global-setup.js',
  // globalTeardown: './jest.global-teardown.js',
};
