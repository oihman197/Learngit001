describe('Validate Header', () => {
    it('Successfully validate content-type', () => {
        cy.request('https://pokeapi.co/api/v2/pokemon/ditto').as('pokemon')
        cy.get('@pokemon').its('headers').its('content-type')
        .should('include', 'application/json; charset=utf-8')
    });

    it('Successfully response body', () => {
        cy.request('https://pokeapi.co/api/v2/pokemon/ditto',).as('pokemon')
        cy.get('@pokemon').its('body').should('include', {name: 'ditto'})
    })

    it('Successfully validate content', () => {
        cy.request('https://pokeapi.co/api/v2/pokemon/bulbasaur').as('bulbasaur')
        cy.get('@bulbasaur').its('body').should('include', {name: 'bulbasaur'})
    })
});