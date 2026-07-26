// Custom Cypress commands.
//
// createPortfolio hits POST /api/portfolios directly, bypassing the UI form,
// for specs that just need a portfolio to exist (e.g. seeding state before
// testing something else).

declare global {
  namespace Cypress {
    interface Chainable {
      /** Creates a portfolio via the API. */
      createPortfolio(name: string, cashBalance?: number): Chainable<void>;
    }
  }
}

Cypress.Commands.add("createPortfolio", (name: string, cashBalance = 0) => {
  cy.request("POST", "/api/portfolios", { name, cashBalance });
});

export {};
