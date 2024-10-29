import { convertFixtureToJson } from '@codemod-utils/tests';

const inputProject = convertFixtureToJson('v2-addon-01/input');
const outputProject = convertFixtureToJson('v2-addon-01/output');

export { inputProject, outputProject };
