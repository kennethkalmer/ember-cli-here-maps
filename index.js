/* jshint node: true */
'use strict';

module.exports = {
  name: 'ember-cli-here-maps',

  included: function(app) {
    this._super.included(app);

    app.import('vendor/here-shim.js', {
      exports: { 'H': ['default'] }
    });
  }
};
