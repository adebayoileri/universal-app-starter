import * as React from 'react';
import { Tabs, TabsList, TabsTrigger } from '@/reusables/components/ui/tabs';
import { Text } from '@/reusables/components/ui/text';
import { View } from '@/reusables/view';
import { Tab1 } from '@/app/screens/tab1/tab1.native';
import { Tab2 } from '@/app/screens/tab2/tab2.native';
import { Tab3 } from '@/app/screens/tab3/tab3.native';
import Animated, { SlideInLeft} from 'react-native-reanimated';

export function Home() {
  const [value, setValue] = React.useState('tab1');

  return (
    <View className='flex-1 p-6'>
      <Tabs
        value={value}
        onValueChange={setValue}
        className='w-full h-full flex flex-col'
      >
        <View className="flex-1 justify-center items-center">
            {
              value === 'tab1' && 
              <Animated.View entering={SlideInLeft} style={[{ width: '100%', height: '100%' }]}>
                <Tab1 />
              </Animated.View>}
              {value === 'tab2' && 
              <Animated.View entering={SlideInLeft} style={[{ width: '100%', height: '100%' }]}>
                <Tab2 />
              </Animated.View>}
              {value === 'tab3' && 
              <Animated.View entering={SlideInLeft} style={[{ width: '100%', height: '100%' }]}>
                <Tab3 />
              </Animated.View>
            }
        </View>
        <TabsList className='flex-row w-full mt-auto'>
          <TabsTrigger value='tab1' className='flex-1'>
            <Text>Tab 1</Text>
          </TabsTrigger>
          <TabsTrigger value='tab2' className='flex-1'>
            <Text>Tab 2</Text>
          </TabsTrigger>
          <TabsTrigger value='tab3' className='flex-1'>
            <Text>Tab 3</Text>
          </TabsTrigger>
        </TabsList>
      </Tabs>
    </View>
  );
}
