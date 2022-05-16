/* eslint-disable no-undef */
/// <reference types="cypress" />

describe("Open app", () => {
  beforeEach(() => {
    cy.visit("http://localhost:3000/");
  });

  it("add items to cart", () => {
    for (let index = 1; index < 6; index++) {
      cy.get(`#add-to-cart-${index}`).click();
    }
  });

  it("remove items to cart", () => {
    for (let index = 1; index < 6; index++) {
      cy.get(`#add-to-cart-${index}`).click();
    }

    cy.get("#cart").click();

    for (let index = 1; index < 6; index++) {
      cy.get(`#remove-from-cart-${index}`).click();
    }
  });
});
