(function(m) {

  // mix your models into "m", here's a sample
  
  m.Animal = Backbone.Model.extend({
    defaults: {
      name: 'Animal'
    }
  });

})(APP.Models);