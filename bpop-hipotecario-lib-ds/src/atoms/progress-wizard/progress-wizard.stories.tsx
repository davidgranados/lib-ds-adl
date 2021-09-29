import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";

import ProgressWizard from "./progress-wizard";

export default {
  title: "Atoms/ProgressWizard",
  component: ProgressWizard,
  args: {
    items: ["Ingresos", "Tipo de financiación", "Pre aprobado"],
    currentItem: 0,
  },
} as ComponentMeta<typeof ProgressWizard>;

const Template: ComponentStory<typeof ProgressWizard> = (args) => <ProgressWizard {...args} />;

export const Default = Template.bind({});
