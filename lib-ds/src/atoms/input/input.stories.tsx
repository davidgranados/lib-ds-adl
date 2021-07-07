import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";

import { Input } from "./input";

export default {
  title: "Atoms/Input",
  component: Input,
  args: {
    disabled: false,
    label: "Input",
  },
  argTypes: {
    disabled: { control: "boolean" },
  },
} as ComponentMeta<typeof Input>;

const Template: ComponentStory<typeof Input> = (args) => <Input {...args} />;

export const Default = Template.bind({});
Default.args = {
  type: "text",
};
