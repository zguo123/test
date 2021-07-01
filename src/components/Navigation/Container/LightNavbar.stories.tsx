/**
 * UTM CFSA Component Library
 *
 * This represents the stories for the Navbar component
 *
 * @author Zhaoyu Guo
 */
import { SearchIcon, SunIcon } from "@chakra-ui/icons";
import {
  Button,
  IconButton,
  Text,
  useColorModeValue as mode,
} from "@chakra-ui/react";
import { Meta, Story } from "@storybook/react";
import React, { Fragment } from "react";
import NavLink from "../Item/NavLink";
import Utility from "../Utility/Utility";
import { Navbar } from "./Navbar";
import * as Headers from "../../Header/NavHeaders/NavHeaders.stories";
import { NavHeadersProps } from "../../Header/NavHeaders/NavHeaders";

export default {
  title: "Navigation/Light",
  component: Navbar,
  subcomponents: { NavLink, Text, Button },
} as Meta;

// provide a an interface of all args
interface Args extends NavHeadersProps {
  student?: boolean;
  admin?: boolean;
  authenticated?: boolean;
}

/**
 * Renders the main navigation links based on `admin`, `student`.
 *
 * @param admin A boolean to represent if this is the admin navigation
 * @param student A boolean to represent if this is this student navigation
 * @returns a ReactElement based on `admin` and `student`
 */
function renderLinks(admin?: boolean, student?: boolean) {
  switch (true) {
    case admin:
      return (
        <Fragment>
          <NavLink color="white">Surveys</NavLink>
          <NavLink color="white">Members</NavLink>
        </Fragment>
      );
    case student:
      return (
        <Fragment>
          <NavLink color="white">Home</NavLink>
          <NavLink color="white">About</NavLink>
          <NavLink color="white">UTM Links</NavLink>
          <NavLink color="white">Contact Us</NavLink>
        </Fragment>
      );
    default:
      return (
        <Fragment>
          <NavLink isActive>Home</NavLink>
          <NavLink color="white">About</NavLink>
          <NavLink color="white">UTM Links</NavLink>
          <NavLink color="white">Contact Us</NavLink>
        </Fragment>
      );
  }
}

/**
 * Renders the utility navigation links based on `admin`, `student` and `authenticated`.
 *
 * @param admin A boolean to represent if this is the admin navigation
 * @param student A boolean to represent if this is this student navigation
 * @param authenticated A boolean to represent if this is this authenticated navigation
 * @param rest the rest of the parameters
 * @returns a ReactElement based on `admin`, `student` and `authenticated`
 */
function renderUtilityLinks(
  admin?: boolean,
  student?: boolean,
  authenticated?: boolean
) {
  switch (true) {
    case admin:
      return (
        <Fragment>
          <Utility color="primary.default" variant="solid">
            Main Site
          </Utility>
        </Fragment>
      );
    case student:
      return (
        <Fragment>
          <Utility color="primary.default" variant="solid">
            Join Club
          </Utility>
          <IconButton
            aria-label="Dark Mode"
            color="white"
            variant="ghost"
            _hover={{
              bg: mode("gray.100", "gray.700"),
              color: mode("primary.dark", "gray.900"),
            }}
            icon={<SunIcon />}
          />
        </Fragment>
      );
    case authenticated:
      return (
        <Fragment>
          <Utility color="white" variant="ghost">
            Surveys
          </Utility>
          <Utility color="primary.default" variant="solid">
            Admin
          </Utility>
          <IconButton
            aria-label="Dark Mode"
            color="white"
            variant="ghost"
            _hover={{
              bg: mode("gray.100", "gray.700"),
              color: mode("primary.dark", "gray.900"),
            }}
            icon={<SunIcon />}
          />
        </Fragment>
      );
    default:
      return (
        <Fragment>
          <Utility color="white" variant="ghost">
            Surveys
          </Utility>
          <Utility color="primary.default" variant="solid">
            Join Club
          </Utility>
          <IconButton
            aria-label="Dark Mode"
            color="white"
            variant="ghost"
            _hover={{
              bg: mode("gray.100", "gray.700"),
              color: mode("primary.dark", "gray.900"),
            }}
            icon={<SunIcon />}
          />
        </Fragment>
      );
  }
}

const MainNav: Story<Args> = (args) => (
  <Fragment>
    <Navbar>
      <Navbar.Brand>
        <Text color="white" fontSize="2xl" fontWeight="bold">
          CFSA
        </Text>
      </Navbar.Brand>
      <Navbar.Links>{renderLinks(args.admin, args.student)}</Navbar.Links>
      <Navbar.UtilityLinks>
        {renderUtilityLinks(args.admin, args.student, args.authenticated)}
        <IconButton
          aria-label="Search"
          color="white"
          variant="ghost"
          _hover={{
            bg: mode("gray.100", "gray.700"),
            color: mode("primary.default", "gray.900"),
          }}
          icon={<SearchIcon />}
        />
      </Navbar.UtilityLinks>
    </Navbar>
    {args.header && <Headers.StudentHeader {...args.header} />}
  </Fragment>
);
export const UnauthenticatedNav = MainNav.bind({});

UnauthenticatedNav.args = {
  authenticated: false,
};

export const AuthenticatedNav = MainNav.bind({});

AuthenticatedNav.args = {
  authenticated: true,
};

export const StudentNav = MainNav.bind({});

StudentNav.args = {
  student: true,
  header: { ...Headers.StudentHeader.args },
};

export const AdminNav = MainNav.bind({});

AdminNav.args = {
  admin: true,
  header: { ...Headers.AdminSurveysHeader.args },
};
