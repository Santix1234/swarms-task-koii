/** 
 * Jest Configuration for TypeScript Project
 * 
 * @description Comprehensive test configuration for the project
 * @type {import('ts-jest').JestConfigWithTsJest}
 */
module.exports = {
  // Use ts-jest preset for TypeScript support
  preset: 'ts-jest',

  // Specify the test environment (Node.js recommended for backend projects)
  testEnvironment: 'node',

  // Scan from root directory for tests
  roots: ['<rootDir>'],

  // Define test file matching pattern
  // Looks for .test.ts files in tests directories
  testMatch: ['**/tests/**/*.test.ts'],

  // Module name mapping for mocking external dependencies
  // Allows consistent testing by replacing actual modules with mocks
  moduleNameMapper: {
    '@_koii/create-task-cli': '<rootDir>/middle-server/middle-server/src/tests/mocks/koii.ts',
    '@_koii/web3.js': '<rootDir>/middle-server/middle-server/src/tests/mocks/koii.ts'
  },

  // TypeScript transformation configuration
  transform: {
    // Use ts-jest for TypeScript file processing
    '^.+\\.tsx?$': ['ts-jest', {
      // Use project's TypeScript configuration
      tsconfig: 'tsconfig.json'
    }]
  },

  // Optional: Coverage reporting configuration
  coverageDirectory: './coverage',
  collectCoverageFrom: [
    'src/**/*.{js,ts}',
    '!**/node_modules/**',
    '!**/tests/**'
  ],

  // Optional: Performance and timeout settings
  maxWorkers: '50%',
  testTimeout: 10000 // 10 seconds max per test
};