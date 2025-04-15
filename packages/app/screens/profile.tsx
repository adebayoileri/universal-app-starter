import { SafeAreaView } from "ui/safe-area-view";
import { ScrollView } from "ui/scroll-view";
import CompanyProfile from "app/components/companyProfile";
export function About() {
  return (
    <SafeAreaView className="flex-1">
      <ScrollView className="flex w-screen h-screen">
        <CompanyProfile />
      </ScrollView>
    </SafeAreaView>
  );
}
