import {useFonts} from 'expo-font'

const StorybookUIRoot = require('./.storybook/native').default

const Storybook = () => {
    const [fontsLoaded] = useFonts({
        'Quicksand-Bold': require('@repo/ui/assets/fonts/Quicksand-Bold.ttf'),
        'Quicksand-Light': require('@repo/ui/assets/fonts/Quicksand-Light.ttf'),
        'Quicksand-Medium': require('@repo/ui/assets/fonts/Quicksand-Medium.ttf'),
        'Quicksand-Regular': require('@repo/ui/assets/fonts/Quicksand-Regular.ttf'),
        'Quicksand-SemiBold': require('@repo/ui/assets/fonts/Quicksand-SemiBold.ttf')
    // 'material-community': require('@expo/vector-icons/build/vendor/react-native-vector-icons/Fonts/MaterialCommunityIcons.ttf')
    })

    if (!fontsLoaded) return null

    return <StorybookUIRoot />
}

// eslint-disable-next-line import/no-default-export
export default Storybook
