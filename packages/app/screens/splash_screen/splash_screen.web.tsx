import { View } from "@/reusables/view";
import Image from 'next/image'
import splash_image from '@/images/splash_image.png'
import { useRouter } from 'next/navigation'
import { useEffect } from "react";

export function SplashScreen() {

    const router = useRouter();

    useEffect(() => {
        const timeout = setInterval(() => {
            router.push('/login');
        }, 3000);
        return () => clearInterval(timeout);
    }, []);

    return (
        <View className="flex flex-1 justify-center items-center">
            <Image
                src={splash_image}
                width={400}
                height={400}
                alt="Splash screen image"
            />
        </View>
    );
};