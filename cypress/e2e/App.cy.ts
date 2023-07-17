describe("test home screen", () => {
  let totalResult: JQuery<HTMLElement>;

  beforeEach(() => {
    cy.visit("http://localhost:3000");
  });

  it("characters items by default", () => {
    cy.get(".ptz-characters-section__result .ptz-character-item").should(
      "have.length",
      0
    );
  });
  it("show character lists", () => {
    cy.intercept("get", "/api/characters").as("getCharacters");
    cy.wait("@getCharacters");
    cy.get(".ptz-characters-section__result .ptz-character-item").should(
      "have.length.greaterThan",
      0
    );
  });
  it("make a search", () => {
    cy.intercept("get", "/api/characters").as("getCharacters");
    cy.wait("@getCharacters");
    cy.get(".ptz-characters-section__result .ptz-character-item")
      .its("length")
      .as("totalResultAux");

    cy.get("@totalResultAux").then((totalResultAux) => {
      totalResult = totalResultAux;
    });

    cy.get(".ptz-search-box .ptz-search-box__input").type("Homero");

    cy.get(".ptz-search-box form").submit();
    cy.get(".ptz-characters-section__result .ptz-character-item").should(
      "not.equal",
      totalResult
    );
  });

  it("make an empty search", () => {
    cy.intercept("get", "/api/characters").as("getCharacters");
    cy.wait("@getCharacters");
    cy.get(".ptz-search-box form").submit();
    cy.get(".ptz-characters-section__result .ptz-character-item")
      .its("length")
      .as("searchResult");

    cy.get("@searchResult").then((searchResult) => {
      expect(searchResult).to.eq(totalResult);
    });
  });

  it("select favorite characters", () => {
    cy.intercept("get", "/api/characters").as("getCharacters");
    cy.wait("@getCharacters");

    // Select two characters as favorites
    cy.get(
      ".ptz-characters-section__result .ptz-character-item:nth-child(1) .ptz-favorite-button"
    ).click();
    cy.get(
      ".ptz-characters-section__result .ptz-character-item:nth-child(2) .ptz-favorite-button"
    ).click();
    cy.get(".ptz-navbar__links-container").click();

    // Go to favorite page and verify
    cy.get(".ptz-navbar #favorite-link").click();

    cy.get(".ptz-characters-section__result .ptz-character-item").should(
      "have.length",
      2
    );

    // Go to home page
    cy.get(".ptz-navbar #home-link").click();

    // Select two more characters as favorites
    cy.get(
      ".ptz-characters-section__result .ptz-character-item:nth-child(6) .ptz-favorite-button"
    ).click();
    cy.get(
      ".ptz-characters-section__result .ptz-character-item:nth-child(7) .ptz-favorite-button"
    ).click();

    // Go to favorite page and verify
    cy.get(".ptz-navbar #favorite-link").click();

    cy.get(".ptz-characters-section__result .ptz-character-item").should(
      "have.length",
      4
    );
  });
});
