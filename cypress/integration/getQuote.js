describe('Get quote', () => {

  beforeEach(() => {
    cy.visit('/', { failOnStatusCode: false })
  })

  it('Check Get quote for random product category using nav bar', () => {
    // Click Get a quote button
    cy.clickGetQuoteNavBarButton()
    // Select random things to insure and click next button
    cy.selectRandomInsurance().then(() => {
      cy.clickNextButton()
    })
    // Input fake address and click next button
    cy.inputFakeAddress().then(() => {
      cy.clickNextButton()
    })
    // Input brand and click next button
    cy.inputBrand().then(() => {
      cy.clickNextButton()
    })
    // Input model and click next button
    cy.inputModel().then(() => {
      cy.clickNextButton()
    })
    // Input amount and click next button
    cy.inputAmount().then(() => {
      cy.clickNextButton()
    })
    // Select date and click Next button or Get quote button
    cy.inputDate().then(() => {
      cy.clickNextButton()
    })
    // Select condition of item
    cy.selectConditionOfPurchase()
    // Assert Final quote
    cy.get('[data-analytics="quoteViewPolicyWording"]').should('be.visible')
    cy.get('.card h4').should('contain', 'A$')
    cy.get('.card .row').last().then(content => {
      const quote = content.text().includes('Quote number')
      expect(quote).to.be.true
    })
    cy.get('.card dd').first().should('not.be.empty')
    cy.get('a.btn-primary').should('include.text', 'Proceed to payment')
  })

  it('Check Get quote for random product category using dropdown', () => {
    // Select category from dropdown
    cy.selectRandomInsuranceFromDropdown()
    // Click Get Quote button
    cy.clickGetQuoteButton()
    // Click Next button
    cy.clickNextButton()
    // Input fake address and click next button
    cy.inputFakeAddress().then(() => {
      cy.clickNextButton()
    })
    // Input brand and click next button
    cy.inputBrand().then(() => {
      cy.clickNextButton()
    })
    // Input model and click next button
    cy.inputModel().then(() => {
      cy.clickNextButton()
    })
    // Input amount and click next button
    cy.inputAmount().then(() => {
      cy.clickNextButton()
    })
    // Select date and click Next button or Get quote button
    cy.inputDate().then(() => {
      cy.clickNextButton()
    })
    // Select condition of item
    cy.selectConditionOfPurchase()
    // Assert Final quote
    cy.get('[data-analytics="quoteViewPolicyWording"]').should('be.visible')
    cy.get('.card h4').should('contain', 'A$')
    cy.get('.card .row').last().then(content => {
      const quote = content.text().includes('Quote number')
      expect(quote).to.be.true
    })
    cy.get('.card dd').first().should('not.be.empty')
    cy.get('a.btn-primary').should('include.text', 'Proceed to payment')
  })
})
