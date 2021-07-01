/**
 * UTM CFSA Component Library
 *
 * This component represents one item for the navigation.
 *
 * @author Zhaoyu Guo
 */

import React from "react";
import { Link, LinkProps, useColorModeValue as mode } from "@chakra-ui/react";

export interface NavLinkProps extends LinkProps {
  isActive?: boolean;
}

export default function NavLink(props: NavLinkProps) {
  const { isActive, ...rest } = props;
  return (
    <Link
      display="block"
      py={3}
      px={4}
      borderRadius={14}
      transition="all 0.3s"
      fontWeight="medium"
      lineHeight="1.25rem"
      aria-current={isActive ? "page" : undefined}
      _hover={{
        bg: mode("gray.100", "gray.700"),
        color: mode("blue.800", "gray.900"),
      }}
      _activeLink={{
        bg: mode("gray.100", "blue.200"),
        color: mode("blue.800", "blue.900"),
      }}
      {...rest}
    />
  );
}
