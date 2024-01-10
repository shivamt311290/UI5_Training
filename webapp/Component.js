sap.ui.define([
    "sap/ui/core/UIComponent"
], function (UIComponent) {
    "use strict";
    return UIComponent.extend("MyApp_shiv.Component", {
        metadata : {
            manifest: "json"
        },
        init: function () {
            // call the base component's init function. In ABAP we have this.super()
            UIComponent.prototype.init.apply(this, arguments);

            this.getRouter().initialize();
        }        
    });
});
