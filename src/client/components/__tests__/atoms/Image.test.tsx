import React from "react";
import "@testing-library/jest-dom/extend-expect";
import { render } from "@testing-library/react";
import Image, { IImage } from "../../atoms/Image";

describe("components/atoms/Image", () => {
  test("render Image", () => {
    const component = render(<Image />);
    expect(component).toBeVisible;
  });

  test("check entered attributes", () => {
    const id = "image-id";
    const src =
      "https://res.cloudinary.com/dglqojivj/image/upload/v1682559694/simpsons/200px-Jasper_Beardsley_a0zhga.png";
    const props: IImage = {
      id,
      src,
    };

    const { container } = render(<Image {...props} />);
    const input = container.querySelector("image");

    expect(
      input?.getAttribute("id") === id && input?.getAttribute("src") === src
    ).toBeTruthy;
  });
});
