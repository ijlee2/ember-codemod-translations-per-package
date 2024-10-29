import { readFileSync } from 'node:fs';
import { join } from 'node:path';

import { findFiles } from '@codemod-utils/files';

import type { Options } from '../types/index.js';
import { analyzeTemplate } from './analyze-templates/index.js';

const source = {
  app: 'app',
  'v1-addon': 'addon',
  'v2-addon': 'src',
} as const;

export function analyzeTemplates(options: Options): string[] {
  const { projectRoot, projectType } = options;

  const src = source[projectType];

  const filePaths = findFiles(`${src}/{components,templates}/**/*.hbs`, {
    projectRoot,
  });

  const translationKeys = new Set<string>();

  filePaths.forEach((filePath) => {
    const oldPath = join(projectRoot, filePath);
    const oldFile = readFileSync(oldPath, 'utf8');

    const { lineNumbersForDynamicKeys, staticKeys } = analyzeTemplate(oldFile);

    if (lineNumbersForDynamicKeys.length > 0) {
      console.warn(
        `WARNING: ${filePath} has dynamic keys on lines ${lineNumbersForDynamicKeys.join(', ')}.\n`,
      );
    }

    staticKeys.forEach((staticKey) => {
      translationKeys.add(staticKey);
    });
  });

  return Array.from(translationKeys).sort();
}
