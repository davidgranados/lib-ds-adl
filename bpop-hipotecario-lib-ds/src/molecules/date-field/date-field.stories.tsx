import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";

import DateField from "./date-field";

export default {
  title: "Molecules/DateField",
  component: DateField,
  args: {
    id: "date-field-birthday",
    caption: "This is a caption",
    hasError: false,
  },
  argTypes: {
    onChange: { action: "changed" },
  },
} as ComponentMeta<typeof DateField>;

const Template: ComponentStory<typeof DateField> = (args) => <DateField {...args} />;

export const Default = Template.bind({});
