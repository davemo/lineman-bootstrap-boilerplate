describe("APP.Views", function() {
  
  var subject = APP.Views;
  
  describe("Page", function() {
    
    var page, pageElement;
    
    beforeEach(function() {
      pageElement = affix("#my-page");
      page = new subject.Page({ el: pageElement });
      page.template = Handlebars.compile("<p class='template-stub'>My Template</p>");
    });
    
    describe("#render", function() {
      beforeEach(function() {
        page.render();        
      });
      
      it("renders a template into the views element", function() {
        expect(pageElement).toContain("p.template-stub");
      });
    });
    
  });
  
});