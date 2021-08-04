import React from "react";
import { shallow } from "enzyme";

import Dialog from "./dialog";

describe("Dialog", () => {
  let show = true;
  test("Dialog should renders ok", () => {
    const component = shallow(
      <Dialog
        show={show}
        onToggle={(s) => {
          show = s;
        }}
      />
    );
    expect(component).toMatchSnapshot();
  });
  test("Dialog should hide", () => {
    show = true;
    const component = shallow(
      <Dialog
        show={show}
        onToggle={(s) => {
          show = s;
        }}
      />
    );
    component.find("#dialog-wrapper-overflow").simulate("click");
    expect(show).toBe(false);
  });

  test("Dialog should show", () => {
    show = true;
    shallow(
      <Dialog
        show={show}
        onToggle={(s) => {
          show = s;
        }}
      />
    );
    expect(show).toBe(true);
  });

  test("Dialog should show", () => {
    shallow(
      <Dialog
        show={show}
        dataTestId={"testid"}
        onToggle={(s) => {
          show = s;
        }}
      />
    );
    expect(show).toBe(true);
  });
});
