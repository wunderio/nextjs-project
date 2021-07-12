import {
  smallBreakpoint,
  mediumBreakpoint,
  largeBreakpoint,
} from "@/utils/constants";

describe("The Home Page", () => {
  it("successfully loads homepage", () => {
    cy.visit("/");
  });
});
