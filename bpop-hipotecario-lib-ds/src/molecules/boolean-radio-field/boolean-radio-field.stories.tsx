/* istanbul ignore file */
import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";

import BooleanRadioField from "./boolean-radio-field";

export default {
  title: "Molecules/BooleanRadioField",
  component: BooleanRadioField,
  args: {
    id: "boolean-radio-field-story",
    withTooltip: true,
    name: "international-payments",
    initialValue: false,
    labelText: "¿Realiza operaciones internacionales?",
    tooltipTextBody:
      "Son los movimientos financieros que realizas en otros países a través de cuentas en el exterior a tu nombre. No son compras por internet, suscripciones a servicios o remesas/giros.",
  },
  parameters: {
    layout: "centered",
  },
} as ComponentMeta<typeof BooleanRadioField>;

const Template: ComponentStory<typeof BooleanRadioField> = (args) => (
  <div>
    <BooleanRadioField {...args} />
  </div>
);

export const Default = Template.bind({});
