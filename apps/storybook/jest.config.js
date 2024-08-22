module.exports = {
  collectCoverage: false,
  preset: 'jest-expo',
  setupFilesAfterEnv: ['./jest-setup.js'],
  transformIgnorePatterns: [
    'node_modules/(?!((jest-)?react-native|@react-native(-community)?)|expo(nent)?|@expo(nent)?/.*|@expo-google-fonts/.*|react-navigation|@react-navigation/.*|@unimodules/.*|unimodules|sentry-expo|react-native-svg|@fortawesome/*|moti/.*)'
  ],
  verbose: true
}
