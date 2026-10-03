
#!/usr/bin/env node
import { Command } from 'commander';
import { generateSDK } from './generator.js';

const program = new Command();

program
  .name('openapi-sdk-gen')
  .description('Generate fully-typed TypeScript interfaces and SDK methods from OpenAPI specs')
  .version('1.0.0')
  .requiredOption('-i, --input <urlOrPath>', 'URL or local file path to OpenAPI spec (JSON or YAML)')
  .requiredOption('-o, --output <path>', 'Output path for generated TypeScript file', './src/generated/api.ts')
  .action(async (options) => {
    try {
      await generateSDK({
        input: options.input,
        output: options.output,
      });
    } catch (err) {
      console.error('Failed to generate SDK:', err);
      process.exit(1);
    }
  });

program.parse(process.argv);
