import { useFonts } from "expo-font";
import { useEffect } from "react";

export const customFonts = {
  DMSans: require("../assets/fonts/DMSans-VariableFont_opsz,wght.ttf"),
};

export const fontConfig = {
  DMSans: {
    400: "DMSans",
    500: "DMSans",
    700: "DMSans",
  },
};

export function useLoadFonts() {
  const [fontsLoaded] = useFonts(customFonts);

  useEffect(() => {
    if (!fontsLoaded) {
      // You can add a loading state here if needed
    }
  }, [fontsLoaded]);

  return fontsLoaded;
}
