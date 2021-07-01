/**
 * UTM CFSA Component Library
 *
 * This component represents the utility navigation for the main Navbar
 *
 * @author Zhaoyu Guo
 */
import { useColorModeValue as mode } from "@chakra-ui/react";
import { Button, ButtonProps } from "@chakra-ui/button";
import React, { PropsWithChildren } from "react";

export interface UtilityProps extends ButtonProps, PropsWithChildren<any> {
  variant: "ghost" | "solid";
}

export default function Utility(props: UtilityProps) {
  const { children, variant, ...rest } = props;

  // defined variants
  return (
    <Button
      variant={variant}
      _hover={{
        bg: mode("primary.dark", "gray.700"),
        color: mode("white", "white"),
      }}
      _active={{
        bg: mode("primary.dark", "gray.700"),
        color: mode("white", "white"),
      }}
      {...rest}
    >
      {children}
    </Button>
  );
}
