import React from "react";
import { mount, shallow } from "enzyme";

import { Modal } from ".";
import { Button } from "../../atoms/button";

describe("<Modal />", () => {
  const component: JSX.Element = <Modal title="title" buttonText="ok" isDisabledButton={false} show={true} />;

  beforeEach(() => {
    jest.clearAllMocks();
  });

  it("Should match snapshot", () => {
    expect(mount(component)).toMatchSnapshot();
  });

  it("should toggle when click in button", () => {
    let show = false;
    const wrapper = shallow(component);
    wrapper.setProps({ show: show, onToggle: (s: boolean) => (show = s) });
    wrapper.find(Button).simulate("click");
    expect(show).toBe(true);
  });

  it("should toggle when click in overflow", () => {
    let show = false;
    const wrapper = shallow(component);
    wrapper.setProps({ show: show, onToggle: (s: boolean) => (show = s) });
    wrapper.find(".overflow").simulate("click");
    expect(show).toBe(true);
  });

  it("should toggle when click in icon close", () => {
    let show = false;
    const wrapper = mount(component);
    wrapper.setProps({ show: show, onToggle: (s: boolean) => (show = s) });
    wrapper.find('[data-testid="modal-icon-close"]').simulate("click");
    expect(show).toBe(true);
  });
});
