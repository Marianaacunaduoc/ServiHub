describe('My First Test', () => {
  it('Visits the initial project page', () => {
    cy.clearAllCookies()
    cy.clearAllLocalStorage()
    cy.clearAllSessionStorage()
    cy.visit('/')
    cy.contains('ServiHub')
    cy.get('#ion-input-0').type('marianaacuna253@gmail.com')
    cy.get('#ion-input-1').type('mari1234')
  })
})

describe('Valid email input test', () => {
  it('Visits the initial project page', () => {
    cy.visit('/')
    cy.contains('ServiHub')
    cy.get('#ion-input-0').type('marianaacuna253')
    cy.get('#ion-input-1').type('123')
    cy.contains("Ingrese un Email válido.")
    
  })
})
