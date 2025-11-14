import type { StorybookConfig } from '@storybook/react-vite';

const config: StorybookConfig = {
  stories: ['../src/**/*stories.@(js|jsx|ts|tsx)', '../src/**/*.mdx'],

  addons: [
    '@chromatic-com/storybook',
    '@storybook/addon-a11y',
    '@storybook/addon-docs',
    '@whitespace/storybook-addon-html',
  ],

  framework: {
    name: '@storybook/react-vite',
    options: {},
  },

  core: {
    disableTelemetry: true,
    disableWhatsNewNotifications: true,
  },
};

export default config;
