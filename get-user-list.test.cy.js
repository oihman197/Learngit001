describe ('Get User List', () => {
    it('Verify the list users will displayyed', () => {
       cy.request({
        method: 'GET',
        url: 'https://reqres.in/'
       }).as('users')
       cy.get('@users').its('status').should('equal', 200)
    });
});