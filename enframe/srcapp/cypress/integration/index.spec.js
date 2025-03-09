describe('index page', () => {
  beforeEach(() => {
    cy.visit('/')
  })

  it('contains title and meta description content', () => {
    cy.title().should('eq', 'ENFRAME_APP_NAME')
    cy.get('head meta[name="description"]').should(
      'have.attr',
      'content',
      'ENFRAME_APP_DESCRIPTION'
    )
  })

  it('displays the application name and description', () => {
    cy.get('h1').contains('ENFRAME_APP_NAME')
    cy.get('p').contains('ENFRAME_APP_DESCRIPTION')
  })
})
