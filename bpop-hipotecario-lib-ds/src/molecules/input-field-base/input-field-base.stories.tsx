/* istanbul ignore file */
import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";

import { validSizes } from "../../atoms/input-base";

import InputFieldBase from "./input-field-base";

export default {
  title: "Molecules/InputFieldBase",
  component: InputFieldBase,
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
} as ComponentMeta<typeof InputFieldBase>;

const Template: ComponentStory<typeof InputFieldBase> = (args) => <InputFieldBase {...args} />;

export const Default = Template.bind({});
