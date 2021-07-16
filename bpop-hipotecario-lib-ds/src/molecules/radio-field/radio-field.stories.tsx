import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";

import RadioField from "./radio-field";

export default {
  title: "Molecules/RadioField",
  component: RadioField,
  args: {
    id: "id",
    name: "radio-field",
    label: "This is a label",
    disabled: false,
  },
  argTypes: {
    onChange: { action: "changed" },
  },
} as ComponentMeta<typeof RadioField>;

const Template: ComponentStory<typeof RadioField> = (args) => <RadioField {...args} />;

export const Default = Template.bind({});
