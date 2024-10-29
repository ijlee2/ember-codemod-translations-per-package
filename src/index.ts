import {
  analyzeTemplates,
  createOptions,
  createTranslations,
} from './steps/index.js';
import type { CodemodOptions } from './types/index.js';

export function runCodemod(codemodOptions: CodemodOptions): void {
  const options = createOptions(codemodOptions);

  const translationKeys = analyzeTemplates(options);

  createTranslations(translationKeys, options);
}
