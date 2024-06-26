/** @type {import('next').NextConfig} */

const { withExpo } = require("@expo/next-adapter");

module.exports = withExpo({
  reactStrictMode: true,
  transpilePackages: [
    // NOTE: Even though `react-native` is never used in Next.js,
    // you need to list `react-native` because `react-native-web`
    // is aliased to `react-native`. Adding `react-native-web` will not work.
    "react-native",
    "react-native-web",
    "ui"
    // Add other packages that need transpiling
  ],
  webpack: (config) => {
    config.resolve.alias = {
      ...(config.resolve.alias || {}),
      // Transform all direct `react-native` imports to `react-native-web`
      "react-native$": "react-native-web",
      "react-native/Libraries/Image/AssetRegistry":
        "react-native-web/dist/cjs/modules/AssetRegistry" // Fix for loading images in web builds with Expo-Image
    };
    config.resolve.extensions = [
      ".web.js",
      ".web.jsx",
      ".web.ts",
      ".web.tsx",
      ...config.resolve.extensions
    ];
    return config;
  }
});
