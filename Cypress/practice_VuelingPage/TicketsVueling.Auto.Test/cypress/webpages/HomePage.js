/// <reference types='cypress-xpath' />

import "cypress-xpath/src/index";

export class HomePage {
  
  // ELEMENTS
  cookiesButton   = () => cy.getId("onetrust-accept-btn-handler");
  oneWay          = () => cy.get("[for='AvailabilitySearchInputSearchView_OneWay']");
  origin          = (origin) => cy.getId("AvailabilitySearchInputSearchView_TextBoxMarketOrigin1").type(`${origin}`);
  selectOrigin    = (origin) => cy.get(`a[data-id-code = '${origin}']`);
  destination     = (dest) => cy.getId("AvailabilitySearchInputSearchView_TextBoxMarketDestination1").type(`${dest}`);
  selectDestination = (dest) => cy.get(`a[data-id-code = '${dest}']`);
  datePicker      = () => cy.get("input#marketDate1");
  datePicker_GroupFirst = () => cy.xpath("//div[contains(@class, 'ui-datepicker-group-first')]//span[contains(@class, 'ui-datepicker-month')]");
  selectMonth     = () => cy.get("a[title = 'Siguiente']");
  selectFirstDayAvailable = () => cy.get("[data-handler='selectDay']");
  selectADT       = () => cy.getId('DropDownListPassengerType_ADT_2');
  selectINF       = () => cy.getId('AvailabilitySearchInputSearchView_DropDownListPassengerType_INFANT');
  btnSearchFlyghts = () => cy.getId('divButtonBuscadorNormal');
  searcherScreen  = () => cy.getId('homeBody');

  // METHODS
  select_RoadTrip() {
    this.oneWay().click().should("be.visible");
  }

  select_OriginDestination(origin, dest) {
    this.origin(origin).should("be.visible");
    this.selectOrigin(origin).click();

    this.destination(dest).should("be.visible");
    this.selectDestination(dest).click();
  }

  select_Calendar(month) {
    this.datePicker_GroupFirst().then((elem) => {
      const texto = elem.text();
      if (texto != month) {
        this.selectMonth().click();
        this.select_Calendar(month);
      }
      this.selectFirstDayAvailable().first().click({force:true});
    });
  }

  select_passangers(num) {
    this.selectADT().click();
    this.selectINF().select(num);
  }

  searchFlight(){
    this.btnSearchFlyghts().first().click()
  }

}
