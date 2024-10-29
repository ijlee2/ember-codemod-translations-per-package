import { createFiles } from '@codemod-utils/files';
import { flatten, unflatten } from 'flat';
import { dump } from 'js-yaml';

import { Options } from '../types/index.js';

type optionsForOutputFile = {
  groupKeys: boolean;
  isJson: boolean;
};

function getOutputFile(
  translationKeys: string[],
  options: optionsForOutputFile,
): string {
  const { groupKeys, isJson } = options;

  const original: Record<string, string> = {};

  translationKeys.forEach((translationKey) => {
    original[translationKey] = 'some value';
  });

  let json = unflatten(original);

  if (groupKeys) {
    json = flatten(json, { maxDepth: 2 });
  }

  if (isJson) {
    return JSON.stringify(json, null, 2) + '\n';
  }

  if (Object.keys(original).length === 0) {
    return '';
  }

  return dump(json);
}

export function createTranslations(
  translationKeys: string[],
  options: Options,
) {
  const { projectRoot } = options;

  const newPath = 'translations/en-us.yaml';

  const newFile = getOutputFile(translationKeys, {
    groupKeys: true,
    isJson: false,
  });

  const fileMap = new Map([[newPath, newFile]]);

  createFiles(fileMap, {
    projectRoot,
  });
}
