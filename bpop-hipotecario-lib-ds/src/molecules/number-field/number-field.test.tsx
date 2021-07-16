import React from "react";
import { mount, ReactWrapper } from "enzyme";

import { InputBaseSize, InputFieldType } from "../../types";

import NumberField from "./number-field";

describe("<NumberField />", () => {
  let wrapper: ReactWrapper<typeof NumberField>;
  const type: InputFieldType = "tel";
  const size: InputBaseSize = "md";
  const caption = "test caption";
  const props = {
    id: "test-number-field-old-id",
    label: "test number field label",
    type: type,
    maxLength: 10,
    placeholder: "test placeholder",
    size: size,
    onFocus: jest.fn(),
    onBlur: jest.fn(),
    onChange: jest.fn(),
    onInput: jest.fn(),
  };
  describe("with initial value and caption", () => {
    const initialValue = 123;
    beforeEach(() => {
      jest.clearAllMocks();
      // given
      wrapper = mount<typeof NumberField>(<NumberField {...props} value={initialValue} caption={caption} />);
    });
    it("should match snapshot", () => {
      // then
      expect(wrapper).toMatchSnapshot();
    });
    describe("<label />", () => {
      it("should render correctly", () => {
        // when
        const labelElement = wrapper.find("label");
        // then
        expect(labelElement.exists()).toBe(true);
        expect(labelElement.prop("htmlFor")).toEqual(props.id);
      });
    });
    describe("<span /> inside <label />", () => {
      it("should render correctly", () => {
        // when
        const spanElement = wrapper.find('[data-testid="span-inside-label"]');
        // then
        expect(spanElement.exists()).toBe(true);
        expect(spanElement.prop("children")).toEqual(props.label);
      });
    });
    describe("<input />", () => {
      it("should render correctly", () => {
        // when
        const inputElement = wrapper.find("input");
        // then
        expect(inputElement.exists()).toBe(true);
        expect(inputElement.prop("id")).toEqual(props.id);
        expect(inputElement.prop("value")).toEqual(initialValue);
        expect(inputElement.prop("type")).toEqual("tel");
        expect(inputElement.prop("placeholder")).toEqual(props.placeholder);
        expect(inputElement.hasClass(`size-${props.size}`)).toBe(true);
        expect(inputElement.hasClass(`filled`)).toBe(true);
      });
    });
    describe("<span />", () => {
      it("should render correctly", () => {
        // when
        const spanElement = wrapper.find('[data-testid="field-caption"]');
        // then
        expect(spanElement.exists()).toBe(true);
        expect(spanElement.prop("children")).toEqual(caption);
      });
    });
  });
  describe("without initial value or caption", () => {
    beforeEach(() => {
      jest.clearAllMocks();
      // given
      wrapper = mount<typeof NumberField>(<NumberField {...props} />);
    });
    it("should match snapshot", () => {
      // then
      expect(wrapper).toMatchSnapshot();
    });
    describe("<input />", () => {
      it("should render correctly", () => {
        // when
        const inputElement = wrapper.find("input");
        // then
        expect(inputElement.exists()).toBe(true);
        expect(inputElement.prop("value")).toEqual("");
      });
    });
    describe("<span />", () => {
      it("shouldn't render", () => {
        // when
        const spanElement = wrapper.find('[data-testid="field-caption"]');
        // then
        expect(spanElement.exists()).toBe(false);
      });
    });
  });
  describe("with error", () => {
    beforeEach(() => {
      jest.clearAllMocks();
      // given
      wrapper = mount<typeof NumberField>(<NumberField {...props} hasError={true} caption={caption} />);
    });
    it("should match snapshot", () => {
      expect(wrapper).toMatchSnapshot();
    });
    describe("<input />", () => {
      it("should have error class", () => {
        // when
        const inputElement = wrapper.find("input");
        // then
        expect(inputElement.exists()).toBe(true);
        expect(inputElement.hasClass("error")).toBe(true);
      });
    });
    describe("<span />", () => {
      it("should render correctly", () => {
        // when
        const spanElement = wrapper.find('[data-testid="field-caption"]');
        // then
        expect(spanElement.exists()).toBe(true);
        expect(spanElement.prop("status")).toEqual("error");
        expect(spanElement.prop("children")).toEqual(caption);
      });
    });
  });
  describe("change event", () => {
    beforeEach(() => {
      jest.clearAllMocks();
      // given
      wrapper = mount<typeof NumberField>(<NumberField {...props} />);
    });
    it("should handle change", () => {
      // when
      wrapper.find("input").simulate("change");
      // then
      expect(props.onChange).toHaveBeenCalled();
    });
    it("should accept numbers", () => {
      // given
      const mockChangeEvent = { target: { value: 456 } };
      // when
      wrapper.find("input").simulate("change", mockChangeEvent);
      // then
      expect(wrapper.find("input").prop("value")).toEqual(mockChangeEvent.target.value);
    });
    it("shouldn't accept letters or special characters", () => {
      // given
      const mockChangeEvent = { target: { value: "test" } };
      // when
      wrapper.find("input").simulate("change", mockChangeEvent);
      // then
      expect(wrapper.find("input").prop("value")).toEqual("");
    });
  });
});
