# Node Tests Documentation

## Overview
This directory contains comprehensive test suites for the Node component of the Swarm Task System.

## Test Configuration
- **Framework**: Jest with TypeScript support
- **Coverage Tool**: Istanbul (via Jest)
- **Mocking**: Custom mock configurations

## Test Types
1. **Unit Tests**: Located in respective module directories
2. **Integration Tests**: Verify component interactions
3. **Mock Tests**: Simulate complex scenarios

## Running Tests
### Prerequisites
- Node.js 18.x or later
- All project dependencies installed

### Commands
```bash
# Run all tests
npm test

# Run specific test suite
npm test -- path/to/test/file.test.ts

# Generate coverage report
npm run test:coverage
```

## Best Practices
- Write isolated, focused tests
- Use meaningful test descriptions
- Cover edge cases and error scenarios
- Maintain high test coverage
- Keep tests fast and deterministic

## Troubleshooting
- Ensure correct TypeScript configuration
- Check dependency versions
- Verify environment variables
- Use verbose mode for detailed output

## Configuration Files
- `jest.config.js`: Jest configuration
- `tsconfig.json`: TypeScript compiler settings
- `.env.test`: Test-specific environment variables

## Mock Strategy
Utilize comprehensive mocking for:
- External services
- Database interactions
- Complex dependencies

## Contributing
1. Write clear, descriptive tests
2. Follow existing test structure
3. Add tests for new features
4. Update documentation