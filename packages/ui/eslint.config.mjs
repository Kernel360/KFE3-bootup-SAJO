// // For more info, see https://github.com/storybookjs/eslint-plugin-storybook#configuration-flat-config-format
// import storybook from 'eslint-plugin-storybook';

// import { config } from '@repo/eslint-config/react-internal.js';

// /** @type {import("eslint").Linter.Config} */
// export default config;
import storybook from 'eslint-plugin-storybook';
import { defineConfig } from 'eslint/config';
import reactInternal from '../eslint-config/react-internal.js';

export default defineConfig([
  ...reactInternal, // ← 가장 먼저 적용
  // Storybook 추천 규칙 (배열 형태)
  ...storybook.configs['flat/recommended'],
]);
