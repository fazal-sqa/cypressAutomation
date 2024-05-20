import * as appUrls from "../fixtures/data/appUrls.json";
import * as jobApplicationData from "../fixtures/data/jobApplySampleData.json";
import pages from "../support/page_objects/page.object.index";

describe("Validate that user shouldn't be allowed to enter blank first name,last name and email ", () => {

  it("Navigate to Iodine software, click on the career link and then click on Senior SDET job role", () => {
    cy.visit(appUrls.appurl);
    cy.contains(jobApplicationData.dataSet.companyOptionToSelect).should(
      "not.be.visible"
    );
    cy.wait(5000);
    
    pages.iodinePO.link_company().realHover("mouse");
    cy.contains(jobApplicationData.dataSet.companyOptionToSelect)
      .should("be.visible")
      .invoke("removeAttr", "target")
      .click({ force: true });
      cy.wait(25000);
    cy.url().should("include", appUrls.careerURL);
    Cypress.on('uncaught:exception', (err, runnable) => {
      // Return false to prevent Cypress from failing the test
      return false;
    });
    pages.iodinePO
      .link_opening("Senior SDET")
      .should("be.visible")
      .click();
    cy.wait(5000);
    pages.iodinePO.button_apply().should("be.visible").click();
    cy.wait(1000);
  });

  it("Enter first name, last name and incorrect email then validation message should display for incorrect email", () => {
      
    cy.wait(4000);
    pages.iodinePO.inputBox_firstName().clear();
    pages.iodinePO.inputBox_firstName().type(jobApplicationData.dataSet.firstName);

    cy.wait(2000);
    pages.iodinePO.inputBox_lastName().clear();
    pages.iodinePO.inputBox_lastName().type(jobApplicationData.dataSet.lastName);
    
    cy.wait(2000);
    pages.iodinePO.inputBox_email().clear();
    pages.iodinePO.inputBox_email().type(jobApplicationData.dataSet.email);
   
    pages.iodinePO.button_finalSubmit().click();

    pages.iodinePO.inputBox_email().should(($input) => {
      expect($input[0].validationMessage).to.equal("Please include an '@' in the email address. 'fazalrehmangmailcom' is missing an '@'.");
    });
  });

});