import React from "react";
import { render } from "@testing-library/react";
import { generateImage } from "jsdom-screenshot";
import Welcome from "@/components/welcome/welcome";

describe("Welcome component", () => {
  it("should render text", () => {
    const { rerender, getByText } = render(<Welcome />);
    expect(getByText("Welcome to Next.js!")).toBeInTheDocument();
    rerender(<Welcome showCarrot={true} />);
    expect(getByText("Welcome to Next.js! 🥕")).toBeInTheDocument();
  });

  it("should match current snapshot", async () => {
    render(<Welcome />);
    expect(await generateImage()).toMatchImageSnapshot();
  });
});
