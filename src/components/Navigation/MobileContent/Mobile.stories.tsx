/**
 * UTM CFSA Component Library
 *
 * This represents the stories for the Mobile Container
 *
 * @author Zhaoyu Guo
 */

import {
  Divider,
  Flex,
  Stack,
  Text,
  useColorModeValue,
} from "@chakra-ui/react";
import { Meta } from "@storybook/react";
import React from "react";
import NavLink from "../Item/NavLink";
import Utility from "../Utility/Utility";
import Mobile from "./Mobile";

export default {
  title: "Navigation/Mobile",
  component: Mobile,
} as Meta;

export const MobileContainer = () => (
  <>
    <Flex
      py={4}
      px={{ base: 4, md: 6, lg: 8 }}
      alignItems="center"
      bg={useColorModeValue("blue.800", "gray.800")}
    >
      <Mobile isOpen={true}>
        <Stack spacing={5}>
          <Flex>
            <Text color="white">CFSA</Text>
          </Flex>
          <Stack>
            <NavLink isActive>Home</NavLink>
            <NavLink color="white">About</NavLink>
            <NavLink color="white">UTM Links</NavLink>
            <NavLink color="white">Contact Us</NavLink>
          </Stack>
          <Divider />
          <Stack>
            <Utility isFullWidth color="white" variant="ghost">
              Surveys
            </Utility>
            <Utility isFullWidth color="black" variant="solid">
              Join Club
            </Utility>
          </Stack>
        </Stack>
      </Mobile>
    </Flex>
  </>
);
