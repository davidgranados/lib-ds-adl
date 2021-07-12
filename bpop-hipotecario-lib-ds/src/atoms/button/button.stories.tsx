/* istanbul ignore file */
import React from "react";
import { ComponentMeta, ComponentStory } from "@storybook/react";

import Button from "./button";
import { validSizes, validVariants } from "./helpers";

export default {
  title: "Atoms/Button",
  component: Button,
  args: {
    variant: "primary",
    disabled: false,
    text: "Button",
  },
  argTypes: {
    variant: { options: validVariants, control: "select" },
    size: { options: validSizes, control: "select" },
    disabled: { control: "boolean" },
    onFocus: { action: "focused" },
    onBlur: { action: "blurred" },
    onClick: { action: "clicked" },
    onMouseDown: { action: "mouse down" },
    onMouseUp: { action: "mouse up" },
    onMouseEnter: { action: "mouse enter" },
    onMouseLeave: { action: "mouse leave" },
    onTouchStart: { action: "touch start" },
    onTouchEnd: { action: "touch end" },
  },
} as ComponentMeta<typeof Button>;

const Template: ComponentStory<typeof Button> = (args) => <Button {...args} />;

export const Default = Template.bind({});
