# Lineman Bootstrap Boilerplate

This package is kind of a starting place for me when I build interactive prototypes and single page apps using Twitter Bootstrap, Backbone, Handlebars, Testem and Lineman. It comes with sample routes, views, and models (so you can see how the plumbing works), and a server that stubs out a simple endpoint to return a list of Animals (so you can see how server side integration with Backbone works).

# Customizations

I've overridden the lineman defaults to provide a better starting place for how I  develop, these include:

1. Custom [Express.JS](http://expressjs.com/) server with stubbed endpoints
2. [Testem](https://github.com/airportyh/testem) for running specs separate from the lineman process: testem -f config/spec.json
3. [Twitter Bootstrap](https://github.com/twitter/bootstrap) with a basic single page app layout and navbar
4. Some default styling and Bootstrap mixins.less, useful for many projects
5. [Backbone](http://documentcloud.github.com/backbone/) router, models, collections and views in a way I usually organize things
6. Removal of default coffeescript files that lineman generates; you can still write coffeescript with lineman if you so desire, it's just not where I start :)

# Running the App

1. Clone this repo
2. npm install
3. grunt run

# Running the Specs

1. npm install (if you haven't already)
2. testem -f config/spec.js (runs in phantom if you have it, and chrome)

# Notes

This project relies on [Lineman](https://github.com/testdouble/lineman).

# License

MIT