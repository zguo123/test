/**
 * UTM CFSA Component Library
 *
 * This component represents the header for the student and admin navigation
 *
 * @author Zhaoyu Guo
 */

import { Flex, Heading, Stack, Text } from "@chakra-ui/layout";
import React, { PropsWithChildren } from "react";
import { useColorModeValue } from "@chakra-ui/react";

export interface NavHeadersProps extends PropsWithChildren<any> {
  title: string;
  subTitle: string;
}

export default function NavHeaders(props: NavHeadersProps) {
  return (
    <Flex
      bg={useColorModeValue("primary.default", "gray.800")}
      px={{ base: 4, md: 6, lg: 8 }}
      py={{ base: 4, md: 6, lg: 8 }}
      borderBottomRadius={32}
      color="white"
    >
      <Stack>
        <Heading as="h1">{props.title}</Heading>
        <Text fontSize="2xl">{props.subTitle}</Text>
      </Stack>
    </Flex>
  );
}
