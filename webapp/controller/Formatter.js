sap.ui.define(function() {
	"use strict";

	var Formatter = {
		tipomovi :  function (sType) {
            console.log("tipomovi");
            if (sType == "entrada") {
                return "Success";
            } else {
                return "Error";
            }
		},

		tipoico :  function (sType) {
            console.log("tipoico");
            if (sType == "entrada") {
                return "icon-add-process";
            } else {
                return "icon-close-command-field";
            }
		}
	};

	return Formatter;

}, /* bExport= */ true);