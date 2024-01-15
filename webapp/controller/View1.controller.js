sap.ui.define([
    './Formatter',
	"sap/ui/core/mvc/Controller",
	"sap/ui/core/routing/History", 
				'sap/ui/model/json/JSONModel', 
				'sap/viz/ui5/data/FlattenedDataset', 
				'sap/viz/ui5/controls/common/feeds/FeedItem', 
				'sap/m/Label',
				'sap/m/ColumnListItem', 
				'sap/m/library', 
				'sap/m/MessageToast', 
				'sap/m/Column' 
], function(Formatter, Controller) {
	"use strict";

	return Controller.extend("almacen.almacen.controller.View1", {
        _constants: {
			sampleName: "almacen/almacen/controller", //"sap/suite/ui/commons/sample/ChartContainerSimpleToolbar",
			vizFrame: {
				id: "chartContainerVizFrame",
				dataset: {
					dimensions: [{
						name: 'Mes',
						value: "{Mes}"
					}],
					measures: [{
						group: 1,
						name: "Pastas",
						value: "{Pastas}"
					}, {
						group: 1,
						name: "Pollos",
						value: "{Pollos}"
					}, {
						group: 1,
						name: "Harinas",
						value: "{Harinas}"
					}, {
						group: 1,
						name: "Chuletas",
						value: "{Chuletas}"
					}, {
						group: 1,
						name: "Huevos",
						value: "{Huevos}"
					}, {
						group: 1,
						name: "Cereales",
						value: "{Cereales}"
					}, {
						group: 1,
						name: "Granos",
						value: "{Granos}"
					},],
					data: {
						path: "/Products"
					}
				},
				modulePath: "movalmacenchart",
				type: "line",
				properties: {
					plotArea: {
						showGap: true
					}
				},
				feedItems: [{
					'uid': "primaryValues",
					'type': "Measure",
					'values': ["Pastas", "Pollos", "Chuletas", "Huevos", "Harinas", "Cereales", "Granos"]
				}, {
					'uid': "axisLabels",
					'type': "Dimension",
					'values': ["Mes"]
				}]
			}
		},
        
        onInit : function (evt) {

            // set explored app's demo model on this sample
            var oModel = this.getView().getModel("movalmacen");
            this.getView().setModel(oModel);

            var oVizFrame = this.getView().byId(this._constants.vizFrame.id); 
			this._updateVizFrame(oVizFrame);
    
        },
        
        /* ============================================================ */
		/* Helper Methods                                               */
		/* ============================================================ */
		/**
		 * Updated the Viz Frame in the view.
		 *
		 * @private
		 * @param {sap.viz.ui5.controls.VizFrame} vizFrame Viz Frame that needs to be updated
		 */
		_updateVizFrame: function(vizFrame) {
			var oVizFrame = this._constants.vizFrame;
			var oVizFramePath = sap.ui.require.toUrl(this._constants.sampleName + oVizFrame.modulePath);
			var oModel = this.getOwnerComponent().getModel("movalmacenchart");
			console.log("LUIS TRAVIESO0");
			//var oModel = new JSONModel(oVizFramePath);
			var oDataset = new sap.viz.ui5.data.FlattenedDataset(oVizFrame.dataset);
			console.log("LUIS TRAVIESO1");
			vizFrame.setVizProperties(oVizFrame.properties);
			console.log("LUIS TRAVIESO2");
			vizFrame.setDataset(oDataset);
			console.log("LUIS TRAVIESO3");
			vizFrame.setModel(oModel);
			console.log("LUIS TRAVIESO4");
			this._addFeedItems(vizFrame, oVizFrame.feedItems);
			console.log("LUIS TRAVIESO5");
			vizFrame.setVizType(oVizFrame.type);
		},

		/**
		 * Adds the passed feed items to the passed Viz Frame.
		 *
		 * @private
		 * @param {sap.viz.ui5.controls.VizFrame} vizFrame Viz Frame to add feed items to
		 * @param {Object[]} feedItems Feed items to add
		 */
		_addFeedItems: function(vizFrame, feedItems) {
			console.log("LUIS TRAVIESO feedItems " + feedItems);
			for (var i = 0; i < feedItems.length; i++) {
				console.log("LUIS TRAVIESO FOR " + i);
				vizFrame.addFeed(new sap.viz.ui5.controls.common.feeds.FeedItem(feedItems[i]));
			}
		},

		handleItemClick: function(oEvent) {
			var demoToast = this.getView().byId("demoToast");
			demoToast.setText("Has dado click.");
			demoToast.show();
		}

	});
});