import { View } from "ui/view";
import { ScrollView } from "ui/scroll-view";
import CompanyCard from "app/components/company/CompanyCard";
import { Link } from "ui/link";

const companies = [
  { id: "1", name: "Company 1" },
  { id: "2", name: "Company 2" },
  { id: "3", name: "Company 3" },
  { id: "4", name: "Company 4" },
  { id: "5", name: "Company 5" },
  { id: "6", name: "Company 6" },
];

export function Home() {
  return (
    <ScrollView>
      <View className="flex flex-col sm:p-4 sm:flex-row sm:flex-wrap sm:gap-6">
        {companies.map((item) => (
          <Link key={item.id} to="/profile" className="">
            <CompanyCard />
          </Link>
        ))}
      </View>
    </ScrollView>
  );
}
