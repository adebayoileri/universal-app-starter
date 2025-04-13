import { Stack } from "expo-router";
import "../global.css";

export default function RootLayout() {
  return (
    <Stack>
      <Stack.Screen
        name="index"
        options={{
          title: "Home",
          animation: "slide_from_right",
          headerBackVisible: true,
        }}
      />
      <Stack.Screen
        name="profile"
        options={{
          headerShown: false,
          title: "About",
          animation: "slide_from_right",
        }}
      />
      <Stack.Screen
        name="whatsapp"
        options={{
          headerShown: true,
          title: "Whatsapp",
          animation: "slide_from_right",
        }}
      />
    </Stack>
  );
}
