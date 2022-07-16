

context('Obtendo o clima da cidade', () => {
    it(' obter codigo de reposta 200', () => {
        cy.request({
            method: 'GET',
            url: `${Cypress.env('URL')}weather?q=${Cypress.env(
                'LOCAL'
            )}&appid=${Cypress.env('API_KEY')}`,
        }).should(({ status, body }) => {
            const  { name,sys} = body;
            expect(status).to.eq(200)
            expect(name).to.eq('Francisco Morato')
            expect(sys.country).to.eq('BR')
          })
    })
});




context('Cidade não encontrada', () => {
    it(' obter codigo de reposta 404', () => {
        cy.request({
            method: 'GET',
            url: `${Cypress.env('URL')}weather?q=${Cypress.env(
                'LOCALINVALIDO'
            )}&appid=${Cypress.env('API_KEY')}`,
            failOnStatusCode: false,
        }).should(({ status, body }) => {
            const  { message} = body;
            expect(status).to.eq(404)
            expect(message).to.eq('city not found')
           
          })
    })
});


context('Sem localização', () => {
    it('obter codigo de resposta 400', () => {
        cy.request({
            method: 'GET',
            url: `${Cypress.env('URL')}weather?&appid=${Cypress.env('API_KEY')}`,
            failOnStatusCode: false,
        }).should(({ status, body }) => {
            const  { message} = body;
            expect(status).to.eq(400)
            expect(message).to.eq('Nothing to geocode')
           
          })
    })
});





context('Key Invalida', () => {
    it(' obter codigo de reposta 401', () => {
        cy.request({
            method: 'GET',
            url: `${Cypress.env('URL')}weather?q=${Cypress.env(
                'LOCAL'
            )}&appid=00`,
            failOnStatusCode: false,
        }).should(({ status, body }) => {
            const  { message} = body;
            expect(status).to.eq(401)
            expect(message).to.eq('Invalid API key. Please see http://openweathermap.org/faq#error401 for more info.')
           
          })
    })
});



