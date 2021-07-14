import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";

import DateInputs from "./date-inputs";

export default {
  title: "Molecules/DateInputs",
  component: DateInputs,
} as ComponentMeta<typeof DateInputs>;

const Template: ComponentStory<typeof DateInputs> = (args) => <DateInputs {...args} />;

export const Default = Template.bind({});
Default.args = {
  id: "date-inputs-birthday",
  caption: "This is a caption",
  hasError: false,
  onChange: (v: any) => console.log(v),
};
