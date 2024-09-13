import { CameraView, useCameraPermissions, CameraCapturedPicture } from 'expo-camera';
import * as MediaLibrary from 'expo-media-library';
import { useState, useRef, useCallback } from 'react';
import { StyleSheet, Image } from 'react-native';
import { View } from '@/reusables/view';
import { Button } from "@/reusables/components/ui/button";
import { Text } from "@/reusables/components/ui/text";

export function Tab3() {
    const [permission, requestPermission] = useCameraPermissions();
    const [mediaLibraryPermission, requestMediaLibraryPermission] = MediaLibrary.usePermissions();
    const camera = useRef<CameraView>(null);
    const [capturedImage, setCapturedImage] = useState<CameraCapturedPicture | undefined>(undefined);

    const capturePhoto = useCallback(async () => {
        const imageSrc = await camera.current?.takePictureAsync();
        if (imageSrc) {
            setCapturedImage(imageSrc);

        }
    }, [camera]);

    const savePhoto = useCallback(async () => {
        if (capturedImage) {
            try {
                const asset = await MediaLibrary.createAssetAsync(capturedImage.uri);
                await MediaLibrary.createAlbumAsync('MyApp', asset, false);
                alert('Photo saved to gallery!');
            } catch (error) {
                console.error('Error saving photo:', error);
                alert('Failed to save photo.');
            }
        }
    }, [capturedImage]);

    if (!permission || !mediaLibraryPermission) {
        return <View />;
    }
    
    if (!permission.granted || !mediaLibraryPermission.granted) {
        return (
            <View className="flex-1 justify-center items-center">
                <Text className="text-xl text-center">We need your permission to show the camera and access the media library</Text>
                <Button className="w-full border-none bg-black mt-8" onPress={() => {
                    requestPermission();
                    requestMediaLibraryPermission();
                }}>
                    <Text className="text-xl text-white">Grant Permissions</Text>
                </Button>
            </View>
        );
    }

    return (

        <View className="flex-1 justify-center items-center">
            {!capturedImage ? (
                <>
                    <CameraView style={styles.camera} facing={'back'} ref={camera} />
                    <Button className="w-full border-none bg-black mt-8" onPress={capturePhoto}>
                        <Text className="text-xl text-white">Capture Photo</Text>
                    </Button>
                </>
            ) : (
                <>
                    <Image
                        source={capturedImage}
                        style={{ width: 300, height: 250 }}
                        resizeMode="contain"
                    />
                    <Button className="w-full border-none bg-black mt-4" onPress={savePhoto}>
                        <Text className="text-xl text-white">Save Photo</Text>
                    </Button>
                    <Button className="w-full border-none bg-black mt-4" onPress={() => setCapturedImage(undefined)}>
                        <Text className="text-xl text-white">Retake Photo</Text>
                    </Button>
                </>
            )}
        </View>
    );
}

const styles = StyleSheet.create({
    camera: {
        width: 300,
        height: 300,
    },
});
