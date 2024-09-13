import { View } from "@/reusables/view";
import { Image } from "react-native";
import splash_image from '@/images/splash_image.png';

import { router } from "expo-router";
import { useEffect } from "react";

export function SplashScreen() {

    useEffect(() => {
        const timeout = setTimeout(() => {
            router.push('/login');
        }, 2000);
        return () => clearTimeout(timeout);
    }, []);

    return (
        <View className="flex flex-1 justify-center items-center bg-white">
            <Image
                source={splash_image}
                style={{ width: 400, height: 400 }}
                resizeMode="contain"
            />
        </View>
    );
};
