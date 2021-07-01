/**
 * UTM CFSA Component Library
 *
 * This component represents the stories for the header for the student and admin navigation
 *
 * @author Zhaoyu Guo
 */

import { Story, Meta } from "@storybook/react";
import NavHeaders, { NavHeadersProps } from "./NavHeaders";

export default {
  title: "Headers/Navigation Headers",
  component: NavHeaders,
} as Meta;

const Header: Story<NavHeadersProps> = (args) => <NavHeaders {...args} />;

export const StudentHeader = Header.bind({});

StudentHeader.args = {
  title: "Surveys",
  subTitle:
    "Make a difference. Make your voice heard! - Questions from students to students",
};

export const AdminSurveysHeader = Header.bind({});

AdminSurveysHeader.args = {
  title: "Surveys",
  subTitle: "Manage all your surveys here.",
};

export const AdminMembersHeader = Header.bind({});

AdminMembersHeader.args = {
  title: "Members",
  subTitle: "View all members here.",
};
