import React from "react";
import { mount, ReactWrapper } from "enzyme";

import { MessageCardBaseProps } from "../../types";

import MessageCardBase from "./message-card-base";

describe("<MessageCardBase />", () => {
  let wrapper: ReactWrapper<typeof MessageCardBase>;
  const props: MessageCardBaseProps = {
    title: "Lo sentimos, no es posible continuar",
    subtitle: "Esta solicitud no es viable",
    textButton: "Salir de esta solicitud",
    onClick: jest.fn(),
    iconAltAttribute: "icon alt text",
    iconTitleAttribute: "icon title",
  };

  beforeEach(() => {
    jest.clearAllMocks();
    // given
    wrapper = mount<typeof MessageCardBase>(<MessageCardBase {...props} />);
  });
  it("should match snapshot", () => {
    expect(wrapper).toMatchSnapshot();
  });
});
