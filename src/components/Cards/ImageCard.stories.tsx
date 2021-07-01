/**
 * UTM CFSA Component Library
 *
 * This story is to demonstrate the Image cards for the website.
 *
 * @author Zhaoyu Guo
 *
 */

import { Button } from "@chakra-ui/button";
import { Flex, Heading, Text } from "@chakra-ui/layout";
import { Meta, Story } from "@storybook/react";
import React, { ReactElement } from "react";
import Card, { CardProps } from "./Card";

export default {
  title: "Components/Cards/Cards with Header",
  component: Card,
} as Meta;

export interface ImageCardStoryArgs extends CardProps {
  header: ReactElement;
  title?: ReactElement;
  content?: ReactElement;
  buttonText?: string;
  buttonVariant?: string;
}

const Template: Story<ImageCardStoryArgs> = (args) => (
  <Card textColor={args.textColor} variant={args.variant}>
    <Card.Header>{args.header}</Card.Header>
    <Card.Title>{args.title}</Card.Title>
    <Card.Content>{args.content}</Card.Content>
    <Card.Footer>
      <Button colorScheme={args.buttonVariant}>{args.buttonText}</Button>
    </Card.Footer>
  </Card>
);

export const BackgroundColorCard = Template.bind({});
BackgroundColorCard.args = {
  textColor: "primary",
  header: <Flex bg="primary.dark" height="20vh" borderRadius={16} />,
  title: (
    <Heading as="h2" my={4}>
      This is a primary card
    </Heading>
  ),
  content: (
    <Text fontSize="xl" my={4}>
      Primary card content
    </Text>
  ),
  buttonVariant: "primary",
  buttonText: "Primary Button",
};

export const ImageCard = Template.bind({});
ImageCard.args = {
  ...BackgroundColorCard.args,
  header: (
    <img
      src="https://images.pexels.com/photos/2058128/pexels-photo-2058128.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260"
      alt="A keyboard and mouse."
    />
  ),
};
