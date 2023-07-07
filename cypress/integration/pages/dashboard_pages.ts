export class DashboardPage{
    link_sauceLabsBackpack = 'Sauce Labs Backpack'
    btn_addToCart = '#add-to-cart-sauce-labs-backpack'
    icon_cart_quantity = '.shopping_cart_badge'

    sauceLabsBackpack(){
        cy.contains(this.link_sauceLabsBackpack).click()
        cy.contains('Sauce Labs Backpack').should('be.visible') 
    }

    addToCart() {
        cy.get(this.btn_addToCart).click()
        cy.get(this.icon_cart_quantity).should('have.text', '1')
    }
}