describe('smoke test', () => {
  it('renders', () => {
    cy.visit('/');
    cy.contains('Welcome to Next.js!');
  });
});
