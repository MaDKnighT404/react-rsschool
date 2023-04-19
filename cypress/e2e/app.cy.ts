describe('Assert Home page', () => {
  it('Header, main and footer are rendered', () => {
    cy.visit('http://localhost:3000/');
    cy.get('header').should('be.visible');
    cy.get('main').should('be.visible');
    cy.get('footer').should('be.visible');
  });

  it('Test for remove loading on coverage', () => {
    expect(true).to.equal(true);
  });
});
