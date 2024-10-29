import { convertFixtureToJson } from '@codemod-utils/tests';

const inputProject = convertFixtureToJson('v1-addon-01/input');
const outputProject = convertFixtureToJson('v1-addon-01/output');

export { inputProject, outputProject };
