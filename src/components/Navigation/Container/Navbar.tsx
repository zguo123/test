/**
 * UTM CFSA Component Library
 *
 * This component represents navigation container.
 *
 * @author Zhaoyu Guo
 */

import {
  Flex,
  useColorModeValue,
  HStack,
  Spacer,
  IconButton,
  useDisclosure,
  Divider,
  Stack,
  useColorModeValue as mode,
} from "@chakra-ui/react";
import React, { isValidElement, PropsWithChildren, ReactElement } from "react";
import { HamburgerIcon } from "@chakra-ui/icons";
import Mobile from "../MobileContent/Mobile";

export interface NavbarProps extends PropsWithChildren<any> {}

export function NavTemplate(props: NavbarProps) {
  // ensures the children are all react elements
  const children = React.Children.toArray(props.children).filter<ReactElement>(
    isValidElement
  );

  // for the mobile nav
  const mobileNav = useDisclosure();

  return (
    <Flex
      py={4}
      margin={0}
      px={{ base: 4, md: 6, lg: 8 }}
      alignItems="center"
      bg={useColorModeValue("primary.default", "gray.800")}
    >
      {children.find((child) => child.type === Brand)?.props.children}
      <HStack
        spacing={3}
        marginLeft={10}
        display={{ base: "none", md: "none", lg: "flex" }}
      >
        {children.find((child) => child.type === Links)?.props.children}
      </HStack>
      <Spacer />
      <HStack spacing={2} display={{ base: "none", md: "none", lg: "flex" }}>
        {children.find((child) => child.type === UtilityLinks)?.props.children}
      </HStack>
      <IconButton
        display={{ base: "flex", md: "flex", lg: "none" }}
        aria-label="Open menu"
        _hover={{
          bg: mode("gray.100", "gray.700"),
          color: mode("primary.default", "gray.900"),
        }}
        fontSize="20px"
        color="white"
        variant="ghost"
        onClick={mobileNav.onOpen}
        icon={<HamburgerIcon />}
      />

      <Mobile isOpen={mobileNav.isOpen} onClose={mobileNav.onClose}>
        <Stack spacing={5}>
          <Flex>
            {children.find((child) => child.type === Brand)?.props.children}
          </Flex>
          <Stack>
            {children.find((child) => child.type === Links)?.props.children}
          </Stack>
          <Divider />
          <Stack>
            {
              children.find((child) => child.type === UtilityLinks)?.props
                .children
            }
          </Stack>
        </Stack>
      </Mobile>
    </Flex>
  );
}

const Brand: React.FC = () => null;
const Links: React.FC = () => null;
const UtilityLinks: React.FC = () => null;

export const Navbar = Object.assign(NavTemplate, {
  Brand,
  Links,
  UtilityLinks,
});
