import React from "react";
import { render, screen } from "@testing-library/react";
import Welcome from "@/components/welcome";

test("renders the layout component", () => {
  render(<Welcome showCarrot={true} />);
  expect(screen.getByText("Welcome to Next.js! 🥕")).toBeInTheDocument();
});
