import { Text } from "@/reusables/components/ui/text";
import { Input } from "@/reusables/components/ui/input";
import { View } from "@/reusables/view";
import { useState } from 'react';
import { Button } from "@/reusables/components/ui/button";

export function Login({ onLogin }: { onLogin: () => void }) {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');

    const onChangeUsername = (text: string) => {
        setError('');
        setUsername(text);
    };

    const onChangePassword = (text: string) => {
        setError('');
        setPassword(text);
    };

    const handleLogin = () => {
        if (username && password) {
            onLogin();
        } else {
            setError('Please enter both username and password');
        }
    };

    return (
        <View className="flex flex-1 justify-center items-center px-[10%]">
            <View className="w-full max-w-md">
                <Text className="text-2xl font-bold mb-4">User Login</Text>
                <Input
                    className="mb-4 w-full"
                    placeholder='username'
                    value={username}
                    onChangeText={onChangeUsername}
                    autoCapitalize='none'
                />
                <Input
                    className="mb-4 w-full"
                    textContentType="password"
                    placeholder='password'
                    value={password}
                    onChangeText={onChangePassword}
                    secureTextEntry={true}
                    autoCapitalize='none'
                />
                <Button className="w-full border-none bg-black mb-4" onPress={handleLogin}>
                    <Text className="text-xl text-white">Login</Text>
                </Button>
                <Text className="text-xl text-red-500">{error}</Text>
            </View>
        </View>
    );
}