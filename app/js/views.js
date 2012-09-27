(function(v, runtime) {

  // mix your pages into "v", here's some samples:
  
  // A very simple "Page" abstraction for our single page app
  v.Page = Backbone.View.extend({
    initialize: function() {
      _.bindAll(this);
    },
    render: function() {
      this.$el.html(this.template());
      if (this.components) {
        _.defer(this.components);
      }
      return this;
    }
  });
  
  // Some pages
  v.Home = v.Page.extend({
    template: JST["app/templates/pages/home.hb"]
  });

  v.About = v.Page.extend({
    template: JST["app/templates/pages/about.hb"]
  });
  
  v.Animals = v.Page.extend({
    template: JST["app/templates/pages/animals.hb"],
    // components are rendered _after_ the page template has finished rendering
    components: function() {
      new v.AnimalList({ collection: runtime.Animals });
    }
  });
  
  v.AnimalList = Backbone.View.extend({
    el: ".animals",
    template: JST["app/templates/components/animal.list.hb"],
    initialize: function() {
      _.bindAll(this);
      this.collection.bind("all", this.render);
      this.collection.fetch();
    },
    render: function() {
      this.$el.empty();
      this.$el.html(this.template({ animals: this.collection.toJSON() }));
    }
  });

})(APP.Views, APP.Runtime);