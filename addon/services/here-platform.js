import Ember from 'ember';
import H from 'H';

export default Ember.Service.extend({

  initialize: Ember.on('init', function() {
    var config = this.config();

    var platform = new H.service.Platform({
      app_id: config.app_id,
      app_code: config.app_code
    });

    this.platform = platform;
  }),

  config: function() {
    var env = this.container.lookupFactory('config:environment');
    return env.hereMaps;
  }

});
