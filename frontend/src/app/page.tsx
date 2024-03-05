import { getCompanies } from "@/data/get-companies";
import CompanyGrid from "./components/company-grid";

export const dynamic = "force-dynamic";

export default async function Home() {
  const companies = await getCompanies();
  return <CompanyGrid companies={companies.data} />;
}
