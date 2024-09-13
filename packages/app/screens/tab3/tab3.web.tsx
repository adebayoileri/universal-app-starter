import { useState, useRef, useCallback } from 'react';
import { saveAs } from 'file-saver';
import { View } from '@/reusables/view';
import { Button } from "@/reusables/components/ui/button";
import { Text } from "@/reusables/components/ui/text";
import Webcam from 'react-webcam';
import Image from 'next/image';

export function Tab3() {
    const [capturedImage, setCapturedImage] = useState<string | null>(null);
    const webcamRef = useRef<Webcam>(null);

    const capturePhoto = useCallback(() => {
        const imageSrc = webcamRef.current?.getScreenshot();
        if (imageSrc) {
            setCapturedImage(imageSrc);
        }
    }, [webcamRef]);

    const savePhoto = () => {
        if (capturedImage) {
            const blob = dataURItoBlob(capturedImage);
            saveAs(blob, 'captured-image.jpg');
        }
    };

    const dataURItoBlob = (dataURI: string) => {
        const byteString = atob(dataURI?.split?.(',')[1] || '');
        const mimeString = dataURI?.split?.(',')?.[0]?.split?.(':')[1]?.split?.(';')[0] || '';
        const ab = new ArrayBuffer(byteString.length);
        const ia = new Uint8Array(ab);
        for (let i = 0; i < byteString.length; i++) {
            ia[i] = byteString.charCodeAt(i);
        }
        return new Blob([ab], { type: mimeString });
    };

    return (
        <View className="flex-1 justify-center items-center">
            {!capturedImage ? (
                <>
                    <Webcam
                        audio={false}
                        ref={webcamRef}
                        screenshotFormat="image/jpeg"
                        videoConstraints={{ facingMode: 'user' }}
                        style={{ width: 300, height: 300 }}
                    />
                    <Button className="w-full border-none bg-black" onPress={capturePhoto}>
                        <Text className="text-xl text-white">Capture Photo</Text>
                    </Button>
                </>
            ) : (
                <>
                    <Image
                        style={{ alignSelf: 'center' }}
                        src={capturedImage}
                        width={300}
                        height={250}
                        alt="Captured image"
                    />
                    <Button className="w-full border-none bg-black mt-4" onPress={savePhoto}>
                        <Text className="text-xl text-white">Save Photo</Text>
                    </Button>
                    <Button className="w-full border-none bg-black mt-4" onPress={() => setCapturedImage(null)}>
                        <Text className="text-xl text-white">Retake Photo</Text>
                    </Button>
                </>
            )}
        </View>
    );
}
