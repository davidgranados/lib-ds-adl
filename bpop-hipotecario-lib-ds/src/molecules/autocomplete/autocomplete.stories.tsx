/* istanbul ignore file */
import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";

import Autocomplete from "./autocomplete";

export default {
  title: "Molecules/Autocomplete",
  component: Autocomplete,
} as ComponentMeta<typeof Autocomplete>;

const Template: ComponentStory<typeof Autocomplete> = (args) => <Autocomplete {...args} />;

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
  id: "auto-complete",
  disabled: false,
  maxLength: 20,
  onBlur: () => console.log("onBlur"),
  onChange: (e) => console.log("onChange", e),
  placeholder: "Placeholder",
  specialStatus: undefined,
  type: "text",
  items: months.map((v, i) => ({ label: v, value: `${i}` })),
  label: "Test label",
  caption: "Test caption",
  hasError: false,
};
