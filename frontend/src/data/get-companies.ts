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

export async function getCompanies(): Promise<FetchResponse> {
  const response = await fetch("http://backend:3001");
  const companies = await response.json();
  return companies;
}
