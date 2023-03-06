describe('Automation API with Pokeapi', () => {
    it('Successfully validate status code ', () => {
        cy.request('https://pokeapi.co/api/v2/pokemon/ditto').as('ditto')
        cy.get('@ditto').its('status').should('equal', 200)
    });

    it('Successfully validate status code with params', () => {
        cy.request({
            methode: 'GET',
            url:'https://reqres.in/api/users?delay=3'
        }).as('users')
        cy.get('@users').its('status').should('equal', 200)
    });
})