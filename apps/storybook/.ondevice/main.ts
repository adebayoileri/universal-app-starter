import { StorybookConfig } from "@storybook/react-native";

const main: StorybookConfig = {
  stories: ["../../../packages/ui/**/*.stories.@(ts|tsx)"],
  addons: [
    "@storybook/addon-ondevice-notes",
    "@storybook/addon-ondevice-controls",
    "@storybook/addon-ondevice-backgrounds",
    "@storybook/addon-ondevice-actions",
  ],
};

export default main;
