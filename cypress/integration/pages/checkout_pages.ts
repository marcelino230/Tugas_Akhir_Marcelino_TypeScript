export class CheckoutPage {
    cart_icon = '.shopping_cart_link'
    cart_quantity = '.cart_quantity'
    product_name = '.inventory_item_name'
    product_description = '.inventory_item_desc'
    product_price = '.inventory_item_price'
    btn_checkout = '.checkout_button'
    input_firstName = '#first-name'
    input_lastName = '#last-name'
    input_postalCode = '#postal-code'
    btn_continue = '#continue'
    checkout_title = '.title'
    btn_finish = '#finish'
    complete_header = '.complete-header'
  
    goToCart() {
      cy.get(this.cart_icon).click()
    }
  
    verifyCartPage() {
      cy.contains('Your Cart').should('be.visible')
      cy.get(this.cart_quantity).should('exist')
      cy.get(this.product_name).should('exist')
      cy.get(this.product_description).should('exist')
      cy.get(this.product_price).should('exist')
    }
  
    clickCheckout() {
      cy.get(this.btn_checkout).click()
    }
  
    fillFirstName(firstName: string) {
      cy.get(this.input_firstName).type(firstName)
    }
  
    fillLastName(lastName: string) {
      cy.get(this.input_lastName).type(lastName)
    }
  
    fillPostalCode(postalCode: string) {
      cy.get(this.input_postalCode).type(postalCode)
    }
  
    clickContinue() {
      cy.get(this.btn_continue).click()
    }
  
    verifyCheckoutOverview() {
      cy.get(this.checkout_title).should('have.text', 'Checkout: Overview')
      cy.get(this.cart_quantity).should('exist')
      cy.get(this.product_name).should('exist')
      cy.get(this.product_description).should('exist')
      cy.get(this.product_price).should('exist')
      cy.contains('Payment Information').should('be.visible').and('have.class', 'summary_info_label')
      cy.contains('Shipping Information').should('be.visible').and('have.class', 'summary_info_label')
      cy.contains('Price Total').should('be.visible').and('have.class', 'summary_info_label')
    }
  
    clickFinish() {
      cy.get(this.btn_finish).click()
    }
  
    verifyOrderConfirmation() {
      cy.get(this.complete_header).should('have.text', 'Thank you for your order!')
    }
  }
  