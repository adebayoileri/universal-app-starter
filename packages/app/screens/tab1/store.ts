import { create } from 'zustand';

interface TimerState {
    isPlaying: boolean;
    remainingTime: number;
    setIsPlaying: (isPlaying: boolean) => void;
    setRemainingTime: (time: number) => void;
}

export const useTimerStore = create<TimerState>((set) => ({
    isPlaying: false,
    remainingTime: 60,
    setIsPlaying: (isPlaying) => set({ isPlaying }),
    setRemainingTime: (time) => set({ remainingTime: time }),
}));

export const handleStartStop = (setIsPlaying: (isPlaying: boolean) => void, isPlaying: boolean) => {
    setIsPlaying(!isPlaying);
};