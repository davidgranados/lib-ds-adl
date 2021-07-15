/* istanbul ignore file */
import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";

import { validSizes, validStatuses } from "../../atoms/input-base";

import NumberField from "./number-field";

export default {
  title: "Molecules/NumberField",
  component: NumberField,
  args: {
    id: "default-text-field-id",
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
} as ComponentMeta<typeof NumberField>;

const Template: ComponentStory<typeof NumberField> = (args) => <NumberField {...args} />;

export const Default = Template.bind({});
