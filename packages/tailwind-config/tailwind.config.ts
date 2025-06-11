import type { Config } from 'tailwindcss';

const config: Omit<Config, 'content'> = {
  theme: {
    extend: {
      colors: {
        'custom-blue': '#007bff', //예시
      },
    },
  },
  plugins: [],
};
export default config;
