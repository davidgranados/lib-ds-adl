import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";

import { Typography } from "./typography";

export default {
  title: "Atoms/Typography",
  component: Typography,
} as ComponentMeta<typeof Typography>;

const Template: ComponentStory<typeof Typography> = (args) => <Typography {...args} />;

export const Heading1 = Template.bind({});
Heading1.args = {
  variant: "h1",
  children: "Typography",
};
