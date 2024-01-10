sap.ui.define([
    "sap/ui/core/mvc/Controller",
    "MyApp_shiv/util/formatter"
], function (Controller, formatter) {
    "use strict";

    return Controller.extend("MyApp_shiv.controller.Root", {
        onInit: function () {

        },
    formatter : formatter,
        
        gotoPODetail: function(oEvent){
            const oSource = oEvent.getSource();
            const sPath = oSource.getBindingContext().getPath();
            const line = sPath.split("/")[2];
            const router = this.getOwnerComponent().getRouter()
            router.navTo("Detail",{
                "line": line
            })
        }
    });
});