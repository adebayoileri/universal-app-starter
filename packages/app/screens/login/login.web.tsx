import { useRouter } from 'next/navigation';
import { Login } from "./index";

export function LoginWeb() {
    
    const router = useRouter();

    const handleLogin = () => {
        router.push('/home');
    };

    return (
        <Login onLogin={handleLogin} />
    );
}