// This file has been automatically migrated to valid ESM format by Storybook.
import { fileURLToPath } from "node:url";
import type { StorybookConfig } from "@storybook/react-vite";
import path, { dirname } from "path";

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const config: StorybookConfig = {
  stories: [
    "../stories/**/*.mdx",
    "../stories/**/*.stories.@(js|jsx|mjs|ts|tsx)",
  ],
  addons: [
    getAbsolutePath("@storybook/addon-onboarding"),
    getAbsolutePath("@storybook/addon-links"),
    getAbsolutePath("@storybook/addon-docs"),
  ],
  framework: {
    name: getAbsolutePath("@storybook/react-native-web-vite"),
    options: {
      builder: {
        viteConfigPath: undefined,
      },
    },
  },
  async viteFinal(config) {
    const tailwindcss = (await import('tailwindcss')).default;
    const autoprefixer = (await import('autoprefixer')).default;

    // Configure aliases for react-native-web
    config.resolve = config.resolve || {};
    config.resolve.alias = {
      ...config.resolve.alias,
      "react-native$": "react-native-web",
      "react-native-web": "react-native-web",
    };

    // Add extension handling
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

    // Ensure CSS is properly processed with Tailwind
    config.css = config.css || {};
    config.css.postcss = {
      plugins: [
        tailwindcss({
          config: path.resolve(__dirname, '../tailwind.config.js'),
        }),
        autoprefixer,
      ],
    };

    // Configure for NativeWind web support
    config.define = {
      ...config.define,
      'process.env.EXPO_PUBLIC_USE_STATIC': JSON.stringify('true'),
      '__DEV__': JSON.stringify(process.env.NODE_ENV !== 'production'),
    };

    // Optimize dependencies for NativeWind
    config.optimizeDeps = config.optimizeDeps || {};
    config.optimizeDeps.include = [
      ...(config.optimizeDeps.include || []),
      'nativewind',
      'react-native-css-interop',
      'react-native-web',
      'react-native-web/dist/exports/StyleSheet',
    ];

    config.optimizeDeps.exclude = [
      ...(config.optimizeDeps.exclude || []),
    ];

    // Add NativeWind's Vite transform
    config.plugins = config.plugins || [];
    
    // Add transform for react-native-css-interop
    config.plugins.push({
      name: 'nativewind-transform',
      transform(code, id) {
        // Transform cssInterop calls for web
        if (id.includes('node_modules')) return null;
        if (!code.includes('cssInterop')) return null;
        
        return {
          code: code,
          map: null,
        };
      },
    });

    return config;
  },
  staticDirs: ["../public"],
};

export default config;

function getAbsolutePath(value: string): any {
  return dirname(fileURLToPath(import.meta.resolve(`${value}/package.json`)));
}
