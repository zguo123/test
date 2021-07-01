/**
 * UTM CFSA Component Library
 *
 * This represents the stories for the custom button
 *
 * @author Zhaoyu Guo
 */
import { Button } from "@chakra-ui/button";
import { Meta, Story } from "@storybook/react";
import { ButtonProps } from "./ButtonProps";
export default {
  title: "Components/Button",
  component: Button,
} as Meta;

const ButtonTemplate: Story<ButtonProps> = (args) => <Button {...args} />;

export const Primary = ButtonTemplate.bind({});

Primary.args = {
  colorScheme: "primary",
  children: "Primary Button",
};

export const Secondary = ButtonTemplate.bind({});

Secondary.args = {
  colorScheme: "secondary",
  children: "Secondary Button",
};

export const Error = ButtonTemplate.bind({});

Error.args = {
  colorScheme: "error",
  children: "Error Button",
};

export const Success = ButtonTemplate.bind({});

Success.args = {
  colorScheme: "success",
  children: "Success Button",
};

export const Warning = ButtonTemplate.bind({});

Warning.args = {
  colorScheme: "warning",
  children: "Warning Button",
};
