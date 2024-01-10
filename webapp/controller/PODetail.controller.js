sap.ui.define([
    "sap/ui/core/mvc/Controller",
    "sap/ui/model/json/JSONModel"
], function (Controller, JSONModel) {
    "use strict";
    return Controller.extend("MyController", {
        onInit: function(){
            const oRouter = this.getOwnerComponent().getRouter();
            oRouter.getRoute("Detail").attachPatternMatched(this._routeMatched, this);
        },

        _routeMatched: function(oEvent){
            const line = oEvent.getParameters("arguments").arguments.line;
            const bindingPath = "/myPOs/" + line;
            this.getView().bindElement(bindingPath);
        },
        gotoPO: function () {
            const oRouter = this.getOwnerComponent().getRouter();
            oRouter.navTo("Home");
        }
    });
});