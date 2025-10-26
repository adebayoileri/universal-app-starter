import type { StorybookConfig } from "@storybook/react-webpack5";
import path from "path";

const config: StorybookConfig = {
  stories: [
    "../stories/**/*.mdx",
    "../stories/**/*.stories.@(js|jsx|mjs|ts|tsx)",
  ],
  addons: [
    "@storybook/addon-webpack5-compiler-swc",
    "@storybook/addon-onboarding",
    "@storybook/addon-links",
    "@storybook/addon-essentials",
    "@storybook/addon-interactions",
  ],
  framework: {
    name: "@storybook/react-webpack5",
    options: {},
  },
  webpackFinal: async (config) => {
    // Add alias for react-native to react-native-web
    config.resolve = config.resolve || {};
    config.resolve.alias = {
      ...(config.resolve.alias || {}),
      "react-native$": "react-native-web",
    };

    // Add extensions
    config.resolve.extensions = [
      ".web.tsx",
      ".web.ts",
      ".web.jsx",
      ".web.js",
      ".tsx",
      ".ts",
      ".jsx",
      ".js",
      ...(config.resolve.extensions || []),
    ];

    config.module = config.module || {};
    config.module.rules = config.module.rules || [];

    // Add babel-loader for nativewind and react-native-css-interop with proper CommonJS handling
    config.module.rules.push({
      test: /\.(js|jsx|ts|tsx)$/,
      include: [
        path.resolve(__dirname, "../../../node_modules/nativewind"),
        path.resolve(
          __dirname,
          "../../../node_modules/react-native-css-interop",
        ),
      ],
      use: {
        loader: "babel-loader",
        options: {
          presets: [
            [
              "@babel/preset-env",
              {
                modules: "auto",
                targets: { browsers: ["last 2 versions"] },
              },
            ],
            ["@babel/preset-react", { runtime: "automatic" }],
            "@babel/preset-typescript",
          ],
          plugins: ["@babel/plugin-transform-modules-commonjs"],
        },
      },
    });

    // Handle SVG
    const fileLoaderRule = config.module?.rules?.find(
      (rule) =>
        rule &&
        typeof rule !== "string" &&
        rule.test instanceof RegExp &&
        rule.test.test(".svg"),
    );

    if (fileLoaderRule && typeof fileLoaderRule !== "string") {
      fileLoaderRule.exclude = /\.svg$/;
    }

    config.module.rules.push({
      test: /\.svg$/,
      use: ["@svgr/webpack"],
    });

    return config;
  },
  staticDirs: ["../public"],
};

export default config;
