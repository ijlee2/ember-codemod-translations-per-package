import { assertFixture, loadFixture, test } from '@codemod-utils/tests';

import { runCodemod } from '../../src/index.js';
import { inputProject, outputProject } from '../fixtures/v1-addon-01/index.js';
import { codemodOptions } from '../helpers/shared-test-setups/v1-addon-01.js';

test('index > v1-addon-01', function () {
  loadFixture(inputProject, codemodOptions);

  runCodemod(codemodOptions);

  assertFixture(outputProject, codemodOptions);

  // Check idempotence
  runCodemod(codemodOptions);

  assertFixture(outputProject, codemodOptions);
});