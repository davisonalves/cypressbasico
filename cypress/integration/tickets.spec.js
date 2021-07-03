describe('Tickets', () => {
    beforeEach(() => {
        cy.visit("https://ticket-box.s3.eu-central-1.amazonaws.com/index.html");
    });
    it("fills all the text input fields", () => {
        const firstName = "Davison";
        const lastName = "Silva";
        cy.get("#first-name").type(firstName);
        cy.get("#last-name").type(lastName);
        cy.get("#email").type("davison@email.com");
        cy.get("#requests").type("Vegetariano");
        cy.get("#signature").type(`${firstName} ${lastName}`);
    });
    it("has 'TICKETBOX' header's heading", () => {
        
    });
});