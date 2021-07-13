/* istanbul ignore file */
import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";

import InputBase from "./input-base";
import { validSizes, validStatuses } from "./helpers";

export default {
  title: "Atoms/InputBase",
  component: InputBase,
  args: {
    status: undefined,
    disabled: false,
    type: "text",
    size: "md",
    placeholder: "Input Base",
    value: undefined,
  },
  argTypes: {
    size: { options: validSizes, control: "select" },
    status: { options: [undefined, ...validStatuses], control: "select" },
    value: { control: "text" },
    disabled: { control: "boolean" },
    onFocus: { action: "focused" },
    onBlur: { action: "blurred" },
    onInput: { action: "typing" },
  },
} as ComponentMeta<typeof InputBase>;

const Template: ComponentStory<typeof InputBase> = (args) => <InputBase {...args} />;

export const Default = Template.bind({});
