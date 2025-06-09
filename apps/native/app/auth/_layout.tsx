import { Stack } from "expo-router";

export default function AuthLayout() {
  return (
    <Stack screenOptions={{ headerShown: false }}>
      <Stack.Screen name="mobile-login" />
      <Stack.Screen name="mobile-verify" />
      <Stack.Screen name="password-login" />
    </Stack>
  );
}