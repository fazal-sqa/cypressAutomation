export class iodineSoftware {

    link_company() {
        return cy.get('#menu-item-4050 > [href="#"]');
      }
    
      link_opening(JobProfile) {
        return cy.iframe("#gnewtonIframe").find('a[ns-qa="' + JobProfile + '"]');
      }
     
      button_apply() {
        return cy
          .iframe("#gnewtonIframe")
          .find("#gnewtonJobDescriptionBtn > div.gnewtonBlueBtn.gnewtonApplyBtn");
      }

      inputBox_firstName() {
        return cy.iframe("#gnewtonIframe").find("#firstName");
      }
      
      inputBox_lastName() {
        return cy.iframe("#gnewtonIframe").find("#lastName");
      }

      inputBox_email() {
        return cy.iframe("#gnewtonIframe").find("#email");
      }

      form_block() {
        return cy.iframe("#gnewtonIframe").find("#gnewtonForm");
      }

      button_finalSubmit() {
        return cy.iframe("#gnewtonIframe").find("#gnewotn_input_55");
      }
    
      validation_message(){
    
        return cy.iframe("#gnewtonIframe").find(".gnewtonFieldInputClass");
      }

}
export const iodinePO = new iodineSoftware();
