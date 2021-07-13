/* istanbul ignore file */
import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";

import { validSizes, validStatuses } from "../../atoms/input-base";

import TextField from "./text-field";

export default {
  title: "Molecules/TextFieldDraft",
  component: TextField,
  args: {
    id: "default-text-field-id",
    label: "Label",
    caption: "Caption Message",
    value: undefined,
    status: undefined,
    disabled: false,
    placeholder: "Input Base",
    size: "md",
  },
  argTypes: {
    status: { options: [undefined, ...validStatuses], control: "select" },
    size: { options: validSizes, control: "select" },
    value: { control: "text" },
    onFocus: { action: "focused" },
    onBlur: { action: "blurred" },
    onInput: { action: "typing" },
    onChange: { action: "changed" },
  },
} as ComponentMeta<typeof TextField>;

const Template: ComponentStory<typeof TextField> = (args) => <TextField {...args} />;

export const Default = Template.bind({});
