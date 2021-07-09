import React from "react";
import { ComponentMeta, ComponentStory } from "@storybook/react";

import { ButtonVariant } from "../../types";

import Button from "./button";
import { ButtonSize } from "./types";

const variants: ButtonVariant[] = ["primary", "secondary"];
const sizes: ButtonSize[] = ["xs", "sm", "md", "lg"];

export default {
  title: "Atoms/Button",
  component: Button,
  args: {
    disabled: false,
    text: "Button",
    onClick: () => {
      console.log("button clicked");
    },
    onFocus: () => {
      console.log("button focused");
    },
    onBlur: () => {
      console.log("button blurred");
    },
    onMouseDown: () => {
      console.log("button mouse down");
    },
    onMouseUp: () => {
      console.log("button mouse up");
    },
    onMouseEnter: () => {
      console.log("button mouse enter");
    },
    onMouseLeave: () => {
      console.log("button mouse leave");
    },
    onTouchStart: () => {
      console.log("button touch start");
    },
    onTouchEnd: () => {
      console.log("button touch0 end");
    },
  },
  argTypes: {
    variant: { options: variants, control: "select" },
    size: { options: sizes, control: "select" },
    disabled: { control: "boolean" },
  },
} as ComponentMeta<typeof Button>;

const Template: ComponentStory<typeof Button> = (args) => <Button {...args} />;

export const Primary = Template.bind({});
Primary.args = {
  variant: "primary",
};

export const Secondary = Template.bind({});
Secondary.args = {
  variant: "secondary",
};

export const Disabled = Template.bind({});
Disabled.args = {
  disabled: true,
};

export const Large = Template.bind({});
Large.args = {
  size: "lg",
};

export const Medium = Template.bind({});
Medium.args = {
  size: "md",
};

export const Small = Template.bind({});
Small.args = {
  size: "sm",
};

export const Tiny = Template.bind({});
Tiny.args = {
  size: "xs",
};
