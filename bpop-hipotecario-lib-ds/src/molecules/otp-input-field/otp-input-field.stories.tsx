/* istanbul ignore file */
import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";

import OtpInputField from "./otp-input-field";

export default {
  title: "Molecules/OtpInputField",
  component: OtpInputField,
  args: {
    onChange: (value) => console.log(value),
    hasError: true,
    caption: "this is a error message",
    value: "",
    disabled: false,
    numInputs: 8,
  },
} as ComponentMeta<typeof OtpInputField>;

const Template: ComponentStory<typeof OtpInputField> = (args) => (
  <div style={{ width: "456px" }}>
    <OtpInputField {...args} />
  </div>
);

export const Default = Template.bind({});
