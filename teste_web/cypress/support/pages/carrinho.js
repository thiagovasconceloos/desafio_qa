
export class Carrinho {
    constructor(){
        this.click_comprar = 'Comprar'
        this.click_continuar = 'Continuar'
        
        
    }

 
    clickComprar = () => cy.get(this.click_comprar).click({force:true})
    clickContinuar = () => cy.get(click_continuar).click({force: true})
    validaComprar = () => cy.contains(this.click_comprar).should('exist')
}