import { Text } from "ui/text";
import { View } from "ui/view";
import { Link } from "expo-router";
export function Home() {
  return (
    <View className="flex flex-1 justify-center items-center">
      <Text className="text-base">
        Edit{" "}
        <Text className="text-base font-bold">
          {" "}
          packages/app/screens/home.tsx
        </Text>{" "}
        to edit this screen.
      </Text>
      <Link href="/auth/mobile-login">
        <Text className="text-base">
          手机号登录
        </Text>
      </Link>
      <Link href="/auth/mobile-verify">
        <Text className="text-base">
          验证码登录
        </Text>
      </Link>
      <Link href="/auth/password-login">
        <Text className="text-base">
          密码登录
        </Text>
      </Link>
    </View>
  );
}
