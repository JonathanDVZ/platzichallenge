import React from "react";
import "@testing-library/jest-dom/extend-expect";
import { render, fireEvent } from "@testing-library/react";
import SearchBox from "../../molecules/SearchBox";

describe("components/molecules/SearchBox", () => {
  const onSearch = jest.fn();
  const placeholder = "Search character";

  test("render SearchBox", () => {
    const component = render(<SearchBox onSearch={onSearch} />);
    expect(component).toBeVisible;
  });

  test("SearchBox renders a <Input />", async () => {
    const componet = render(<SearchBox onSearch={onSearch} />);
    const input = await componet.findByPlaceholderText(placeholder);
    expect(input).toBeVisible;
  });

  test("check <Input /> props", async () => {
    const componet = render(<SearchBox onSearch={onSearch} />);
    const input = await componet.findByPlaceholderText(placeholder);

    expect(
      input.getAttribute("placeholder") === placeholder &&
        input.getAttribute("type") === "text" &&
        input.getAttribute("name") === "search" &&
        input.getAttribute("value") === "" &&
        input.getAttribute("class") === "ptz-input ptz-search-box__input"
    ).toBeTruthy;
  });

  test("SearchBox renders a <ButtonWithIcon />", async () => {
    const { container } = render(<SearchBox onSearch={onSearch} />);
    const btn = container.querySelector(".ptz-search-box__btn");
    expect(btn).toBeVisible;
  });

  test("check <ButtonWithIcon /> props", async () => {
    const { container } = render(<SearchBox onSearch={onSearch} />);
    const btn = container.querySelector(".ptz-search-box__btn");

    expect(
      btn?.getAttribute("arial-label") === "search" &&
        btn?.getAttribute("type") === "submit" &&
        btn?.getAttribute("class") === "ptz-search-box__btn"
    ).toBeTruthy;
  });

  test("test submit", () => {
    const { getByTestId } = render(<SearchBox onSearch={onSearch} />);
    fireEvent.submit(getByTestId("form"));
    expect(onSearch).toHaveBeenCalled();
  });
});
