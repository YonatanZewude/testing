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

  it("should add submit event listener to searchform", () => {
    cy.get("#searchform").submit();
    cy.get("#sort").should("have.class", "invisible");
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

  it("should check ifmovie, movie__title, movie__image and img  exist", () => {
    cy.get("input#searchText").type("ring");
    cy.get("button").contains("Sök").click();
    cy.get(".movie > div").should("exist");
    cy.get(".movie__title").should("exist");
    cy.get(".movie__image img").should("exist");
    cy.get(".movie__image img").should("have.attr", "src");
  });

  it("should show sort button when product founds", () => {
    cy.get("input#searchText").type("ring");
    cy.get("button").contains("Sök").click();
    cy.get("#sort").should("not.have.class", "invisible");
  });

  it("should handle displayNoResult function when movie not found", () => {
    cy.get("input#searchText").type("spider man");
    cy.get("button").contains("Sök").click();
    cy.get("#searchresult").should("contain", "Inga sökresultat att visa");
  });

  // it("should display a movie from api call", () => {
  //   cy.intercept("https://medieinstitutet-wie-products.azurewebsites.net/*", {
  //     Array: [
  //       {
  //         Title: "King Kong",
  //         Poster:
  //           "https://m.media-amazon.com/images/M/MV5BMjYxYmRlZWYtMzAwNC00MDA1LWJjNTItOTBjMzlhNGMzYzk3XkEyXkFqcGdeQXVyMTQxNzMzNDI@._V1_.jpg",
  //       },
  //     ],
  //   });

  //   cy.get("#searchresult").contains("King Kong");
  // });
});
