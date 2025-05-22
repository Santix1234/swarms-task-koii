/** 
 * Comprehensive Jest Configuration for Koii Node Component
 * 
 * @description Configures test environment, module resolution, and test behavior
 * @see https://jestjs.io/docs/configuration
 */
module.exports = {
  // Test Environment Configuration
  testEnvironment: 'node', // Node.js runtime for backend testing

  // TypeScript Preset
  // Enables seamless TypeScript test processing
  preset: 'ts-jest',

  // Root Directories
  // Defines search paths for test files
  roots: [
    '<rootDir>/src',    // Primary source directory
    '<rootDir>/tests'   // Test files directory
  ],

  // Test File Detection
  // Patterns to identify test files
  testMatch: [
    '**/__tests__/**/*.+(ts|tsx)', // Test directories
    '**/?(*.)+(spec|test).+(ts|tsx)' // Test file patterns
  ],

  // Module Resolution
  // Helps manage complex imports and mocking
  moduleNameMapper: {
    // Alias and mock configurations
    '^@/(.*)$': '<rootDir>/src/$1', // Source import alias
    '^@koii/task-manager': '<rootDir>/tests/mocks/task-manager.ts', // Mock task manager
    '@_koii/namespace-wrapper': '<rootDir>/tests/mocks/namespace-wrapper.ts' // Mock namespace wrapper
  },

  // TypeScript Transformation
  transform: {
    '^.+\\.tsx?$': ['ts-jest', {
      tsconfig: 'tsconfig.json', // TypeScript configuration
      diagnostics: {
        warnOnly: true // Prevent type errors from blocking tests
      }
    }]
  },

  // Coverage Reporting
  collectCoverage: true,
  coverageDirectory: '<rootDir>/coverage', // Coverage output
  coverageReporters: ['text', 'lcov', 'json'], // Report formats
  coveragePathIgnorePatterns: [
    '/node_modules/', 
    '/tests/', 
    '/mocks/' // Ignore test infrastructure
  ],

  // Performance Tuning
  maxWorkers: '50%', // Balanced CPU utilization
  testTimeout: 15000, // 15 seconds max per test

  // Advanced Coverage Configuration
  collectCoverageFrom: [
    'src/**/*.{js,ts}', 
    '!**/node_modules/**', 
    '!**/*.d.ts'
  ],

  // Global Test Setup
  setupFiles: [
    '<rootDir>/tests/setup.ts' // Global test initialization
  ],

  // Mocking Behavior
  automock: false, // Manual mock control
  clearMocks: true, // Reset mocks between tests

  // Debugging and Verbosity
  verbose: true, // Detailed test output

  // Environment-Specific Configurations
  globals: {
    'ts-jest': {
      isolatedModules: true // Stricter type checking
    }
  },

  // Optional: Specific test environment variables
  // Uncomment and customize as needed
  // testEnvironmentOptions: {
  //   NODE_ENV: 'test'
  // }
};
