import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";

import RadioField from "./radio-field";

export default {
  title: "Molecules/RadioField",
  component: RadioField,
} as ComponentMeta<typeof RadioField>;

const Template: ComponentStory<typeof RadioField> = (args) => <RadioField {...args} />;

export const Default = Template.bind({});
Default.args = {
  id: "id",
  text: "This is a label",
  isDisabled: false,
  onChange: (v: any) => console.log(v),
};
