import React from "react";
import { render } from "@testing-library/react";

import OtpInput from "./otp-input";
import { OtpInputProps } from "../../types";

describe("<OtpInput />", () => {
  const onChange = jest.fn();
  beforeEach(() => {
    jest.clearAllMocks();
  });
  const getComponent = (componentProps: OtpInputProps) => <OtpInput {...componentProps} />;
  it("should match snapshot", () => {
    const { container } = render(getComponent({ focus: true, disabled: false, onChange: onChange }));
    expect(container).toMatchSnapshot();
  });
  it("should match blurred and disabled snapshot", () => {
    const { container } = render(getComponent({ focus: false, disabled: true, onChange: onChange }));
    expect(container).toMatchSnapshot();
  });
});
