/**
 * UTM CFSA Component Library
 *
 * This story is to demonstrate the CallToAction cards for the website.
 *
 * @author Zhaoyu Guo
 *
 */

import { Text, VStack } from "@chakra-ui/react";
import { Meta, Story } from "@storybook/react";
import { ReactElement } from "react";
import CallToAction, { CallToActionProps } from "./CallToAction";

export default {
  title: "Components/Cards/Call To Action",
  component: CallToAction,
} as Meta;

// arguments
interface CallToActionArgs extends CallToActionProps {
  titleText: string;
  leftContent: ReactElement;
  rightContent: ReactElement;
}

const Template: Story<CallToActionArgs> = (args) => (
  <CallToAction buttonText={args.buttonText}>
    <CallToAction.Title>{args.title}</CallToAction.Title>
    <CallToAction.LeftContent>{args.leftContent}</CallToAction.LeftContent>
    <CallToAction.RightContent>{args.rightContent}</CallToAction.RightContent>
  </CallToAction>
);

export const Member = Template.bind({});

Member.args = {
  title: "We are growing!",
  leftContent: (
    <Text fontSize="xl" marginTop={3}>
      ... and need your help. If you want to make a better student experience
      for all, join us to make a difference!
    </Text>
  ),
  buttonText: "Let's start",
  rightContent: (
    <VStack>
      <Text fontSize="200px" fontWeight="bold">
        90
      </Text>
      <Text fontSize="xl" pb={5}>
        members and counting
      </Text>
    </VStack>
  ),
};
