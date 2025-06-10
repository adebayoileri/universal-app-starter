import { Text } from "ui/text";
import { View } from "ui/view";
import { Link } from "ui/link";

export function MobileLogin() {
  return (
    <View className="flex flex-1 justify-center items-center">
      <Text className="text-base">
        mobile login
      </Text>

      <Link href="/auth/mobile-verify">
        <Text>mobile verify</Text>
      </Link>
    </View>
  );
}
