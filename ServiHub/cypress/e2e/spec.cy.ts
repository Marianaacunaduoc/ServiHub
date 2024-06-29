describe('My First Test', () => {
  it('Visits the initial project page', () => {
    cy.visit('/')
    cy.contains('ServiHub')
    cy.get('#ion-input-0').type('marianaacuna253@gmail.com')
    cy.get('#ion-input-1').type('mari1234')
  })
})
