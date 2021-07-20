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
    disabled: false,
  },
  argTypes: {
    onChange: { action: "changed" },
  },
} as ComponentMeta<typeof DateField>;

const Template: ComponentStory<typeof DateField> = (args) => (
  <div style={{ width: "320px", border: "1px solid red", padding: "20px", boxSizing: "border-box" }}>
    <DateField {...args} />
  </div>
);

export const Mobile320px = Template.bind({});
