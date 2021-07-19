/* istanbul ignore file */
import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";

import Tooltip from "./tooltip";
import { Button } from "../../lib";
import { Icon } from "../icon";

export default {
  title: "Atoms/Tooltip",
  component: Tooltip,
  args: {
    textBody:
      "Son personas que manejan recursos públicos, ejercen cargos directivos en el estado, tienen cargos políticos o son celebridades.",
    textTitle: "¿Quienes son PEP?",
  },
  argTypes: {},
} as ComponentMeta<typeof Tooltip>;

const Template: ComponentStory<typeof Tooltip> = (args) => (
  <div style={{ marginTop: "250px", marginLeft: "100px" }}>
    <Tooltip {...args}>
      <Icon name={"close"}></Icon>
    </Tooltip>
  </div>
);

export const Default = Template.bind({});
