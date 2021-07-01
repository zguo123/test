/**
 * UTM CFSA Component Library
 *
 * This story is to demonstrate the example cards displayed on our website.
 *
 * @author Zhaoyu Guo
 *
 */

import { Button, IconButton } from "@chakra-ui/button";
import { DeleteIcon, TriangleDownIcon } from "@chakra-ui/icons";
import { Heading, HStack, Spacer, Text } from "@chakra-ui/layout";
import { Meta, Story } from "@storybook/react";
import React, { ReactElement } from "react";
import Card, { CardProps } from "./Card";

export default {
  title: "Components/Cards/Example Cards",
  component: Card,
} as Meta;

export interface ExampleCardArgs extends CardProps {
  header?: ReactElement;
  title?: ReactElement;
  content?: ReactElement;
  button?: ReactElement;
  footer?: ReactElement;
}

const Template: Story<ExampleCardArgs> = (args) => (
  <Card textColor={args.textColor} variant={args.variant}>
    <Card.Title>{args.title}</Card.Title>
    {args.content && <Card.Content>{args.content}</Card.Content>}
    <Card.Footer>{args.button}</Card.Footer>
  </Card>
);

const TeamTemplate: Story<ExampleCardArgs> = (args) => (
  <Card textColor={args.textColor} variant={args.variant}>
    <Card.Header>{args.header}</Card.Header>
    <Card.Title>{args.title}</Card.Title>
    {args.content && <Card.Content>{args.content}</Card.Content>}
    {args.footer && <Card.Footer>{args.footer}</Card.Footer>}
  </Card>
);

export const FeatureCard = Template.bind({});
FeatureCard.args = {
  textColor: "primary",
  variant: "solid",
  title: <Heading as="h2">Get your voice heard</Heading>,
  content: (
    <Text fontSize="xl" my={4}>
      Take part in the decision making process of the university through the use
      of surveys.
    </Text>
  ),
};

export const LinkAdminCard = Template.bind({});
LinkAdminCard.args = {
  textColor: "primary",
  variant: "ghost",
  title: <Heading as="h2">Important Dates</Heading>,
  content: (
    <Text fontSize="2xl" my={4}>
      Important deadlines to keep in mind.
    </Text>
  ),
  button: (
    <HStack>
      <Button colorScheme="primary">Visit Resource</Button>
      <Spacer />
      <IconButton
        variant="ghost"
        colorScheme="primary"
        aria-label="More button"
        icon={<TriangleDownIcon />}
      />
    </HStack>
  ),
};

export const LinkStudentCard = Template.bind({});
LinkStudentCard.args = {
  textColor: "primary",
  variant: "ghost",
  title: <Heading as="h2">Important Dates</Heading>,
  content: (
    <Text fontSize="2xl" my={4}>
      Important deadlines to keep in mind.
    </Text>
  ),
  button: (
    <HStack>
      <Button colorScheme="primary">Visit Resource</Button>
    </HStack>
  ),
};

export const MemberCard = Template.bind({});
MemberCard.args = {
  textColor: "primary",
  variant: "ghost",
  title: (
    <Heading as="h2" mb={5}>
      Zhaoyu Guo
    </Heading>
  ),

  button: (
    <HStack>
      <Button colorScheme="primary">View Member</Button>
      <Spacer />
      <IconButton
        aria-label="Delete this member."
        colorScheme="error"
        icon={<DeleteIcon />}
      />
    </HStack>
  ),
};

export const TeamCard = TeamTemplate.bind({});
TeamCard.args = {
  textColor: "primary",
  header: (
    <img
      src="https://cdn.discordapp.com/avatars/183361440441303040/8b5c0bfad827b8173e8f25cfb28cbacd.png?size=256"
      alt="A Cat Raze"
      style={{ borderRadius: "50%", alignSelf: "center" }}
      width="50%"
      height="50%"
    />
  ),
  title: (
    <Heading as="h2" textAlign="center" my={4}>
      Zhaoyu Guo
    </Heading>
  ),
  content: (
    <Text fontSize="xl" textAlign="center">
      Co-director of Information Technologies
    </Text>
  ),
};

export const FormAdminCard = Template.bind({});
FormAdminCard.args = {
  textColor: "primary",
  title: <Heading as="h2">UTM - CFSA Mental Heath Student Survey</Heading>,
  content: (
    <Text fontSize="xl" my={4}>
      Accesses the Mental Health State at UTM.
    </Text>
  ),
  button: (
    <HStack>
      <Button colorScheme="primary">View Survey</Button>
      <Spacer />
      <IconButton
        aria-label="Delete this member."
        colorScheme="error"
        icon={<DeleteIcon />}
      />
    </HStack>
  ),
};

export const FormStudentCard = Template.bind({});
FormStudentCard.args = {
  textColor: "primary",
  title: <Heading as="h2">UTM - CFSA Mental Heath Student Survey</Heading>,
  content: (
    <Text fontSize="xl" my={4}>
      Accesses the Mental Health State at UTM.
    </Text>
  ),
  button: (
    <HStack>
      <Button colorScheme="primary">View Survey</Button>
      <Spacer />
      <Button colorScheme="secondary" disabled>
        Responses
      </Button>
    </HStack>
  ),
};
