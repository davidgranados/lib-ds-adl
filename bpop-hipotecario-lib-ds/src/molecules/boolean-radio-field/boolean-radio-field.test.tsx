import React from "react";
import { mount, ReactWrapper } from "enzyme";

import { BooleanRadioFieldProps } from "../../types";

import BooleanRadioField from "./boolean-radio-field";

describe("<BooleanRadioField />", () => {
  let wrapper: ReactWrapper<typeof BooleanRadioField>;
  const props: BooleanRadioFieldProps = {
    id: "text-field-base-story",
    withTooltip: true,
    name: "international-payments",
    initialValue: false,
    labelText: "¿Realiza operaciones internacionales?",
    tooltipTextBody:
      "Son los movimientos financieros que realizas en otros países a través de cuentas en el exterior a tu nombre. No son compras por internet, suscripciones a servicios o remesas/giros.",
    onChange: (event) => console.log(event),
  };

  beforeEach(() => {
    jest.clearAllMocks();
    // given
    wrapper = mount<typeof BooleanRadioField>(<BooleanRadioField {...props} />);
  });
  it("should match snapshot", () => {
    expect(wrapper).toMatchSnapshot();
  });
});
