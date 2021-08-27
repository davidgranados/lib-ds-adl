import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";

import Loader from "./loader";

export default {
  title: "Molecules/Loader",
  component: Loader,
} as ComponentMeta<typeof Loader>;

const Template: ComponentStory<typeof Loader> = (args) => <Loader {...args} />;

export const Default = Template.bind({});
Default.args = {
  id: "dropdown-story",
  show: true,
  showOverlay: false,
};
