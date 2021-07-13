/* istanbul ignore file */
import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";

import { validSizes, validStatuses } from "../../atoms/input-base";

import InputFieldBase from "./input-field-base";

export default {
  title: "Molecules/InputFieldBase",
  component: InputFieldBase,
  args: {
    id: "default-input-field-id",
    label: "Label",
    caption: "Caption Message",
    status: undefined,
    disabled: false,
    placeholder: "Input Base",
    size: "md",
    maxLength: 10,
  },
  argTypes: {
    status: { options: [undefined, ...validStatuses], control: "select" },
    size: { options: validSizes, control: "select" },
    maxLength: { control: "number" },
    onFocus: { action: "focused" },
    onBlur: { action: "blurred" },
    onInput: { action: "typing" },
    onChange: { action: "changed" },
  },
} as ComponentMeta<typeof InputFieldBase>;

const Template: ComponentStory<typeof InputFieldBase> = (args) => <InputFieldBase {...args} />;

export const Default = Template.bind({});
