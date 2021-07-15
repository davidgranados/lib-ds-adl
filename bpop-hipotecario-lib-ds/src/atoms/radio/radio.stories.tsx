import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";

import Radio from "./radio";

export default {
  title: "Atoms/Radio",
  component: Radio,
  args: {
    id: "id",
    disabled: false,
    hasError: false,
    value: "radio-old test value",
  },
  argTypes: {
    id: { control: "text" },
    disabled: { control: "boolean" },
    hasError: { control: "boolean" },
    value: { control: "text" },
    onFocus: { action: "focused" },
    onBlur: { action: "blurred" },
    onClick: { action: "clicked" },
    onChange: { action: "changed" },
  },
} as ComponentMeta<typeof Radio>;

const Template: ComponentStory<typeof Radio> = (args) => <Radio {...args} />;

export const Default = Template.bind({});
