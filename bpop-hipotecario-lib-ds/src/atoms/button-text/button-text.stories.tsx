import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";

import { ButtonVariant } from "../../types";

import ButtonText from "./button-text";
import { ButtonTextSize } from "./types";

const variants: ButtonVariant[] = ["primary", "secondary"];
const sizes: ButtonTextSize[] = ["sm", "md", "lg"];

export default {
  title: "Atoms/ButtonText",
  component: ButtonText,
  args: {
    disabled: false,
    text: "Button",
    onClick: () => {
      console.log("button text clicked");
    },
    onFocus: () => {
      console.log("button text focused");
    },
    onBlur: () => {
      console.log("button text blurred");
    },
  },
  argTypes: {
    variant: { options: variants, control: "select" },
    size: { options: sizes, control: "select" },
    disabled: { control: "boolean" },
  },
} as ComponentMeta<typeof ButtonText>;

const Template: ComponentStory<typeof ButtonText> = (args) => <ButtonText {...args} />;

export const PrimaryText = Template.bind({});
PrimaryText.args = {
  variant: "primary",
};

export const SecondaryText = Template.bind({});
SecondaryText.args = {
  variant: "secondary",
};
