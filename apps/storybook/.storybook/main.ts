/** @type{import("@storybook/react-webpack5").StorybookConfig} */
import path from 'path';
const getAbsolutePath = (packageName) =>
    path.dirname(require.resolve(path.join(packageName, 'package.json')));

module.exports = {
  stories: [
    "../../../packages/ui/**/*.stories.@(ts|tsx)",
  ],
  staticDirs: [{ from: './styles', to: 'styles' }],

  addons: [
    getAbsolutePath("@storybook/addon-links"),
    getAbsolutePath("@storybook/addon-essentials"),
    getAbsolutePath("@storybook/addon-react-native-web"),
    getAbsolutePath("@storybook/addon-webpack5-compiler-babel"),
    getAbsolutePath("@chromatic-com/storybook"),
    getAbsolutePath("@storybook/addon-themes"),
    getAbsolutePath("storybook-addon-performance"),
    getAbsolutePath("@storybook/addon-measure"),
    getAbsolutePath("@storybook/addon-outline")
  ],

  framework: {
    name: getAbsolutePath('@storybook/react-webpack5'),
    options: {},
  },

  docs: {},

  typescript: {
    reactDocgen: "react-docgen-typescript"
  }
};
