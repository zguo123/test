/**
 * UTM CFSA Component Library
 *
 * This represents the stories for the Utility Navigation
 *
 * @author Zhaoyu Guo
 */

import { Meta, Story } from "@storybook/react";
import Utility, { UtilityProps } from "./Utility";

export default {
  title: "Navigation/Utility Link",
  component: Utility,
} as Meta;

const Template: Story<UtilityProps> = (args) => <Utility {...args} />;

export const TextLink = Template.bind({});

TextLink.args = {
  variant: "ghost",
  children: "Text link",
  color: "primary.default",
  colorScheme: "primary.default",
};

export const Solid = Template.bind({});

Solid.args = {
  variant: "solid",
  children: "Solid link",
  color: "white",
  colorScheme: "primary.dark",
};
