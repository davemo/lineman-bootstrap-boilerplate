(function(routers, runtime, collections) {

  runtime.Animals = new collections.Animals();

  new routers.Main();
  Backbone.history.start();

})(APP.Routers, APP.Runtime, APP.Collections);