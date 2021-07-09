import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";

import TextField from "./text-field";

export default {
  title: "Atoms/TextField",
  component: TextField,
} as ComponentMeta<typeof TextField>;

const Template: ComponentStory<typeof TextField> = (args) => <TextField {...args} />;

export const Default = Template.bind({});
Default.args = {
  id: "default-text-field-id",
  label: "This is a test label",
  caption: "This is a caption",
  placeholder: "Placeholder",
  isDisabled: false,
  hasError: false,
  onChange: (v) => console.log(v),
};
