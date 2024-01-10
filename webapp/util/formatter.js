sap.ui.define([], function() {
    'use strict';

    return {
        decimalFormat: function(amount){
            return parseInt(amount).toFixed(2);
        }
        
    }
    
});