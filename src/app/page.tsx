import CompanyGrid from "./components/company-grid";

export interface Company {
  id: number;
  name: string;
  address: string | null;
  site: string | null;
  telephone: string | null;
  created_at: Date;
  updated_at: Date;
}

export interface FetchResponse {
  data: Company[];
}

export default async function Home() {
  const fetchCompanies = async (): Promise<FetchResponse> => {
    try {
      const response = await fetch("http://localhost:3000/api/companies");
      const result = await response.json();
      return result;
    } catch (error) {
      console.error(error);
      return { data: [] };
    }
  };

  const companies = await fetchCompanies();

  return <CompanyGrid companies={companies.data} />;
}
