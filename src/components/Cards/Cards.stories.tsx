/**
 * UTM CFSA Component Library
 *
 * This story is to demonstrate the generic cards for the website.
 *
 * @author Zhaoyu Guo
 *
 */

import { Button } from "@chakra-ui/button";
import {
  Divider,
  Heading,
  HStack,
  Stack,
  StackDivider,
  Text,
} from "@chakra-ui/layout";
import { Meta, Story } from "@storybook/react";
import React, { ReactElement } from "react";
import Card, { CardProps } from "./Card";

export default {
  title: "Components/Cards/Basic Cards",
  component: Card,
} as Meta;

export interface CardStoryArgs extends CardProps {
  title?: ReactElement;
  content?: ReactElement;
  buttonText?: string;
  buttonVariant?: string;
}

const Template: Story<CardStoryArgs> = (args) => (
  <Card textColor={args.textColor} variant={args.variant}>
    <Card.Title>{args.title}</Card.Title>
    <Card.Content>{args.content}</Card.Content>
    <Card.Footer>
      <Button colorScheme={args.buttonVariant}>{args.buttonText}</Button>
    </Card.Footer>
  </Card>
);

export const SolidCards: Story<CardStoryArgs> = () => (
  <Stack spacing={4}>
    <Heading as="h1">Solid Cards</Heading>
    <Divider />
    <HStack spacing={4}>
      <Primary {...Primary.args} />
      <Secondary {...Secondary.args} />
    </HStack>
    <HStack spacing={4}>
      <Warning {...Warning.args} />
      <Success {...Success.args} />
    </HStack>
    <HStack spacing={2}>
      <Error {...Error.args} />
    </HStack>
    <StackDivider />
    <Heading as="h1">Outlined Cards</Heading>
    <Divider />
    <HStack spacing={4}>
      <PrimaryOutline {...PrimaryOutline.args} />
      <SecondaryOutline {...SecondaryOutline.args} />
    </HStack>
    <HStack spacing={4}>
      <WarningOutline {...WarningOutline.args} />
      <SuccessOutline {...SuccessOutline.args} />
    </HStack>
    <HStack spacing={2}>
      <ErrorOutline {...ErrorOutline.args} />
    </HStack>
  </Stack>
);

export const Primary = Template.bind({});
export const PrimaryOutline = Template.bind({});
export const Secondary = Template.bind({});
export const SecondaryOutline = Template.bind({});
export const Warning = Template.bind({});
export const WarningOutline = Template.bind({});
export const Success = Template.bind({});
export const SuccessOutline = Template.bind({});
export const Error = Template.bind({});
export const ErrorOutline = Template.bind({});

Primary.args = {
  textColor: "primary",
  title: <Heading as="h2">This is a primary card</Heading>,
  content: (
    <Text fontSize="xl" my={4}>
      Primary card content
    </Text>
  ),
  buttonVariant: "primary",
  buttonText: "Primary Button",
};

PrimaryOutline.args = {
  ...Primary.args,
  variant: "outline",
};

Secondary.args = {
  textColor: "secondary",
  title: <Heading as="h2">This is a secondary card</Heading>,
  content: (
    <Text fontSize="xl" my={4}>
      secondary card content
    </Text>
  ),
  buttonVariant: "secondary",
  buttonText: "Secondary Button",
};

SecondaryOutline.args = {
  ...Secondary.args,
  variant: "outline",
};

Warning.args = {
  textColor: "warning",
  title: <Heading as="h2">This is a warning card</Heading>,
  content: (
    <Text fontSize="xl" my={4}>
      Warning card content
    </Text>
  ),
  buttonVariant: "warning",
  buttonText: "Warning Button",
};
WarningOutline.args = {
  ...Warning.args,
  variant: "outline",
};
Error.args = {
  textColor: "error",
  title: <Heading as="h2">This is a error card</Heading>,
  content: (
    <Text fontSize="xl" my={4}>
      Error card content
    </Text>
  ),
  buttonVariant: "error",
  buttonText: "Error Button",
};

ErrorOutline.args = {
  ...Error.args,
  variant: "outline",
};

Success.args = {
  textColor: "success",
  title: <Heading as="h2">This is a success card</Heading>,
  content: (
    <Text fontSize="xl" my={4}>
      Success card content
    </Text>
  ),
  buttonVariant: "success",
  buttonText: "Success Button",
};

SuccessOutline.args = {
  ...Success.args,
  variant: "outline",
};
