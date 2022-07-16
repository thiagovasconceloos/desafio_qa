/// <reference types="cypress" />



export class Home {
    constructor(){
        
        this.home = 'Via S.A.'

       this.click_cookies= 'Aceitar Cookies'

       
          }
    
 
 

    

    open = () => {   
 
     
    
  
            cy.forceVisit('/', {  headers: { "Accept-Encoding": "gzip, deflate"},force: true})
            
         
         
       
      
          
       
       
    }  


    aceitaCookies = () => {

      cy.on("window:confirm", (str) => {
        return false;
      });
      cy.contains(this.click_cookies).click();
      

    }



   validaHome = () => {


     cy.contains(this.home).should('exist')


   }
    
}


    

