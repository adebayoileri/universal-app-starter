import * as React from 'react';
import { Tabs, TabsList, TabsTrigger } from '@/reusables/components/ui/tabs';
import { Text } from '@/reusables/components/ui/text';
import { View } from '@/reusables/view';
import { Tab1 } from '@/app/screens/tab1/tab1.web';
import { Tab2 } from '@/app/screens/tab2/tab2.web';
import { Tab3 } from '@/app/screens/tab3/tab3.web';
import { motion, AnimatePresence } from 'framer-motion';

export function Home() {
  const [value, setValue] = React.useState('tab1');
  
  const slideVariants = {
    enter: (direction: number) => ({
      x: direction > 0 ? '100%' : '-100%',
      opacity: 0
    }),
    center: {
      x: 0,
      opacity: 1
    },
  };

  const getDirection = (newValue: string) => {
    const order = ['tab1', 'tab2', 'tab3'];
    return order.indexOf(newValue) - order.indexOf(value);
  };

  return (
    <View className='flex-1 p-6'>
      <Tabs
        value={value}
        onValueChange={setValue}
        className='w-full h-full flex flex-col'
      >
        <View className="flex-1 justify-center items-center">
          <AnimatePresence initial={false} custom={getDirection(value)}>
            <motion.div
              key={value}
              custom={getDirection(value)}
              variants={slideVariants}
              initial="enter"
              animate="center"
              transition={{
                x: { type: "spring", stiffness: 300, damping: 30 },
                opacity: { duration: 0.2 }
              }}
            >
              {value === 'tab1' && <Tab1 />}
              {value === 'tab2' && <Tab2 />}
              {value === 'tab3' && <Tab3 />}
            </motion.div>
          </AnimatePresence>
        </View>
        <TabsList className='flex-row w-full fixed bottom-0 left-0 right-0 bg-white z-50'>
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