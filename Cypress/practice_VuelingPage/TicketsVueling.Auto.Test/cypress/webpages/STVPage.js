
export class STVpage {

    //ELEMENTS
    stvPage = {
        listFlights: () => cy.getId("outboundFlightCardsContainer"),
        listPriceFlights: () => cy.getId('selectFlightButton'),
        listIconCompany: (companyIcon) => cy.get(`[class^=vy-icon-${companyIcon}]`),
        selectFare: (fare) => cy.get(`.fares-box_header--${fare}`),
        resumePrice: () => cy.getId('bookingSummaryContainer'),
        btnContinue: () => cy.getId('stvContinueButton')
    }

    //METHODS

    validateSTVpage (){
        this.stvPage.listFlights().should('be.visible')
    }

    getFlightRandom (companyIcon){
        let counter = 0;

        this.stvPage.listIconCompany(companyIcon).each(($element) => {
            counter++
        })
        .then(() => {
            const random = Math.floor(Math.random()*counter);
            this.stvPage.listIconCompany(companyIcon).eq(random).click();
        })
    }

    getTypeFare(fare){
        this.stvPage.selectFare(fare).should('be.visible').click();
    }
    
    pressContinue(){
        this.stvPage.resumePrice().should('be.visible')
        this.stvPage.btnContinue().click();
    }
    
}