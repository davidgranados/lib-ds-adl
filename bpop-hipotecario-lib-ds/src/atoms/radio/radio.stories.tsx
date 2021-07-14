import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";

import Radio from "./radio";

export default {
  title: "Atoms/Radio",
  component: Radio,
} as ComponentMeta<typeof Radio>;

const Template: ComponentStory<typeof Radio> = (args) => <Radio {...args} />;

export const Default = Template.bind({});
Default.args = {
  id: "id",
  isDisabled: false,
  hasError: false,
  onChange: (v: any) => console.log(v.target.value),
};
