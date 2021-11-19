import { breakpointList } from "../../tests/test-utils/constants";

describe("Home page", () => {
  it("should successfully load", () => {
    cy.visit("/");
  });

  breakpointList.forEach((width) => {
    it(`should match current snapshot ('${width}px' viewport width)`, () => {
      cy.viewport(width, 1080);
      cy.visit(`/`);
      cy.matchImageSnapshot();
    });
  });
});
