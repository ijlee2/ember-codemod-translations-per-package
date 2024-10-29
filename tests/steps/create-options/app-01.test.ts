import { assert, test } from '@codemod-utils/tests';

import { createOptions } from '../../../src/steps/index.js';
import {
  codemodOptions,
  options,
} from '../../helpers/shared-test-setups/app-01.js';

test('steps | create-options > app-01', function () {
  assert.deepStrictEqual(createOptions(codemodOptions), options);
});
