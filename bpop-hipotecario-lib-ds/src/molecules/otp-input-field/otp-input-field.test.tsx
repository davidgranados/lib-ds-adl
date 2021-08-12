import React from "react";
import { render, screen, waitFor } from "@testing-library/react";
import userEvent from "@testing-library/user-event";

import { OtpInputFieldProps } from "../../types";

import OtpInputField from "./otp-input-field";

describe("<OtpInputField />", () => {
  const onChange = jest.fn();
  beforeEach(() => {
    jest.clearAllMocks();
  });
  const getComponent = (componentProps?: OtpInputFieldProps) => <OtpInputField {...componentProps} />;
  it("should match snapshot", () => {
    const { container } = render(getComponent());
    expect(container).toMatchSnapshot();
  });
  it("should match hasError snapshot", () => {
    const { container } = render(getComponent({ hasError: true }));
    expect(container).toMatchSnapshot();
  });
  it("should accept initial value", () => {
    // given
    render(getComponent({ value: "123", numInputs: 3 }));
    const inputZero = screen.getByTestId("opt-input-field-item-0");
    const inputOne = screen.getByTestId("opt-input-field-item-1");
    const inputTwo = screen.getByTestId("opt-input-field-item-2");
    // when
    // then
    expect(inputZero).toHaveValue("1");
    expect(inputOne).toHaveValue("2");
    expect(inputTwo).toHaveValue("3");
  });
  it("should handle input change", async () => {
    // given
    render(getComponent({ onChange }));
    const inputZero = screen.getByTestId("opt-input-field-item-0");
    const inputOne = screen.getByTestId("opt-input-field-item-1");
    const inputValue = "1";
    // when
    userEvent.type(inputZero, inputValue);
    // then
    await waitFor(() => {
      expect(onChange).toHaveBeenCalledTimes(1);
      expect(inputZero).toHaveValue(inputValue);
      expect(inputOne).toHaveFocus();
    });
  });
  it("should handle backspace keydown", async () => {
    // given
    render(getComponent({ onChange }));
    const inputZero = screen.getByTestId("opt-input-field-item-0");
    const inputOne = screen.getByTestId("opt-input-field-item-1");
    const inputTwo = screen.getByTestId("opt-input-field-item-2");
    const inputValue = "1";
    // when
    userEvent.type(inputZero, inputValue);
    userEvent.type(inputOne, inputValue);
    userEvent.type(inputTwo, "{backspace}");
    userEvent.type(inputOne, "{backspace}");
    // then
    await waitFor(() => {
      expect(onChange).toHaveBeenCalledTimes(4);
      expect(inputZero).toHaveValue(inputValue);
      expect(inputOne).toHaveValue("");
      expect(inputZero).toHaveFocus();
    });
  });
  it("should handle delete keydown", async () => {
    // given
    render(getComponent({ onChange }));
    const inputZero = screen.getByTestId("opt-input-field-item-0");
    const inputOne = screen.getByTestId("opt-input-field-item-1");
    const inputValue = "1";
    // when
    userEvent.type(inputZero, inputValue);
    userEvent.type(inputOne, "{backspace}");
    userEvent.type(inputZero, "{del}");
    // then
    await waitFor(() => {
      expect(onChange).toHaveBeenCalledTimes(3);
      expect(inputZero).toHaveValue("");
      expect(inputOne).toHaveValue("");
      expect(inputOne).toHaveFocus();
    });
    // screen.debug();
  });
  it("should handle arrow right keydown", async () => {
    // given
    render(getComponent());
    const inputZero = screen.getByTestId("opt-input-field-item-0");
    const inputOne = screen.getByTestId("opt-input-field-item-1");
    // when
    userEvent.click(inputZero);
    userEvent.type(inputZero, "{arrowright}");
    // then
    await waitFor(() => {
      expect(inputOne).toHaveFocus();
    });
  });
  it("should handle arrow left keydown", async () => {
    // given
    render(getComponent());
    const inputZero = screen.getByTestId("opt-input-field-item-0");
    const inputOne = screen.getByTestId("opt-input-field-item-1");
    // when
    userEvent.click(inputZero);
    userEvent.type(inputZero, "{arrowright}");
    userEvent.type(inputOne, "{arrowleft}");
    // then
    await waitFor(() => {
      expect(inputZero).toHaveFocus();
    });
  });
  it("should prevent space keydown", async () => {
    // given
    render(getComponent());
    const inputZero = screen.getByTestId("opt-input-field-item-0");
    // when
    userEvent.click(inputZero);
    userEvent.type(inputZero, "{space}");
    // then
    await waitFor(() => {
      expect(inputZero).toHaveFocus();
    });
  });
  it("should prevent letter input", async () => {
    // given
    render(getComponent());
    const inputZero = screen.getByTestId("opt-input-field-item-0");
    // when
    userEvent.click(inputZero);
    userEvent.type(inputZero, "a");
    // then
    await waitFor(() => {
      expect(inputZero).toHaveValue("");
    });
  });
});
