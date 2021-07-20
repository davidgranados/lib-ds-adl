/* istanbul ignore file */
import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";

import { validSizes } from "../../atoms/input-text-base";

import InputTextFieldBase from "./input-text-field-base";

export default {
  title: "Molecules/InputTextFieldBase",
  component: InputTextFieldBase,
  args: {
    id: "default-input-field-id",
    label: "Label",
    caption: "Caption Message",
    hasError: false,
    disabled: false,
    placeholder: "Input Base",
    size: "md",
    maxLength: 10,
  },
  argTypes: {
    hasError: { control: "boolean" },
    size: { options: validSizes, control: "select" },
    maxLength: { control: "number" },
    onFocus: { action: "focused" },
    onBlur: { action: "blurred" },
    onInput: { action: "typing" },
    onChange: { action: "changed" },
  },
} as ComponentMeta<typeof InputTextFieldBase>;

const Template: ComponentStory<typeof InputTextFieldBase> = (args) => <InputTextFieldBase {...args} />;

export const Default = Template.bind({});
