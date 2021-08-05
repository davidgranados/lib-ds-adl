/* istanbul ignore file */
import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";

import { validSizes } from "../../atoms/input-text-base";

import InputTextFieldBase from "./input-text-field-base";

export default {
  title: "Molecules/InputTextFieldBase",
  component: InputTextFieldBase,
  args: {
    id: "text-field-base-story",
    label: "Label",
    caption: "Caption Message",
    hasError: false,
    disabled: false,
    placeholder: "Input Base",
    size: "md",
    maxLength: 10,
    withTooltip: true,
    tooltipTextTitle: "tooltip title",
    tooltipTextBody: "tooltip text body",
    tooltipMarginLeft: 20,
    tooltipMarginRight: 20,
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
  parameters: {
    layout: "centered",
  },
} as ComponentMeta<typeof InputTextFieldBase>;

const Template: ComponentStory<typeof InputTextFieldBase> = (args) => (
  <div>
    <InputTextFieldBase {...args} />
  </div>
);

export const Default = Template.bind({});
