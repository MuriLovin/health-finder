"use client";

import { FaGlobe, FaPhone } from "react-icons/fa";
import { FaLocationDot } from "react-icons/fa6";
import { CompanyIcon } from "./company-icon";
import {
  Card,
  CardBody,
  CardHeader,
  HStack,
  Heading,
  Tooltip,
} from "@chakra-ui/react";
import React from "react";
import { motion } from "framer-motion";

export interface CompanyCardProps {
  id: number;
  name: string;
  address: string | null;
  site: string | null;
  telephone: string | null;
}

export function CompanyCard({
  id,
  name,
  address,
  site,
  telephone,
}: CompanyCardProps) {
  return (
    <Card
      size="lg"
      boxShadow="3px 3px 8px gray"
      as={motion.div}
      whileHover={{ scale: 1.1 }}
    >
      <CardHeader>
        <Heading size="md" noOfLines={1} textAlign="center">
          {name}
        </Heading>
      </CardHeader>
      <CardBody>
        <HStack justify="center" align="center" spacing={7}>
          {address && (
            <Tooltip
              label="Copiar endereço"
              aria-label="Tooltip to copy address"
            >
              <span>
                <CompanyIcon
                  onClick={() => {
                    navigator.clipboard.writeText(address);
                  }}
                >
                  <FaLocationDot color="red" />
                </CompanyIcon>
              </span>
            </Tooltip>
          )}
          {site && (
            <Tooltip label="Copiar site" aria-label="Tooltip to copy site">
              <span>
                <CompanyIcon
                  onClick={() => {
                    navigator.clipboard.writeText(site);
                  }}
                >
                  <FaGlobe color="blue" />
                </CompanyIcon>
              </span>
            </Tooltip>
          )}
          {telephone && (
            <Tooltip label="Copiar telefone" aria-label="Tooltip to copy phone">
              <span>
                <CompanyIcon
                  onClick={() => {
                    navigator.clipboard.writeText(telephone);
                  }}
                >
                  <FaPhone color="green" />
                </CompanyIcon>
              </span>
            </Tooltip>
          )}
        </HStack>
      </CardBody>
    </Card>
  );
}
