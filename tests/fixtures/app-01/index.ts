import { convertFixtureToJson } from '@codemod-utils/tests';

const inputProject = convertFixtureToJson('app-01/input');
const outputProject = convertFixtureToJson('app-01/output');

export { inputProject, outputProject };
