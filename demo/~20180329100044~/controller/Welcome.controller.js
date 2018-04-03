sap.ui.define([
  "sap/ui/core/mvc/Controller",
  "sap/m/MessageToast"
], function (Controller, MessageToast) {
  "use strict";
  
  var WelcomeController = Controller.extend("be.infrabel.demo.controller.Welcome", {
    metadata: {},
    constructor: function () {
      Controller.prototype.constructor.apply(this, arguments);
    }
  });

  WelcomeController.prototype.onWelcomeButtonPressed = function (oControlEvent) {
    var sFirstName = "Jean-François";

    var oResourceBundle = this.getView().getModel("i18n").getResourceBundle();

    var sMessage = oResourceBundle.getText("welcomeMessage", [sFirstName]);

    MessageToast.show(sMessage);
  }

  return WelcomeController;
});