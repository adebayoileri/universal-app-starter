import localFont from "next/font/local";

export const dmsans = localFont({
  src: "../public/assets/fonts/DMSans-VariableFont_opsz,wght.ttf",
  variable: "--font-dmsans",
});

export const fontConfig = {
  DMSans: {
    400: "DMSans-Regular",
    500: "DMSans-Medium",
    700: "DMSans-Bold",
  },
};
