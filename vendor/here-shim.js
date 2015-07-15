/* global define, H */

/**
 * This shim allows us to import the H global package in the component
 */

define('H', [], function() {
  "use strict";

  return {
    'default': H
  };
});
