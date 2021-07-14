import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";

import CheckboxField from "./checkbox-field";

export default {
  title: "Molecules/CheckboxField",
  component: CheckboxField,
} as ComponentMeta<typeof CheckboxField>;

const Template: ComponentStory<typeof CheckboxField> = (args) => <CheckboxField {...args} />;

export const Default = Template.bind({});
Default.args = {
  id: "id",
  text: "This is a label",
  isDisabled: false,
  onChange: (v: any) => console.log(v),
};
