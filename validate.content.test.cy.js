describe('Validate Content', () => {
    it('Sucsessfully validate content', () => {
     var ability = {
        "name": "limber",
        "url": "https://pokeapi.co/api/v2/ability/7/"
     }   
     cy.request('GET', 'https://pokeapi.co/api/v2/ability/7', ability).then((response) => {
        failOnStatusCode: false
        expect(response.body.name).to.eq(ability.name)
     })
    })
})