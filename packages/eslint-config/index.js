import { baseConfig } from './base.js';
import { typescriptConfig } from './typescript.js';
import { reactConfig } from './react.js';
import { nextJsConfig } from './next.js';
import { javascriptConfig } from './javascript.js';

export const config = [
  ...baseConfig,
  ...typescriptConfig,
  ...reactConfig,
  ...nextJsConfig,
  javascriptConfig,
];
