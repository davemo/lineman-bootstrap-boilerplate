describe("APP.Routers.Main", function() {

  var router;
  var subject = APP.Routers.Main;
  var views   = APP.Views;

  beforeEach(function() {
    router = new subject();
  });

  describe("rendering pages", function() {
    var view;
    
    beforeEach(function() {
      view = new views.Home();
      view.template = Handlebars.compile("<p class='template-stub'></p>");
      router.container = affix("#page > p.message");
      router._renderPage(view);
    });

    it("emptys out whatever was previously in the container", function() {
      expect(router.container).not.toContain("p.message");
    });

    it("appends the views element to the container", function() {
      expect(router.container).toContain("div > p.template-stub");
    });
  });

  describe("routing", function() {
    beforeEach(function() {
      try {
        Backbone.history.start();
      } catch (e) {
        // whee
      }
      spyOn(router, '_renderPage');
    });

    describe("welcoming the user", function() {
      beforeEach(function() {
        router.navigate("oops/", true);
      });

      it("renders the welcome view", function() {
        expect(router._renderPage).toHaveBeenCalledWith(jasmine.any(views.Home));
      });
    });
  });

});