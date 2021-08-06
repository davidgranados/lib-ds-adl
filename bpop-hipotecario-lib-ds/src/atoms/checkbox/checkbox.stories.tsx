import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";

import Checkbox from "./checkbox";

export default {
  title: "Atoms/Checkbox",
  component: Checkbox,
  args: {
    id: "checkbox-story",
    disabled: false,
    hasError: false,
  },
} as ComponentMeta<typeof Checkbox>;

const Template: ComponentStory<typeof Checkbox> = (args) => <Checkbox {...args} />;

export const Default = Template.bind({});
