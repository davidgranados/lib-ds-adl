import React from "react";
import { mount } from "enzyme";

import Button from "./button";

describe("<Button />", () => {
  const text = "button";
  it("should match snapshot", () => {
    // given
    const wrapper = mount<typeof Button>(<Button text={text} variant={"primary"} />);
    // then
    expect(wrapper).toMatchSnapshot();
  });
  it("should render correctly", () => {
    // given
    const wrapper = mount<typeof Button>(<Button text={text} />);
    const button = wrapper.find("button");
    // then
    expect(button.exists()).toBe(true);
    expect(button.prop("children")).toEqual(text);
    expect(button.prop("type")).toEqual("button");
    expect(button.hasClass("primary")).toBe(true);
    expect(button.hasClass("size-md")).toBe(true);
  });
  it("should be secondary", () => {
    // given
    const wrapper = mount<typeof Button>(<Button text={text} variant={"secondary"} />);
    const button = wrapper.find("button");
    // then
    expect(button.hasClass("secondary")).toBe(true);
  });
  it("should be type submit", () => {
    // given
    const wrapper = mount<typeof Button>(<Button text={text} type={"submit"} />);
    const button = wrapper.find("button");
    // then
    expect(button.prop("type")).toEqual("submit");
  });
  it("should be lg size", () => {
    // given
    const wrapper = mount<typeof Button>(<Button text={text} size={"lg"} />);
    const button = wrapper.find("button");
    // then
    expect(button.hasClass("size-lg")).toBe(true);
  });
  it("should be fullwidth", () => {
    // given
    const wrapper = mount<typeof Button>(<Button text={text} fullWidth={true} />);
    const button = wrapper.find("button");
    // then
    expect(button.hasClass("full-width")).toBe(true);
  });
});
