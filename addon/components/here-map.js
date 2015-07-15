import Ember from 'ember';
import H from 'H';

export default Ember.Component.extend({
  classNames: ['here-map'],

  platform: Ember.inject.service('here-platform'),

  didInsertElement: function() {
    let platform = this.get('platform.platform'),
        defaultLayers = platform.createDefaultLayers(),
        properties = this.getProperties('zoom', 'center');

    let map = new H.Map(
      this.element,
      defaultLayers.normal.map,
      properties
    );

    this.map = map;
  }
});
