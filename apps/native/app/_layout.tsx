import { Stack } from "expo-router";
import {
  QueryClient,
  QueryClientProvider,
  useQuery,
} from '@tanstack/react-query'
import "../global.css";

const queryClient = new QueryClient()

export default function RootLayout() {
  return (
    <QueryClientProvider client={queryClient}>
      <Stack>
        <Stack.Screen name="index" options={{ headerShown: false }} />
        <Stack.Screen name="login/index" options={{ headerShown: false }} />
        <Stack.Screen name="home/index" options={{ headerTitle: 'Home', headerLeft: () => <></> }} />
      </Stack>
    </QueryClientProvider>
  );
}
