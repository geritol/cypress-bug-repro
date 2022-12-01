describe('empty spec', () => {
  it('passes', () => {
    cy.visit('http://localhost:8080')
    cy.wait(2000)
    cy.get('#test').should('have.text', 'B')
  })
})