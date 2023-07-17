import React from "react";
import "@testing-library/jest-dom/extend-expect";
import { render, fireEvent } from "@testing-library/react";
import ButtonWithIcon, { IButtonWithIcon } from "../../atoms/ButtonWithIcon";
import { Search } from "iconoir-react";

describe("components/atoms/ButtonWithIcon", () => {
  test("render ButtonWithIcon", () => {
    const component = render(<ButtonWithIcon iconComponent={<Search />} />);
    expect(component).toBeVisible;
  });

  test("check entered attributes", () => {
    const id = "input-id";
    const className = "test-class";
    const props: IButtonWithIcon = {
      id,
      className,
      iconComponent: <Search />,
    };

    const { container } = render(<ButtonWithIcon {...props} />);
    const button = container.querySelector("button");

    expect(
      button?.getAttribute("class") === className &&
        button?.getAttribute("id") === id
    ).toBeTruthy;
  });

  test("clicking button", async () => {
    const mockHandler = jest.fn();
    const ariaLabel = "btn-with-icon";
    const props: IButtonWithIcon = {
      iconComponent: <Search />,
      "aria-label": ariaLabel,
      onClick: mockHandler,
    };
    const component = render(<ButtonWithIcon {...props} />);
    const button = await component.findByLabelText(ariaLabel);
    fireEvent.click(button);

    expect(mockHandler).toHaveBeenCalledTimes(1);
  });
});
