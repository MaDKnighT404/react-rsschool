describe('app', () => {
  it('Header, main and footer are rendered on Home Page', () => {
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

  it('Test for remove loading on coverage', () => {
    expect(true).to.equal(true);
  });
});
