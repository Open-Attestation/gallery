 const config = {
  framework: '@storybook/react',
  stories: ['../src/**/*.mdx', '../src/**/*.stories.@(js|jsx|mjs|ts|tsx)'],
  addons: [
    '@storybook/addon-essentials',
    '@storybook/addon-actions',
    '@storybook/addon-docs',
    '@storybook/addon-knobs'
  ],
  docs: {
    autodocs: 'tag',
  },
  staticDirs: ['../static'],
};
 
export default config;