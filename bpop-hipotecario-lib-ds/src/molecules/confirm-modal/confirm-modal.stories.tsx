import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";

import ConfirmModal from "./confirm-modal";

export default {
  title: "Molecules/ConfirmModal",
  component: ConfirmModal,
} as ComponentMeta<typeof ConfirmModal>;

const Template: ComponentStory<typeof ConfirmModal> = (args) => <ConfirmModal {...args} />;

export const Default = Template.bind({});
Default.args = {
  title: "¿Quieres salir de esta solicitud?",
  description: "Al salir perderás el proceso avanzado y los datos registrados.",
  mainButtonText: "No",
  secondaryButtonText: "Sí, salir de esta solicitud",
  show: true,
};
