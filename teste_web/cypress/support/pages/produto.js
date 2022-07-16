
export class Produto {
    constructor(){
      this.buscarproduto = '#strBusca'
        this.click_buscar = '#btnOK'
        this.click_produto = '.ProductsGrid__ProductsGridWrapper-sc-yqpqna-0'
        this.valida_produto = 'div.box__Box-oqpq9y-0.flex__Flex-omp2o9-0.sc-fXEqDS'
        this.produto = 'Iphone'
    }

   buscarProduto = () => cy.get(this.buscarproduto).type(this.produto,{force: true});
    clickBuscar = () => cy.get(this.click_buscar).click({force: true});
    clickProduto = () => cy.get(this.click_produto).children().first().click({force: true});
    validaProduto = () => cy.get(this.valida_produto).invoke('text').should('include', this.produto,{force: true});
    
}