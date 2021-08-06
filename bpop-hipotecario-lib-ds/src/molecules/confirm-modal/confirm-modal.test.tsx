import React from "react";
import { cleanup } from "@testing-library/react";
import { shallow } from "enzyme";

import ConfirmModal from "./confirm-modal";
import { Button } from "../../atoms/button";

afterEach(cleanup);
describe("ConfirmModal", () => {
  let show = false;
  let isMainButtonClicked = false;
  let isSecondaryButtonClicked = false;
  const component = shallow(
    <ConfirmModal
      id={"confirm-modal"}
      show={show}
      title={"Modal title"}
      mainButtonText={"main"}
      secondaryButtonText={"second"}
      onMainButtonClick={() => {
        isMainButtonClicked = true;
      }}
      onSecondaryButtonClick={() => {
        isSecondaryButtonClicked = true;
      }}
      onToggle={(s) => {
        show = s;
      }}
    />
  );
  test("ConfirmModal should renders ok", () => {
    expect(component).toMatchSnapshot();
  });

  test("ConfirmModal should click on main button ok", async () => {
    const expected = true;
    component.find(Button).simulate("click");
    expect(isMainButtonClicked).toBe(expected);
  });

  test("ConfirmModal should click on secondary button ok", () => {
    const expected = true;
    component.find("#confirm-modal-secondary-button").simulate("click");
    expect(isSecondaryButtonClicked).toBe(expected);
  });
});
