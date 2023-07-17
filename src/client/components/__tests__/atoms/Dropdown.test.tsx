import React from "react";
import "@testing-library/jest-dom/extend-expect";
import { render, fireEvent } from "@testing-library/react";
import Dropdown, { Option } from "../../atoms/Dropdown";

describe("components/atoms/Dropdown", () => {
  test("render Dropdown", () => {
    const component = render(<Dropdown />);
    expect(component).toBeVisible;
  });

  test("check when component doesn't receive labelTitle", () => {
    const { container } = render(<Dropdown />);
    const dropdown = container.querySelector("div.ptz-dropdown");

    expect(dropdown?.querySelector("label")).toBeFalsy;
  });

  test("check when component receives labelTitle", () => {
    const labelTitle = "Title";

    const { container } = render(<Dropdown labelTitle={labelTitle} />);
    const dropdown = container.querySelector("div.ptz-dropdown");

    expect(dropdown?.querySelector("label")).toBeTruthy;
  });

  test("check when component doesn't receive options", () => {
    const { container } = render(<Dropdown />);
    const dropdown = container.querySelector("div.ptz-dropdown");

    expect(dropdown?.querySelectorAll("option")).toHaveLength(0);
  });

  test("check when component receives options", () => {
    const options: Option[] = [
      {
        value: "value 1",
        text: "text 1",
      },
      {
        value: "value 2",
        text: "text 2",
      },
    ];

    const { container } = render(<Dropdown options={options} />);
    const dropdown = container.querySelector("div.ptz-dropdown");

    expect(dropdown?.querySelectorAll("option")).toHaveLength(2);
  });

  test("check when the user change the option", () => {
    const firstValue = "value 1";
    const secondValue = "value 2";
    const options: Option[] = [
      {
        value: firstValue,
        text: "text 1",
      },
      {
        value: secondValue,
        text: "text 2",
      },
    ];

    const { container } = render(<Dropdown options={options} />);
    const dropdown = container.querySelector("div.ptz-dropdown");
    const selectElement = dropdown?.querySelector("select");
    const optionsElements = dropdown?.querySelectorAll("option");

    // Click second option
    if (selectElement) {
      fireEvent.change(selectElement, { target: { value: secondValue } });
    }

    if (optionsElements) {
      expect(optionsElements[0].selected).toBeFalsy();
      expect(optionsElements[1].selected).toBeTruthy();
    }

    // Click first option
    if (selectElement) {
      fireEvent.change(selectElement, { target: { value: firstValue } });
    }

    if (optionsElements) {
      expect(optionsElements[0].selected).toBeTruthy();
      expect(optionsElements[1].selected).toBeFalsy();
    }
  });
});
