/* istanbul ignore file */
import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";

import MessageCard from "./message-card-base";
import { validIcons } from "./helpers";

export default {
  title: "Molecules/MessageCard",
  component: MessageCard,
  args: {
    icon: "warning",
    title: "Lo sentimos, tu cliente no cumple con las políticas de edad",
    subtitle: "No es posible continuar ni atender esta solicitud.",
    textButton: "Salir de esta solicitud",
    onClick: () => console.log("button clicked"),
    iconAltAttribute: "icon alt text",
    iconTitleAttribute: "icon title",
  },
  argTypes: {
    icon: { options: validIcons, control: "select" },
  },
  parameters: {
    layout: "fullscreen",
  },
} as ComponentMeta<typeof MessageCard>;

const Template: ComponentStory<typeof MessageCard> = (args) => (
  <div style={{ display: "flex", justifyContent: "center" }}>
    <MessageCard {...args} />
  </div>
);

export const Default = Template.bind({});
