"use client";

import { VStack } from "@chakra-ui/react";
import { TbAlertTriangle } from "react-icons/tb";

export function NotFound() {
  return (
    <VStack spacing={4} alignSelf="center" justify="center" mt={10}>
      <TbAlertTriangle size={100} />
      <p>Desculpe, nenhuma instituição encontrada.</p>
    </VStack>
  );
}
