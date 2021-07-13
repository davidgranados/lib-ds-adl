import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";

import Label from "./label";

export default {
  title: "Atoms/Label",
  component: Label,
  args: {
    id: "default-label-id",
    children: "This is a label",
  },
  argTypes: {
    onClick: { action: "clicked" },
  },
} as ComponentMeta<typeof Label>;

const Template: ComponentStory<typeof Label> = (args) => <Label {...args} />;

export const Default = Template.bind({});
