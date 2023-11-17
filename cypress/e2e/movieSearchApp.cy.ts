import { should } from "chai";
import { contains, get } from "cypress/types/jquery";
import { find } from "cypress/types/lodash";

describe("template spec", () => {
  beforeEach(() => {
    cy.visit("http://localhost:5173/");
  });

  it("should find input with id SearchText and type star", () => {
    cy.get("input#searchText").type("Star");
  });

  it("Should find the button containing the text sök", () => {
    cy.get("button").contains("Sök");
  });

  it("should search movie", () => {
    cy.get("input#searchText").type("Star");
    cy.get("button").contains("Sök").click();
  });

  it("should check if the id searchresult and the class with movie__title exist", () => {
    cy.get("input#searchText").type("RING");
    cy.get("button").contains("Sök").click();
    cy.get("h3").should("exist");
    cy.get("#searchresult").find(".movie__title").should("exist");
  });
});
