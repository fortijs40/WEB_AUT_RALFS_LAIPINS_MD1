import selectablePage from "../pageObjects/selectable.Page";
describe('MD1 spec', () => {
  context("MD1 grid scenario", () => {
    beforeEach(() => {
      selectablePage.visit();
    });
    it('Selectable grid - case', () => {
      //Click “Grid”
      selectablePage.gridButton.click();
      //Click on two, four, six and eight
      selectablePage.gridItems.contains("Two").click();
      selectablePage.gridItems.contains("Four").click();
      selectablePage.gridItems.contains("Six").click();
      selectablePage.gridItems.contains("Eight").click();
      //Validate that the selected items are Two, Four, Six and Eight are highlighted
      selectablePage.activeGridItems.should("contain", "Two").and("contain", "Four").and("contain", "Six").and("contain", "Eight");
      //Validate that “One”, “Three”, “Five”, “Seven”, “Nine” are not highlighted
      selectablePage.activeGridItems.should("not.contain", "One")
      .and("not.contain", "Three").and("not.contain", "Five")
      .and("not.contain", "Seven").and("not.contain", "Nine");
    });
  });
});