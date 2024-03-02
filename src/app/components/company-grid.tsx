"use client";

import {
  Container,
  Flex,
  Input,
  InputGroup,
  InputLeftElement,
  SimpleGrid,
  Spinner,
} from "@chakra-ui/react";
import { Company } from "../page";
import { CompanyCard } from "./company-card";
import { FaSearch } from "react-icons/fa";
import { useState } from "react";
import { NotFound } from "./not-found";

export interface CompanyGridProps {
  companies: Company[];
}

export default function CompanyGrid({ companies }: CompanyGridProps) {
  const [filteredCompanies, setFilteredCompanies] = useState(
    companies.sort((a, b) => a.name.localeCompare(b.name))
  );
  const [isSearching, setIsSearching] = useState(false);

  const handleSearch = (e: React.ChangeEvent<HTMLInputElement>) => {
    setIsSearching(true);
    setTimeout(() => {
      if (e.target.value) {
        setFilteredCompanies(
          companies.filter((company) =>
            company.name.toLowerCase().includes(e.target.value.toLowerCase())
          )
        );
      }

      if (!e.target.value) {
        setFilteredCompanies(companies);
      }

      setIsSearching(false);
    }, 1500);
  };

  return (
    <Flex justify="center" align="center" direction="column" m={10} gap={10}>
      <InputGroup w={{ base: "100%", md: "70%", lg: "60%", xl: "50%" }}>
        <InputLeftElement pointerEvents="none">
          {isSearching ? (
            <Spinner color="gray" size="sm" />
          ) : (
            <FaSearch color="gray" />
          )}
        </InputLeftElement>
        <Input
          placeholder="Pesquise a instituição"
          textAlign="center"
          onChange={handleSearch}
        />
      </InputGroup>
      <Container maxW="max-content" w="100%">
        {filteredCompanies && filteredCompanies.length > 0 ? (
          <SimpleGrid spacing={6} columns={{ base: 1, md: 2, lg: 3, xl: 4 }}>
            {filteredCompanies.map((company) => (
              <CompanyCard
                key={company.id}
                id={company.id}
                address={company.address}
                name={company.name}
                site={company.site}
                telephone={company.telephone}
              />
            ))}
          </SimpleGrid>
        ) : (
          <NotFound />
        )}
      </Container>
    </Flex>
  );
}
