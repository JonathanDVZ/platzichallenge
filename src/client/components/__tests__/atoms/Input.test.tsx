import React from "react";
import "@testing-library/jest-dom/extend-expect";
import { render, fireEvent } from "@testing-library/react";
import Input, { IInput } from "../../atoms/Input";

describe("components/atoms/Input", () => {
  test("render Input", () => {
    const component = render(<Input />);
    expect(component).toBeVisible;
  });

  test("check entered attributes", () => {
    const id = "input-id";
    const className = "test-class";
    const placeholder = "placeholder test";
    const props: IInput = {
      id,
      type: "text",
      className,
      placeholder,
    };

    const { container } = render(<Input {...props} />);
    const input = container.querySelector("input");

    expect(
      input?.getAttribute("class") === `ptz-input ${className}` &&
        input?.getAttribute("id") === id &&
        input?.getAttribute("placeholder") === placeholder
    ).toBeTruthy;
  });

  test("clicking input", async () => {
    const placeholder = "placeholder test";
    const mockHandler = jest.fn();
    const props: IInput = {
      placeholder,
      onClick: mockHandler,
    };

    const componet = render(<Input {...props} />);
    const input = await componet.findByPlaceholderText(placeholder);
    fireEvent.click(input);

    expect(mockHandler).toHaveBeenCalledTimes(1);
  });
});
