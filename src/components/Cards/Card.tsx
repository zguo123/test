/**
 * UTM CFSA Component Library
 *
 * This component is a card.
 *
 * @author Zhaoyu Guo
 */

import { useColorModeValue } from "@chakra-ui/color-mode";
import { Flex } from "@chakra-ui/layout";
import React, {
  Children,
  isValidElement,
  PropsWithChildren,
  ReactElement,
} from "react";

// props
export type CardProps = {
  textColor: "primary" | "secondary" | "error" | "success" | "warning";
  variant: "solid" | "outline" | "ghost";
} & PropsWithChildren<any>;

// default props
const defaultProps = {
  variant: "ghost",
};

const CardTemplate: React.FC<CardProps> = (props: CardProps) => {
  // ensures the children are all react elements
  const children = Children.toArray(props.children).filter<ReactElement>(
    isValidElement
  );

  // colour modes
  const ghostMode = useColorModeValue("gray.200", "gray.900");
  const solidMode = useColorModeValue(
    `${props.textColor}.default`,
    `${props.textColor}.darkMode`
  );
  const outlineMode = useColorModeValue("white", "gray.900");

  // for outline only
  const color = useColorModeValue(`${props.textColor}.dark`, "white");

  // for the solid only
  const solidColor = "white";

  return (
    <Flex
      bg={
        props.variant === "ghost"
          ? ghostMode
          : props.variant === "solid"
          ? solidMode
          : outlineMode
      }
      borderRadius={32}
      color={props.variant === "solid" ? solidColor : color}
      width="45%"
      flexDirection="column"
      borderWidth={props.variant === "outline" ? 6 : 0}
      borderColor={props.variant === "outline" ? color : undefined}
      height="100%"
      p={10}
    >
      {children.find((child) => child.type === Header)?.props.children}
      {children.find((child) => child.type === Title)?.props.children}
      {children.find((child) => child.type === Content)?.props.children}
      {children.find((child) => child.type === Footer)?.props.children}
    </Flex>
  );
};

const Header: React.FC = () => null;
const Title: React.FC = () => null;
const Content: React.FC = () => null;
const Footer: React.FC = () => null;

const Card = Object.assign(CardTemplate, {
  Header,
  Title,
  Content,
  Footer,
});

Card.defaultProps = defaultProps;

export default Card;
