(function(c, m) {
  
  // mix your collections into "c", here's a sample:
  
  c.Animals = Backbone.Collection.extend({
    model: m.Animal,
    url: '/animals'
  });

})(APP.Collections, APP.Models);