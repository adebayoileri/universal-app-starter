// eslint-disable-next-line import/no-default-export
export default ({config}) => ({
    ...config,
    android: {
        adaptiveIcon: {
            backgroundColor: '#FFFFFF',
            foregroundImage: './assets/images/adaptive-icon.png'
        }
    },
    assetBundlePatterns: ['**/*'],
    extra: {
        storybookEnabled: process.env.STORYBOOK_ENABLED
    },
    icon: './assets/images/icon.png',
    ios: {
        supportsTablet: true
    },
    name: 'AwesomeStorybook',
    orientation: 'portrait',
    slug: 'expo-template-blank-typescript',
    splash: {
        backgroundColor: '#ffffff',
        image: './assets/images/splash.png',
        resizeMode: 'contain'
    },
    updates: {
        fallbackToCacheTimeout: 0
    },
    version: '1.0.0',
    web: {
        favicon: './assets/images/favicon.png'
    }
})
