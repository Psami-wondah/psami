describe("template spec", () => {
  it("passes", () => {
    cy.visit("/");

    cy.contains("About me");
    cy.contains("Psami");
  });
});
