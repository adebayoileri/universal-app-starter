import { router } from "expo-router";
import { Login } from ".";

export function LoginNative() {
    
    const handleLogin = () => {
        router.push('/home');
    };

    return (
        <Login onLogin={handleLogin} />
    );
}