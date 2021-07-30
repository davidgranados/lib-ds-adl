import React from "react";
import { mount, ReactWrapper } from "enzyme";

import { MessageCardWarningProps } from "../../../types";

import MessageCardWarning from "./message-card-warning";

describe("<MessageCardWarning />", () => {
  let wrapper: ReactWrapper<typeof MessageCardWarning>;
  const props: MessageCardWarningProps = {
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
    wrapper = mount<typeof MessageCardWarning>(<MessageCardWarning {...props} />);
  });
  it("should match snapshot", () => {
    expect(wrapper).toMatchSnapshot();
  });
});
