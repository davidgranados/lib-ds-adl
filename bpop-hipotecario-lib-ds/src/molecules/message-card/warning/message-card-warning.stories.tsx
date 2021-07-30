/* istanbul ignore file */
import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";

import warningIcon from "../../../assets/images/80-warning.svg";

import MessageCardWarning from "./message-card-warning";

export default {
  title: "Molecules/MessageCardWarning",
  component: MessageCardWarning,
  args: {
    iconURL: warningIcon,
    title: "Lo sentimos, no es posible continuar",
    subtitle: "Esta solicitud no es viable",
    textButton: "Salir de esta solicitud",
    onClick: () => console.log("button clicked"),
    iconAltAttribute: "icon alt text",
    iconTitleAttribute: "icon title",
  },
  parameters: {
    layout: "fullscreen",
  },
} as ComponentMeta<typeof MessageCardWarning>;

const Template: ComponentStory<typeof MessageCardWarning> = (args) => (
  <div style={{ display: "flex", justifyContent: "center" }}>
    <MessageCardWarning {...args} />
  </div>
);

export const Default = Template.bind({});
