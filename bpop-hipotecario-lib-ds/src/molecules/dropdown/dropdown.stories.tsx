import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";

import Dropdown from "./dropdown";

export default {
  title: "Molecules/Dropdown",
  component: Dropdown,
} as ComponentMeta<typeof Dropdown>;

const Template: ComponentStory<typeof Dropdown> = (args) => <Dropdown {...args} />;

const months = [
  "January",
  "February",
  "March",
  "April",
  "May",
  "June",
  "July",
  "August",
  "September",
  "October",
  "November",
  "December",
];

export const Default = Template.bind({});
Default.args = {
  id: "default-dropdown-id",
  label: "This is a test label",
  caption: "This is a caption",
  placeholder: "Placeholder",
  isDisabled: false,
  hasError: false,
  items: months.map((v, i) => ({ label: v, value: i })),
  onChange: (v: any) => console.log(v),
};
