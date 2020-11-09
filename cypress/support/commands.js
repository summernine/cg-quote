Cypress.Commands.add('clickGetQuoteNavBarButton', () => {
  cy.contains('a', 'Get A Quote').click()
});

Cypress.Commands.add('clickInsuranceDropdown', () => {
  cy.get('#select-insurance-line').click()
})

Cypress.Commands.add('clickGetQuoteButton', () => {
  cy.contains('button.btn-primary', 'Get A Quote').click()
})

Cypress.Commands.add('selectRandomInsurance', () => {
  const randomThingsToCover = faker.random.arrayElement([
    '#appliances-insurance',
    //'#electronics-insurance', # error getting quote
    '#furniture-insurance',
    '#sunglasses-insurance',
    '#outdoors-insurance',
    '#sports-and-fitness-insurance'
  ])
  cy.get(randomThingsToCover).click()
});

Cypress.Commands.add('selectRandomInsuranceFromDropdown', () => {
  cy.clickInsuranceDropdown()
  const randomThingsToCover = faker.random.arrayElement([
    '[id*=option-0]',
    '[id*=option-1]',
    '[id*=option-2]',
    '[id*=option-3]',
    '[id*=option-4]',
    '[id*=option-5]',
  ])
  cy.get(randomThingsToCover).click()
});

Cypress.Commands.add('selectApplicancesInsurance', () => {
  cy.get('#appliances-insurance').click()
});

Cypress.Commands.add('selectElectronicsInsurance', () => {
  cy.get('#electronics-insurance').click()
});

Cypress.Commands.add('selectFurnituresInsurance', () => {
  cy.get('#furniture-insurance').click()
});

Cypress.Commands.add('selectEyewearInsurance', () => {
  cy.get('#sunglasses-insurance').click()
});

Cypress.Commands.add('selectToolsInsurance', () => {
  cy.get('#outdoors-insurance').click()
});

Cypress.Commands.add('selectSportsInsurance', () => {
  cy.get('#sports-and-fitness-insurance').click()
});

Cypress.Commands.add('clickNextButton', () => {
  cy.contains('button', 'Next').click()
});

Cypress.Commands.add('inputFakeAddress', () => {
  const fake = faker.random.arrayElement([
    'Moor Street, Fitzroy VIC, Australia',
    'York Street, Sydney',
    'George Street, Sydney',
    'Trinity Street, Newport QLD, Australia',
    'Pyrmont Street'
  ])
  cy.get('#geosuggest__input').type(fake)
  cy.get('.geosuggest__suggests').first().click()
});

Cypress.Commands.add('inputBrand', () => {
  const fake = faker.random.arrayElement([
    'Apple',
    'Jeep',
    'No-brand',
    'Unknown'
  ])
  cy.get('[name="brand"]').type(fake)
});

Cypress.Commands.add('inputModel', () => {
  const fake = faker.random.number({ min: 5, max: 1000 });
  cy.get('input').type(fake)
});

Cypress.Commands.add('inputAmount', () => {
  const fake = faker.random.number({ min: 1000, max: 5000 });
  cy.get('[name="retail_value"]').type(fake)
});

Cypress.Commands.add('inputDate', () => {
  cy.get('input[class*=DateInput]').click().then(() => {
    cy.get('.CalendarDay__firstDayOfWeek').first().click({ force: true })
  })
});

Cypress.Commands.add('selectConditionOfPurchase', () => {
  cy.get('[class*=container][id]').click().within(() => {
    const condition = faker.random.arrayElement([
      '[id*=option-0]',
      '[id*=option-1]'
    ])
    cy.get(condition).click()
  })
  cy.get('.btn-primary').then(btn => {
    btn.text().includes('Get quote')
      ? cy.clickFinalGetQuote()
      : cy.clickNextButton().then(() => {
        cy.inputDate()
        cy.clickFinalGetQuote()
      })
  })
});

Cypress.Commands.add('clickFinalGetQuote', () => {
  cy.contains('button', 'Get quote').click()
})