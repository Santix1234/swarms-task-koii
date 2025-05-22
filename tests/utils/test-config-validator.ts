import Ajv from 'ajv';
import testConfigSchema from '../schemas/test-config.schema.json';

export interface TestConfig {
    name: string;
    type: 'unit' | 'integration' | 'e2e';
    target: {
        language: 'typescript' | 'python' | 'javascript' | 'shell';
        component: string;
    };
    dependencies?: Array<{name: string; version?: string}>;
    environment?: Record<string, string | number | boolean>;
    testCases?: Array<{
        name: string;
        description?: string;
        expectedResult?: string | number | boolean | null;
    }>;
}

export class TestConfigValidator {
    private ajv: Ajv;

    constructor() {
        this.ajv = new Ajv({
            allErrors: true,
            coerceTypes: true
        });
    }

    validate(config: unknown): boolean {
        const validate = this.ajv.compile(testConfigSchema);
        return validate(config) as boolean;
    }

    getErrors(config: unknown): string[] | null {
        const validate = this.ajv.compile(testConfigSchema);
        if (!validate(config)) {
            return validate.errors?.map(err => 
                `${err.instancePath}: ${err.message || 'Invalid configuration'}`) || null;
        }
        return null;
    }
}

export default new TestConfigValidator();