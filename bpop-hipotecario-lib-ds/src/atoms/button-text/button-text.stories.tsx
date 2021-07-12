/* istanbul ignore file */
import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";

import ButtonText from "./button-text";
import { validSizes, validVariants } from "./helpers";

export default {
  title: "Atoms/ButtonText",
  component: ButtonText,
  args: {
    variant: "primary",
    disabled: false,
    text: "Button Text",
  },
  argTypes: {
    variant: { options: validVariants, control: "select" },
    size: { options: validSizes, control: "select" },
    disabled: { control: "boolean" },
    onFocus: { action: "focused" },
    onBlur: { action: "blurred" },
    onClick: { action: "clicked" },
  },
} as ComponentMeta<typeof ButtonText>;

const Template: ComponentStory<typeof ButtonText> = (args) => <ButtonText {...args} />;

export const Default = Template.bind({});
