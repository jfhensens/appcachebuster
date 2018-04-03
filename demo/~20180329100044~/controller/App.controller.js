sap.ui.define([
  "sap/ui/core/mvc/Controller"
], function (Controller) {
  "use strict";

  var AppController = Controller.extend("be.infrabel.demo.controller.App", {
    metadata: {},
    constructor: function () {
      Controller.prototype.constructor.apply(this, arguments);
    }
  });

  return AppController;
});