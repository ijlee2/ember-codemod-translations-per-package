import { convertFixtureToJson } from '@codemod-utils/tests';

const inputProject = convertFixtureToJson('v1-addon-03/input');
const outputProject = convertFixtureToJson('v1-addon-03/output');

export { inputProject, outputProject };
