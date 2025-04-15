import { View } from "ui/view";
import { ProfileNavBar } from "./profileNavBar";
import CompanyCard from "../company/CompanyCard";
import { CompanyDetail } from "../companyDetail";
export default function CompanyProfile() {
  return (
    <View className="flex-1 bg-white w-screen h-screen">
      <ProfileNavBar />
      <CompanyCard />
      <CompanyDetail />
    </View>
  );
}
