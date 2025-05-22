# Integrated Swarm Task System

... [previous content] ...

## Test Configuration Overview

### Test Infrastructure
- **Test Runner**: Jest with TypeScript support
- **Test Coverage**: Comprehensive test suites for all components
- **Configuration**: Centralized configuration in `jest.config.js`

### Test Types
1. **Unit Tests**: Verify individual component functionality
2. **Integration Tests**: Test component interactions
3. **Mock Tests**: Simulate complex scenarios

### Running Tests
```bash
# Run all tests
npm test

# Run tests for a specific component
npm test --prefix node
npm test --prefix coordinator
```

### Best Practices
- Write descriptive test cases
- Maintain high test coverage
- Use mock dependencies
- Test edge cases
- Keep tests independent

For detailed test configuration, see `tests/README.md`.

... [rest of the previous content] ...