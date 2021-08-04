import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";

import AlertBadge from "./alert-badge";

export default {
  title: "Molecules/AlertBadge",
  component: AlertBadge,
} as ComponentMeta<typeof AlertBadge>;

const Template: ComponentStory<typeof AlertBadge> = (args) => <AlertBadge {...args} />;

export const Default = Template.bind({});
Default.args = {
  children:
    "Tu cliente no tiene una relación de parentesco/afinidad para sumar ingresos, puedes continuar esta solicitud con tu primer cliente o cambiar tu segundo cliente.",
  type: "info",
};
