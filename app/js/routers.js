(function(r, v, runtime) {
  
  // mix your routers into "r", here's a sample
  
  r.Main = Backbone.Router.extend({
    initialize: function() {
      _.bindAll(this);
      this.container = $("#page");
    },
    routes: {
      "home"    : "home",
      "about"   : "about",
      "animals" : "animals",
      "*path"   : "home"
    },
    home: function() {
      this._renderPage(new v.Home());
    },
    about: function() {
      this._renderPage(new v.About());
    },
    animals: function() {
      this._renderPage(new v.Animals());
    },
    _renderPage: function(view) {
      this.container.empty().append(view.render().el);
    }
  });
  
})(APP.Routers, APP.Views, APP.Runtime);