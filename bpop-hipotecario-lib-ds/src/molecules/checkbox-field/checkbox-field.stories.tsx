import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";

import CheckboxField from "./checkbox-field";

export default {
  title: "Molecules/CheckboxField",
  component: CheckboxField,
  args: {
    id: "id",
    label: "This is a label",
    disabled: false,
  },
  argTypes: {
    onChange: { action: "changed" },
  },
} as ComponentMeta<typeof CheckboxField>;

const Template: ComponentStory<typeof CheckboxField> = (args) => <CheckboxField {...args} />;

export const Default = Template.bind({});
