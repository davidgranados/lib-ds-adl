import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";

import RadioField from "./radio-field";

const meta = {
  title: "Molecules/RadioField",
  component: RadioField,
  args: {
    name: "radio-field",
    label: "Radio Button Label",
    disabled: false,
  },
  argTypes: {
    onChange: { action: "changed" },
  },
};

export default meta as ComponentMeta<typeof RadioField>;

const Template: ComponentStory<typeof RadioField> = (args) => (
  <div style={{ display: "flex", gap: "16px" }}>
    <RadioField {...args} />
    <RadioField {...args} label={`${meta.args.label} 2`} />
    <RadioField {...args} label={`${meta.args.label} 3`} />
  </div>
);

export const Default = Template.bind({});
