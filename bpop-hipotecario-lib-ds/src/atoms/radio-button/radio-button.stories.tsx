import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";

import RadioButton from "./radio-button";

const meta = {
  title: "Atoms/RadioButton",
  component: RadioButton,
  args: {
    name: "radio-button",
    label: "Radio Button Label",
    disabled: false,
  },
  argTypes: {
    onChange: { action: "changed" },
  },
};

export default meta as ComponentMeta<typeof RadioButton>;

const Template: ComponentStory<typeof RadioButton> = (args) => <RadioButton {...args} />;
const ListTemplate: ComponentStory<typeof RadioButton> = (args) => (
  <div style={{ display: "flex", gap: "16px" }}>
    <RadioButton {...args} />
    <RadioButton {...args} label={`${meta.args.label} 2`} />
    <RadioButton {...args} label={`${meta.args.label} 3`} />
  </div>
);

export const Default = Template.bind({});
export const RadioGroup = ListTemplate.bind({});
