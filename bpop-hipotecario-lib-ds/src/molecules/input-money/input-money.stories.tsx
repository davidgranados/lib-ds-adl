import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";

import InputMoney from "./input-money";

export default {
  title: "Molecules/InputMoney",
  component: InputMoney,
  args: {
    id: "id",
    hasError: false,
    caption: "Test caption",
    label: "Test label",
    disabled: false,
    maxLength: 20,
    minLength: 1,
    onBlur: () => console.log("onBlur"),
    onChange: (e) => console.log("OnChange", e),
    placeholder: "Placeholder",
  },
} as ComponentMeta<typeof InputMoney>;

const Template: ComponentStory<typeof InputMoney> = (args) => <InputMoney {...args} />;

export const Default = Template.bind({});
