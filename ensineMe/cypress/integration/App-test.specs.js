import React from "react";

describe("complete e to e test", () => {
  it("teste pagina auth", () => {
    cy.visit("/");

    cy.get("#email")
      .type("curadoria@estacio.br")
      .should("have.value", "curadoria@estacio.br");

    cy.get("#password")
      .type("curadoria@estacio.br")
      .should("have.value", "curadoria@estacio.br");

    cy.contains("Continuar").click();

    cy.location('pathname').should('eq', '/teste')
  });
  it("teste pagina teste", () => {
    cy.get("#info").should("have.text", "0");
    // cy.wait(2000);
    cy.contains("Adicionar").click();
    cy.get("#info").should("have.text", "1");
    // cy.wait(2000);
    cy.contains("Remover").click();
    cy.get("#info").should("have.text", "0");
    // cy.wait(2000);
    cy.get(".button-container button:last").click();
    // cy.intercept('GET','/api/curadoria/em_arvore', {
    //   statusCode: 200,
    // }).as('curadoria')

    // cy.wait('@curadoria')
    cy.wait(2000)
    cy.window().then(win => {
      cy.get("#curadoria p:first")
      .should("have.text", win.store.getState().curadoria.data[0].nome)

    })
    // cy.request('/teste/i')
  });

  it("teste pagina cicero", () => {
    cy.contains("Cicero").click();
    cy.location('pathname').should('eq', '/cicero')
    cy.contains("Abrir Modal").click()
    cy.get(".close").click();
  });

  it("teste pagina clientes", () => {
    cy.contains("Clientes").click();
    cy.location('pathname').should('eq', '/clientes')
    cy.wait(2000)
    cy.contains('Logout').click()

    cy.location('pathname').should('eq', '/')
  });
});
