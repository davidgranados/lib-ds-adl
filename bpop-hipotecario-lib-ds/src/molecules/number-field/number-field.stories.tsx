import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";

import NumberField from "./number-field";

export default {
  title: "Molecules/NumberField",
  component: NumberField,
} as ComponentMeta<typeof NumberField>;

const Template: ComponentStory<typeof NumberField> = (args) => <NumberField {...args} />;

export const Default = Template.bind({});
Default.args = {
  id: "default-text-field-id",
  label: "This is a test label",
  caption: "This is a caption",
  placeholder: "Placeholder",
  isDisabled: false,
  maxLength: 5,
  hasError: false,
  onChange: (v: any) => console.log(v),
};
