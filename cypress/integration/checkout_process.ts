import { LoginPage } from "./pages/login_pages"
import { DashboardPage } from "./pages/dashboard_pages"
import { CheckoutPage } from "./pages/checkout_pages"

let loginPage = new LoginPage()
let dashboardPage = new DashboardPage()
let checkoutPage = new CheckoutPage()
const URL = 'https://www.saucedemo.com/'

it('Test Checkout Process', () => {
  loginPage.login(URL, 'standard_user', 'secret_sauce')
  loginPage.assertLogin()
  dashboardPage.sauceLabsBackpack()
  dashboardPage.addToCart()
  checkoutPage.goToCart()
  checkoutPage.verifyCartPage()
  checkoutPage.clickCheckout()
  checkoutPage.fillFirstName('First')
  checkoutPage.fillLastName('Last')
  checkoutPage.fillPostalCode('2000')
  checkoutPage.clickContinue()
  checkoutPage.verifyCheckoutOverview()
  checkoutPage.clickFinish()
  checkoutPage.verifyOrderConfirmation()
})
