/* eslint-disable no-undef */
const path = require('path')
const {getDefaultConfig} = require('expo/metro-config')
const {generate} = require('@storybook/react-native/scripts/generate')

const isStorybook = process.env.STORYBOOK_ENABLED === 'true'

generate({
    configPath: path.resolve(__dirname, './.ondevice'),
})

const config = getDefaultConfig(__dirname)

config.transformer.unstable_allowRequireContext = true

config.resolver.sourceExts.push('svg')
config.resolver.sourceExts.push('cjs')
config.resolver.sourceExts.push('mjs')

config.resolver.resolverMainFields.unshift('sbmodern')

config.resolver.resolveRequest = (context, moduleName, platform) => {
    const defaultResolveResult = context.resolveRequest(context, moduleName, platform)

    if (isStorybook) {
        defaultResolveResult?.filePath?.includes?.('.ondevice/')
    }

    return defaultResolveResult
}

module.exports = config
