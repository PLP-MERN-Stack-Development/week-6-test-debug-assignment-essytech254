describe('User Registration Flow', () => {
  it('registers a new user', () => {
    cy.visit('/register');
    cy.get('input[name="email"]').type('user@example.com');
    cy.get('input[name="password"]').type('password123');
    cy.get('button[type="submit"]').click();

    cy.contains('Welcome, user@example.com');
  });
});
