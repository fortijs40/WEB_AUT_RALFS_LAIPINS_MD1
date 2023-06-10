class selectablePage{
    static get url(){
        return "/selectable";
    }
    static visit(){
        cy.visit(this.url);
    }
    static get gridButton(){
        return cy.get("#demo-tab-grid");
    }
    static get gridItems(){
        return cy.get(".list-group-item");
    }
    static get activeGridItems(){
        return cy.get(".list-group-item.active");
    }
}
export default selectablePage;