describe('Login Test', function() {
    it('Check Page Title', function() {
        cy.visit('https://documentportal-dev.kurtosysweb.com/regressionqa/en/gb/login/')
        cy.title().should('include', 'TESTUPPERCASE');
    });

    it('Check Login Form', function() {
        cy.visit('https://documentportal-dev.kurtosysweb.com/regressionqa/en/gb/login/')
        cy.get('[rel="login_form_heading"]').should('contain', 'Login');
    });

    it('Login Successfully', function() {
        cy.visit('https://documentportal-dev.kurtosysweb.com/regressionqa/en/gb/login/')
        cy.get('#username').type('nathan.regressionqa')
        cy.get('#password').type('G@ffl3y3562')
        cy.get('.js-assurance span').should('contain', 'nathan testing regressionq');
    });
});