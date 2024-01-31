
Cypress.on('uncaught:exception', (err, runnable) => {
  return false;
});

describe('template spec', () => {
  it('Visit Login Page and click button', () => {
    cy.visit('http://localhost:3000/')
    cy.get('.login-button').trigger('click')
    cy.get('.login-button').click()
    cy.url().should('include', '/home')
  })
})