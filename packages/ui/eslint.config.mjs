// // For more info, see https://github.com/storybookjs/eslint-plugin-storybook#configuration-flat-config-format
// import storybook from 'eslint-plugin-storybook';

// import { config } from '@repo/eslint-config/react-internal.js';

// /** @type {import("eslint").Linter.Config} */
// export default config;
import storybook from 'eslint-plugin-storybook';
import { defineConfig } from 'eslint/config';

export default defineConfig([
  {
    extends: '@repo/eslint-config/react-internal.js',
    ...storybook.configs['flat/recommended'],
  },
]);
