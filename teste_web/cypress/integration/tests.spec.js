/// <reference types="cypress" />
import { Carrinho } from '../support/pages/carrinho'
import { Home } from '../support/pages/home'
import { Produto } from '../support/pages/produto'


const home = new Home()
const produto = new Produto()
const carrinho = new Carrinho()


describe('Fluxo 1', () => {


  
   it('Quando o usuario abrir o site ', ()=>{
    
    home.open();
    home.aceitaCookies();
 

   } )
    
   it('Então o site deve estar disponivel',()=>{

      home.validaHome()

   })
   
})


describe('Fluxo 2', () => {
   it('Quando o usuario abrir o site  ', ()=>{

      
    home.open();
    home.aceitaCookies();

   } )
    
   it(`E digitar ${produto.produto} na barra de pesquisa`,()=>{

      produto.buscarProduto();

   })
   
 
   it('E clicar em buscar',()=> {


       produto.clickBuscar();
   })


   it('E escolher o produto', ()=>{

     produto.clickProduto();



   })



   it('Entao o botão comprar deve estar disponivel', ()=>{

      carrinho.validaComprar();
 
 
 
    })

})



describe('Fluxo 3', () => {
   it('Quando o usuario abrir o site  ', ()=>{
      cy.once('uncaught:exception', () => false);
      
    home.open();
    home.aceitaCookies();

   } )
    
   it(`E digitar ${produto.produto} na barra de pesquisa`,()=>{

      produto.buscarProduto();

   })
   
 
   it('E clicar em buscar',()=> {


       produto.clickBuscar();
   })


   it('E escolher o produto', ()=>{

     produto.clickProduto();



   })



   it('E clicar em comprar ', ()=>{

      carrinho.clickComprar();
 
 
 
    })

    
   it('E clicar em continuar ', ()=>{

      carrinho.clickContinuar();
 
 
 
    })

    it(`Então  ${produto.produto} deve estar no carrinho`, ()=>{

      produto.validaProduto();
 
 
 
    })

})
