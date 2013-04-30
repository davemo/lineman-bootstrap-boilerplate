# Lineman Bootstrap Boilerplate

This package is kind of a starting place for me when I build interactive prototypes and single page apps using Twitter Bootstrap, Backbone, Handlebars, Testem and Lineman. It comes with sample routes, views, and models (so you can see how the plumbing works), and an express server that stubs out a simple endpoint to return a list of Animals (so you can see how server side integration with Backbone works).

# Customizations

I've overridden the lineman defaults to provide a better starting place for how I  develop, these include:

1. Custom [Express.JS](http://expressjs.com/) server with stubbed endpoints
2. [Testem](https://github.com/airportyh/testem) for running specs separate from the lineman process: `lineman spec`
3. [Twitter Bootstrap](https://github.com/twitter/bootstrap) with a basic single page app layout and navbar
4. Some default styling and Bootstrap mixins.less, useful for many projects
5. [Backbone](http://documentcloud.github.com/backbone/) router, models, collections and views in a way I usually organize things
6. Removal of default coffeescript files that lineman generates; you can still write coffeescript with lineman if you so desire, it's just not where I start :)

# Running the App

1. Clone this repo
2. `npm install`
3. `lineman run`

# Running the Specs

1. `npm install` (if you haven't already)
2. `lineman spec` (runs in phantom if you have it, and chrome)

# Upgrading

If you are upgrading the installation of lineman from an older version you will need to `rm -rf node_modules` in the directory you cloned lineman-bootstrap-boilerplate to and then reinstall the node dependencies with `npm install`

# Notes
t
This project relies on [Lineman](https://github.com/testdouble/lineman).

# License

MIT