import { View } from '@/reusables/view';
import { Text } from '@/reusables/components/ui/text';
import { CountdownCircleTimer } from 'react-countdown-circle-timer';
import { Button } from '@/reusables/components/ui/button';
import { useTimerStore, handleStartStop } from '@/app/screens/tab1/store';

export function Tab1() {
    const { isPlaying, remainingTime, setIsPlaying, setRemainingTime } = useTimerStore();

    return (
        <View className='flex-1 justify-center items-center'>
            <CountdownCircleTimer
                isPlaying={isPlaying}
                duration={60}
                initialRemainingTime={remainingTime}
                colors={'#A30000'}
                onComplete={() => ({ shouldRepeat: true })}
                onUpdate={(remainingTime) => setRemainingTime(remainingTime)}
            >
                {({ remainingTime }) => <Text>{remainingTime}</Text>}
            </CountdownCircleTimer>
            <Button className="w-full border-none bg-black mt-4" onPress={() => handleStartStop(setIsPlaying, isPlaying)}>
                <Text className="text-xl text-white">{isPlaying ? 'Stop' : 'Start'}</Text>
            </Button>
        </View>
    );
}