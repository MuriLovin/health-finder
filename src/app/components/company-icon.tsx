"use client";

import { Box } from "@chakra-ui/react";
import { motion } from "framer-motion";
import React, { ReactNode } from "react";

export interface CompanyIconProps {
  children: ReactNode;
  onClick: () => void;
}

export function CompanyIcon({ children, onClick }: CompanyIconProps) {
  return (
    <Box
      as={motion.button}
      onClick={onClick}
      whileHover={{ scale: 1.5 }}
      whileTap={{ scale: 1.1 }}
    >
      {children}
    </Box>
  );
}
