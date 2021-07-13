import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";

import Typography from "./typography";
import { validComponents, validColors, validStatuses, validWeights, validVariants } from "./helpers";

export default {
  title: "Atoms/Typography",
  component: Typography,
  args: {
    variant: "h1",
    children: "Typography",
  },
  argTypes: {
    variant: { options: validVariants, control: "select" },
    component: { options: [undefined, ...validComponents], control: "select" },
    status: { options: [undefined, ...validStatuses], control: "select" },
    color: { options: [undefined, ...validColors], control: "select" },
    weight: { options: [undefined, ...validWeights], control: "select" },
  },
} as ComponentMeta<typeof Typography>;

const Template: ComponentStory<typeof Typography> = (args) => <Typography {...args} />;

export const Default = Template.bind({});
