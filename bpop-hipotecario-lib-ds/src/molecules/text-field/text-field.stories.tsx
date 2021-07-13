/* istanbul ignore file */
import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";

import { validSizes, validStatuses } from "../../atoms/input-base";

import TextField from "./text-field";

export default {
  title: "Molecules/TextField",
  component: TextField,
  args: {
    id: "default-text-field-id",
    label: "Label",
    caption: "Caption Message",
    maxLength: 30,
    value: undefined,
    status: undefined,
    disabled: false,
    placeholder: "Text Field",
    size: "md",
  },
  argTypes: {
    status: { options: [undefined, ...validStatuses], control: "select" },
    size: { options: validSizes, control: "select" },
    value: { control: "text" },
    maxLength: { control: "number" },
    onFocus: { action: "focused" },
    onBlur: { action: "blurred" },
    onChange: { action: "changed" },
  },
} as ComponentMeta<typeof TextField>;

const Template: ComponentStory<typeof TextField> = (args) => <TextField {...args} />;

export const Default = Template.bind({});
