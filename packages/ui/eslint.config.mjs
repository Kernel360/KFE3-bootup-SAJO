// // For more info, see https://github.com/storybookjs/eslint-plugin-storybook#configuration-flat-config-format
// import storybook from 'eslint-plugin-storybook';

// import { config } from '@repo/eslint-config/react-internal.js';

// /** @type {import("eslint").Linter.Config} */
// export default config;
import baseConfig from '@repo/eslint-config/react-internal.js';

/** @type {import("eslint").Linter.Config[]} */
export default [
  {
    ignores: [
      'node_modules/**',
      'dist/**',
      'build/**',
      'storybook-static/**', // Storybook 빌드 파일 제외
      '.storybook/main.ts', // Storybook 설정 파일도 제외 가능
    ],
  },
  ...baseConfig,
];
