/* jshint node: true */
'use strict';

module.exports = {
  name: 'ember-cli-here-maps',

  included: function(app) {
    this._super.included(app);

    app.import('vendor/here-shim.js', {
      exports: { 'H': ['default'] }
    });
  },

  contentFor: function(type, config) {
    var content = "";

    if (type === "head") {
      content = "<script src=\"//js.api.here.com/v3/3.0/mapsjs-core.js\" type=\"text/javascript\" charset=\"utf-8\"></script>\n" +
        "<script src=\"//js.api.here.com/v3/3.0/mapsjs-service.js\" type=\"text/javascript\" charset=\"utf-8\"></script>";
    }

    return content;
  }
};
