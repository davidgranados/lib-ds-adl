import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";

import { Button } from "./button";

export default {
  title: "Atoms/Button",
  component: Button,
  args: {
    disabled: false,
    label: "Button",
  },
  argTypes: {
    variant: { control: "select" },
    size: { control: "select" },
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
