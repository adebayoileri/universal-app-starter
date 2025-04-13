const { withExpo } = require("@expo/next-adapter");

/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  transpilePackages: ["ui", "react-native-css-interop", "nativewind"],
  webpack: (config) => {
    config.resolve.alias = {
      ...(config.resolve.alias || {}),
      "ui/link": "ui/link/link.web.tsx",
      "react-native$": "react-native-web",
    };
    return config;
  },
};

module.exports = withExpo(nextConfig);
