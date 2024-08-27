import {View} from 'react-native'

import {StorybookUIRoot} from '../.ondevice'

export default function Page() {
    return (
        <View style={{
            flex: 1
        }}>
            <StorybookUIRoot />
        </View>
    )
}
