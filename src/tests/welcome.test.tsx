import React from "react";
import { render } from "@testing-library/react";
import { generateImage } from "jsdom-screenshot";
import Welcome from "@/components/welcome";

test("should render text", () => {
  const { rerender, getByText } = render(<Welcome />);
  expect(getByText("Welcome to Next.js!")).toBeInTheDocument();
  rerender(<Welcome showCarrot={true} />);
  expect(getByText("Welcome to Next.js! 🥕")).toBeInTheDocument();
});

test("should match image snapshot", async () => {
  render(<Welcome />);
  expect(await generateImage()).toMatchImageSnapshot();
});
