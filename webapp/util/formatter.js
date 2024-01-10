sap.ui.define([], function() {
    'use strict';

    return {
        decimalFormat: function(amount, currency){
            return parseInt(amount).toFixed(2) + ' ' + currency;
        }
        
    }
    
});