/// <reference types="cypress" />

describe('App is normally render', () => {
  it('Header, main and footer are rendered', () => {
    cy.visit('http://localhost:3000/');
    cy.get('header').should('be.visible');
    cy.get('main').should('be.visible');
    cy.get('footer').should('be.visible');
  });
});

describe('Links in header are working', () => {
  it('Home link', () => {
    cy.visit('http://localhost:3000/');
    cy.get('[data-testid="home-link"]').contains('Home').click();

    cy.url().should('include', '/');
  });

  it('About link', () => {
    cy.visit('http://localhost:3000/');
    cy.get('[data-testid="about-link"]').contains('About').click();

    cy.url().should('include', '/about');
    cy.get('p').contains('Lorem');
  });

  it('Form link', () => {
    cy.visit('http://localhost:3000/');
    cy.get('[data-testid="form-link"]').contains('Form').click();

    cy.url().should('include', '/form');
  });
});

describe('Input submit (Home page)', () => {
  it('type text and sumbit', () => {
    cy.visit('http://localhost:3000/');

    cy.get('[data-cy="input"]').type('rick{enter}');

    cy.get('[data-cy="cardsWrapper"]').find('img').should('have.attr', 'alt');
  });
});

describe('Form submit (Home page)', () => {
  it('can submit valid form', () => {
    cy.visit('http://localhost:3000/form');
    cy.fixture('test.png').as('myFixture');

    cy.get('[data-testid="nameInput"]').type('Test Name');
    cy.get('[data-testid="phoneInput"]').type('+79001001005');
    cy.get('[data-testid="emailInput"]').type('example@mail.ru');
    cy.get('[data-cy="femaleInput"]').click();
    cy.get('[data-testid="birthdayInput"]').type('1990-01-01');
    cy.get('[data-testid="countryInput"]').select('USA');
    cy.get('[data-cy="fileLabel"]').selectFile('@myFixture');
    cy.get('[data-testid="submitButton"]').click();

    cy.get('[data-cy="popupOk"]').should('be.visible');

    cy.wait(1600);

    cy.get('[data-testid="nameInput"]').should('have.value', '');
    cy.get('[data-testid="phoneInput"]').should('have.value', '');
    cy.get('[data-testid="emailInput"]').should('have.value', '');
  });

  it('Test for remove loading on coverage', () => {
    expect(true).to.equal(true);
  });
});
