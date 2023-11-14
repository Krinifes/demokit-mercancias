sap.ui.define([
    './Formatter',
	"sap/ui/core/mvc/Controller"
], function(Formatter, Controller) {
	"use strict";

	return Controller.extend("almacen.almacen.controller.View1", {
        onInit : function (evt) {

            // set explored app's demo model on this sample
            var oModel = this.getView().getModel("movalmacen");
            this.getView().setModel(oModel);
    
        },
        
		handleItemClick: function(oEvent) {
			var demoToast = this.getView().byId("demoToast");
			demoToast.setText("Has dado click.");
			demoToast.show();
		}

	});
});

/*sap.ui.define([
    'sap/ui/core/mvc/Controller',
    'sap/ui/model/json/JSONModel'
], function(Controller, JSONModel) {
"use strict";

var ListController = Controller.extend("almacen.almacen.controller.View1", {

    onInit : function (evt) {

        // set explored app's demo model on this sample
        var oModel = this.getView().getModel("employees");
        this.getView().setModel(oModel);

    }
});


return ListController;

});*/

/*
sap.ui.define([
    "sap/ui/core/mvc/Controller"
    
],
    
     
    function (Controller) {
        "use strict";

        return Controller.extend("almacen.almacen.controller.View1", {
            onInit: function () {

            }
        });
    });
*/