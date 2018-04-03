sap.ui.define([
  "sap/ui/core/UIComponent"
], function (UIComponent, HelloDialog) {
  "use strict";
  
  var Component = UIComponent.extend("be.infrabel.demo.Component", {
    metadata: {
      manifest: "json"
    },
    constructor: function () {
      UIComponent.prototype.constructor.apply(this, arguments);
    }
  });
  
  Component.prototype.init = function () {
    UIComponent.prototype.init.apply(this, arguments);
  }

  return Component;
});