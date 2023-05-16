describe('Login spec1 test', () => {
    it('passes', () => {
      //visits amazon website
      cy.visit('https://amazon.in');

      //login your account
      cy.get('#nav-link-accountList-nav-line-1').click();
      cy.get('#ap_email').click().type('ujwaldpr@gmail.com');
      cy.get('.a-button-inner > #continue').click();
      cy.get('#ap_password').click().type('Rakshacm@123');
      cy.get('#signInSubmit').click();

      //wait for 2 seconds
      cy.wait(2000);

      //click on cart button
      cy.get('#nav-cart-count-container').click();

      //click to proceed
      cy.get('#sc-buy-box-ptc-button > .a-button-inner > .a-button-input').click();
    })
})