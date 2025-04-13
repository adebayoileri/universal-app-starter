import { ScrollView } from "ui/scroll-view";
import CompanyCard from "app/components/company/CompanyCard";
import { View } from "ui/view";
import { Link } from "ui/link";

export function Home() {
  return (
    <ScrollView className="flex w-screen">
      <View className="flex flex-col sm:flex-row flex-wrap gap-4 sm:p-4 sm:gap-10">
        <Link to="/profile">
          <CompanyCard />
        </Link>
        <Link to="/profile">
          <CompanyCard />
        </Link>
        <Link to="/profile">
          <CompanyCard />
        </Link>
      </View>
    </ScrollView>
  );
}
