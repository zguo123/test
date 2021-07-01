/**
 * UTM CFSA Component Library
 *
 * This component is for the CallToAction cards for the website.
 *
 * @author Zhaoyu Guo
 *
 */

import { ArrowForwardIcon } from "@chakra-ui/icons";
import { Flex, Heading } from "@chakra-ui/layout";
import { Box, Button, useColorModeValue } from "@chakra-ui/react";
import React, {
  Children,
  isValidElement,
  PropsWithChildren,
  ReactElement,
} from "react";

export interface CallToActionProps extends PropsWithChildren<any> {
  buttonText: string;
}

function CallToActionTemplate(props: CallToActionProps) {
  // ensures the children are all react elements
  const children = Children.toArray(props.children).filter<ReactElement>(
    isValidElement
  );
  return (
    <Flex flexWrap="wrap">
      <Flex
        w={{ base: "100%", md: "60%" }}
        borderTopLeftRadius={{ base: "32px", md: "32px" }}
        borderBottomLeftRadius={{ base: "0px", md: "32px" }}
        borderTopRightRadius={{ base: "32px", md: "0px" }}
        py={50}
        px={50}
        flexWrap="wrap"
        justifyContent="center"
        direction="column"
        color="white"
        bg={useColorModeValue(`primary.default`, "gray.900")}
      >
        <Heading as="h1" fontWeight="bold">
          {children.find((child) => child.type === Title)?.props.children}
        </Heading>
        {children.find((child) => child.type === LeftContent)?.props.children}

        <Box marginTop={4}>
          <Button
            variant="solid"
            rightIcon={<ArrowForwardIcon />}
            size="lg"
            colorScheme="whiteAlpha"
          >
            {props.buttonText}
          </Button>
        </Box>
      </Flex>
      <Flex
        w={{ base: "100%", md: "40%" }}
        borderTopRightRadius={{ base: "0px", md: "32px" }}
        borderBottomRightRadius={{ base: "32px", md: "32px" }}
        borderBottomLeftRadius={{ base: "32px", md: "0px" }}
        justifyContent="center"
        alignItems="center"
        direction="column"
        color={useColorModeValue("primary.default", "white")}
        bg={useColorModeValue("gray.300", "gray.900")}
      >
        {children.find((child) => child.type === RightContent)?.props.children}
      </Flex>
    </Flex>
  );
}

const Title: React.FC = () => null;
const LeftContent: React.FC = () => null;
const RightContent: React.FC = () => null;

const CallToAction = Object.assign(CallToActionTemplate, {
  Title,
  LeftContent,
  RightContent,
});

export default CallToAction;
