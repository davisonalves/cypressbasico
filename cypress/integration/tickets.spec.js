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

    it("select two tickets", () => {
        cy.get("#ticket-quantity").select("2");
    });

    it("select 'vip' ticket type", () => {
        cy.get("#vip").check();
    });

    it("selects 'social media' checkbox", () => {
        cy.get("#social-media").check();
    });

    it("selects 'friend', and 'publication', then uncheck 'friend'", () => {
        cy.get("#friend").check();
        cy.get("#publication").check();
        cy.get("#publication").uncheck();
    });
    it("has 'TICKETBOX' header's heading", () => {
        cy.get("header h1").should("contain", "TICKETBOX");
    });

    it("alerts on invalid email", () => {
        cy.get("#email")
         .as("email")
         .type("davison-email.com");

        cy.get("#email.invalid").should("exist");

        cy.get("@email")
         .clear()
         .type("davison@email.com");
        
         cy.get("#email.invalid").should("not.exist");
    });
});