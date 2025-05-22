import { describe, it, expect } from 'vitest';
import { validateTestConfig, TestConfig } from './test-config-schema';

describe('Test Configuration Schema', () => {
  const validConfig: TestConfig = {
    name: 'Node Worker Test',
    type: 'unit',
    language: 'typescript',
    description: 'Test node worker functionality',
    timeout: 60,
    environment: {
      required_variables: {
        'TEST_API_KEY': 'mock-key'
      },
      mock_dependencies: true
    },
    coverage: {
      enabled: true,
      threshold: {
        lines: 90,
        functions: 85,
        branches: 80
      }
    },
    stages: [
      { 
        name: 'setup', 
        description: 'Prepare test environment' 
      },
      { 
        name: 'execute', 
        dependencies: ['setup'] 
      }
    ],
    compatibility: {
      min_node_version: '16.0.0',
      platforms: ['linux', 'darwin']
    }
  };

  it('should validate a complete configuration', () => {
    expect(() => validateTestConfig(validConfig)).not.toThrow();
  });

  it('should reject invalid configuration types', () => {
    const invalidConfigs = [
      { name: 123 },
      { type: 'invalid-type' },
      { language: 'rust' },
      { timeout: -1 }
    ];

    invalidConfigs.forEach(config => {
      expect(() => validateTestConfig(config)).toThrow();
    });
  });

  it('should allow partial configurations with required fields', () => {
    const minimalConfig = {
      name: 'Minimal Test',
      type: 'unit',
      language: 'typescript'
    };

    expect(() => validateTestConfig(minimalConfig)).not.toThrow();
  });

  it('should validate configuration with optional fields', () => {
    const configWithOptionals = {
      ...validConfig,
      params: {
        retries: 3,
        verbose: true
      }
    };

    expect(() => validateTestConfig(configWithOptionals)).not.toThrow();
  });
});