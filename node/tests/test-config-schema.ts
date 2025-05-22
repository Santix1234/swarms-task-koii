import { z } from 'zod';

// Test Types Enum
export const TestTypeEnum = z.enum([
  'unit', 
  'integration', 
  'end-to-end', 
  'performance', 
  'security'
]);

// Language Enum
export const LanguageEnum = z.enum([
  'typescript', 
  'python', 
  'javascript', 
  'shell'
]);

// Test Configuration Schema
export const TestConfigSchema = z.object({
  // Required Fields
  name: z.string().min(3).max(100).describe('Descriptive name of the test suite'),
  type: TestTypeEnum.describe('Type of test being conducted'),
  language: LanguageEnum.describe('Programming language of the test'),
  
  // Optional Configuration
  description: z.string().optional().describe('Detailed description of the test suite'),
  
  // Test Execution Parameters
  timeout: z.number().min(0).max(3600).optional().default(30)
    .describe('Maximum test execution time in seconds'),
  
  // Environment Configuration
  environment: z.object({
    required_variables: z.record(z.string(), z.string()).optional()
      .describe('Environment variables required for test execution'),
    mock_dependencies: z.boolean().optional().default(false)
      .describe('Whether to mock external dependencies'),
  }).optional(),
  
  // Test Coverage
  coverage: z.object({
    enabled: z.boolean().optional().default(false),
    threshold: z.object({
      lines: z.number().min(0).max(100).optional().default(80),
      functions: z.number().min(0).max(100).optional().default(80),
      branches: z.number().min(0).max(100).optional().default(80),
    }).optional(),
  }).optional(),
  
  // Test Stages
  stages: z.array(z.object({
    name: z.string().min(1),
    description: z.string().optional(),
    dependencies: z.array(z.string()).optional(),
  })).optional(),
  
  // Specific Test Parameters
  params: z.record(z.string(), z.any()).optional()
    .describe('Additional test-specific parameters'),
  
  // Compatibility
  compatibility: z.object({
    min_node_version: z.string().optional(),
    max_node_version: z.string().optional(),
    platforms: z.array(z.string()).optional(),
  }).optional(),
});

// Function to validate test configuration
export function validateTestConfig(config: unknown) {
  try {
    return TestConfigSchema.parse(config);
  } catch (error) {
    if (error instanceof z.ZodError) {
      const formattedErrors = error.errors.map(err => ({
        path: err.path.join('.'),
        message: err.message
      }));
      
      throw new Error(JSON.stringify({
        message: 'Invalid test configuration',
        errors: formattedErrors
      }, null, 2));
    }
    throw error;
  }
}

export type TestConfig = z.infer<typeof TestConfigSchema>;