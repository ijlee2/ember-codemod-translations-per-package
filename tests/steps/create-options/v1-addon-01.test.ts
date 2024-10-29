import { assert, test } from '@codemod-utils/tests';

import { createOptions } from '../../../src/steps/index.js';
import {
  codemodOptions,
  options,
} from '../../helpers/shared-test-setups/v1-addon-01.js';

test('steps | create-options > v1-addon-01', function () {
  assert.deepStrictEqual(createOptions(codemodOptions), options);
});
