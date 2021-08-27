import React from "react";
import { render, screen } from "@testing-library/react";
import { Loader } from ".";

describe("<Loader />", () => {
  it("Should render show and hide ok", () => {
    const { rerender, unmount } = render(<Loader id={"test-loader"} show={true} showOverlay={true} />);
    expect(screen.getByTestId("test-loader-wrapper")).toHaveClass("show");
    unmount();
    rerender(<Loader id={"test-loader"} show={false} showOverlay={true} />);
    expect(screen.getByTestId("test-loader-wrapper")).not.toHaveClass("show");
  });
});
