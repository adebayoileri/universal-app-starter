/** @type {import('next').NextConfig} */

const { withExpo } = require("@expo/next-adapter");

module.exports = withExpo({
  reactStrictMode: true,
  // 允许开发环境跨域访问
  allowedDevOrigins: [
    "192.168.0.15",
    // 添加更多需要允许的IP地址
    "192.168.1.0/24", // 允许整个192.168.1.x网段
    "192.168.0.0/24", // 允许整个192.168.0.x网段
    "10.0.0.0/24",    // 允许10.0.0.x网段
    "127.0.0.1",
    "172.16.0.0/12",
    "172.16.1.0/12",
  ],
  transpilePackages: [
    // you need to list `react-native` because `react-native-web` is aliased to `react-native`.
    "react-native",
    "react-native-web",
    "expo",
    "ui",
    "nativewind",
    "react-native-css-interop",
    // Add other packages that need transpiling
  ],
  webpack: (config) => {
    config.resolve.alias = {
      ...(config.resolve.alias || {}),
      // Transform all direct `react-native` imports to `react-native-web`
      "react-native$": "react-native-web",
      "react-native/Libraries/Image/AssetRegistry":
        "react-native-web/dist/cjs/modules/AssetRegistry", // Fix for loading images in web builds with Expo-Image
    };
    config.resolve.extensions = [
      ".web.js",
      ".web.jsx",
      ".web.ts",
      ".web.tsx",
      ...config.resolve.extensions,
    ];
    return config;
  },
});
