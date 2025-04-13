import { Text } from "ui/text";
import { SafeAreaView } from "ui/safe-area-view";
import { ScrollView } from "ui/scroll-view";
import { View } from "ui/view";
import { Image } from "ui/image";
import { Link } from "ui/link";
export function About() {
  return (
    <SafeAreaView className="flex-1">
      <ScrollView className="flex w-screen h-screen">
        <View className="flex flex-row gap-4">
          <Link to="/">
            <Image />
          </Link>
          <Text>Profile</Text>
          <Link to="/">
            <Image />
          </Link>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}
