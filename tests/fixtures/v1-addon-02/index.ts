import { convertFixtureToJson } from '@codemod-utils/tests';

const inputProject = convertFixtureToJson('v1-addon-02/input');
const outputProject = convertFixtureToJson('v1-addon-02/output');

export { inputProject, outputProject };
