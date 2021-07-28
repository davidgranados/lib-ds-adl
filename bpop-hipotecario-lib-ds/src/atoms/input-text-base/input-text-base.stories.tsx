/* istanbul ignore file */
import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";

import InputTextBase from "./input-text-base";
import { validSizes, validStatuses } from "./helpers";

export default {
  title: "Atoms/InputTextBase",
  component: InputTextBase,
  args: {
    id: "input-text-base-story",
    name: "input-name",
    specialStatus: undefined,
    disabled: false,
    type: "text",
    size: "lg",
    placeholder: "Input Base",
    value: undefined,
  },
  argTypes: {
    size: { options: validSizes, control: "select" },
    specialStatus: { options: [undefined, ...validStatuses], control: "select" },
    value: { control: "text" },
    disabled: { control: "boolean" },
    onFocus: { action: "focused" },
    onBlur: { action: "blurred" },
    onInput: { action: "typing" },
  },
} as ComponentMeta<typeof InputTextBase>;

const Template: ComponentStory<typeof InputTextBase> = (args) => <InputTextBase {...args} />;

export const Default = Template.bind({});
