## Application Details
|               |
| ------------- |
|**Generation Date and Time**<br>Thu Nov 09 2023 20:09:11 GMT+0000 (Coordinated Universal Time)|
|**App Generator**<br>@sap/generator-fiori-freestyle|
|**App Generator Version**<br>1.11.4|
|**Generation Platform**<br>SAP Business Application Studio|
|**Template Used**<br>simple|
|**Service Type**<br>None|
|**Service URL**<br>N/A
|**Module Name**<br>almacen|
|**Application Title**<br>almacen|
|**Namespace**<br>almacen|
|**UI5 Theme**<br>sap_horizon|
|**UI5 Version**<br>1.120.1|
|**Enable Code Assist Libraries**<br>False|
|**Enable TypeScript**<br>False|
|**Add Eslint configuration**<br>False|

## almacen

almacen

### Starting the generated app

-   This app has been generated using the SAP Fiori tools - App Generator, as part of the SAP Fiori tools suite.  In order to launch the generated app, simply run the following from the generated app root folder:

```
    npm start
```

## Documentación Ejercicio plantilla DemoKit
Pasos para la creación de una plantilla DemoKit en BAS, usando un Mock server de prueba para consumir la data de movimientos de mercancía de un almacén de alimentos:

1) Instalaremos y configuraremos el ambiente BAS, para crear nuestro proyecto usando SAP Fiori, siguiendo estos pasos:

   Configuracion de BAS:
    https://github.com/SAP-samples/teched2022-AD280/blob/main/exercises/ex2/ex2.1/README.md
   
   Creacion de proyecto en BAS:
    https://github.com/SAP-samples/teched2022-AD280/blob/main/exercises/ex2/ex2.2-alternative/README.md
   

2)	Crearemos el Mock server en la plataforma de postman, siguiendo el siguiente tutorial:             
   https://drive.google.com/file/d/1o4acXKL1HyqtwM2C4elX0neC9F8y6Lrs/view?usp=drive_link

   Objeto JSON para la data del ejercicio:
   ```
   [
        {
          "responsable": "Luis",
          "producto": "Harina",
          "Fecha": "2023-07-12T00:00:0",
          "cantidad": "9",
          "tipo": "salida"
        },
        {
          "responsable": "Jose",
          "producto": "Pasta",
          "Fecha": "2023-06-15T00:00:0",
          "cantidad": "13",
          "tipo": "entrada"
        },
        {
          "responsable": "Edgar",
          "producto": "Huevos",
          "Fecha": "2023-08-05T08:30:0",
          "cantidad": "60",
          "tipo": "entrada"
        },
        {
          "responsable": "Gustavo",
          "producto": "Cereal",
          "Fecha": "2023-06-10T00:00:0",
          "cantidad": "7",
          "tipo": "entrada"
        },
        {
          "responsable": "Carlos",
          "producto": "Granos",
          "Fecha": "2023-06-10T00:00:0",
          "cantidad": "15",
          "tipo": "salida"
        },
        {
          "responsable": "Tenesis",
          "producto": "Chuletas",
          "Fecha": "2023-06-10T05:30:0",
          "cantidad": "22",
          "tipo": "salida"
        },
        {
          "responsable": "Freddy",
          "producto": "Pollo",
          "Fecha": "2023-06-22T00:00:0",
          "cantidad": "4",
          "tipo": "entrada"
        }
    ]
```

Objeto JSON numero 2 para la data del grafico mensual:
   ```
   {
"Products": [
{
"Mes": "Enero",
"Pastas": 350,
"Pollos": 900,
"Huevos": 80,
"Harinas": 570,
"Chuletas": 1200,
"Granos": 430,
"Cereales": 750

},
{
"Mes": "Febrero",
"Pastas": 450,
"Pollos": 200,
"Huevos": 10,
"Harinas": 650,
"Chuletas": 940,
"Granos": 690,
"Cereales": 520
},
{
"Mes": "Marzo",
"Pastas": 200,
"Pollos": 0,
"Huevos": 0,
"Harinas": 1000,
"Chuletas": 780,
"Granos": 700,
"Cereales": 260
},
{
"Mes": "Abril",
"Pastas": 30,
"Pollos": 1100,
"Huevos": 0,
"Harinas": 670,
"Chuletas": 600,
"Granos": 510,
"Cereales": 0
},
{
"Mes": "Mayo",
"Pastas": 0,
"Pollos": 480,
"Huevos": 2000,
"Harinas": 158,
"Chuletas": 430,
"Granos": 1300,
"Cereales": 0
},
{
"Mes": "Junio",
"Pastas": 0,
"Pollos": 10,
"Huevos": 1400,
"Harinas": 2000,
"Chuletas": 250,
"Granos": 860,
"Cereales": 1600
},
{
"Mes": "Julio",
"Pastas": 900,
"Pollos": 1500,
"Huevos": 900,
"Harinas": 1270,
"Chuletas": 90,
"Granos": 400,
"Cereales": 1510
},
{
"Mes": "Agosto",
"Pastas": 410,
"Pollos": 740,
"Huevos": 350,
"Harinas": 960,
"Chuletas": 380,
"Granos": 70,
"Cereales": 1245
},
{
"Mes": "Septiembre",
"Pastas": 600,
"Pollos": 130,
"Huevos": 0,
"Harinas": 110,
"Chuletas": 110,
"Granos": 0,
"Cereales": 820
},
{
"Mes": "Octubre",
"Pastas": 230,
"Pollos": 0,
"Huevos": 0,
"Harinas": 510,
"Chuletas": 100,
"Granos": 1500,
"Cereales": 400
},
{
"Mes": "Noviembre",
"Pastas": 40,
"Pollos": 0,
"Huevos": 1500,
"Harinas": 30,
"Chuletas": 200,
"Granos": 1150,
"Cereales": 148
},
{
"Mes": "Diciembre",
"Pastas": 0,
"Pollos": 600,
"Huevos": 700,
"Harinas": 0,
"Chuletas": 200,
"Granos": 560,
"Cereales": 450
}
]
}
```

   Codigo para crear el modelo en el manifest.json:
```
"movalmacen": {
	"type": "sap.ui.model.json.JSONModel",
	"uri": "https://0f53f119-1e36-442c-89b3-860c487036a5.mock.pstmn.io/v1/almacen"
},
"movalmacenchart": {
"type": "sap.ui.model.json.JSONModel",
"uri": "https://0f53f119-1e36-442c-89b3-860c487036a5.mock.pstmn.io/v1/almacenchart"
}
```
NOTA: al final de la url, los segmentos que observamos deben ser los mismo que colocamos al crear nuestro mosck server, en este caso
         "v1/almacen", mientras que el resto de la url la podemos obtener al crear el mockserver.


3)	Una vez creados el proyecto y el MockServer, agregaremos nuestras plantillas DemoKit a nuestro proyecto. son las siguiente:
    https://sapui5.hana.ondemand.com/#/entity/sap.ui.webc.main.List/sample/sap.ui.webc.main.sample.ListBasic/code
    https://sapui5.hana.ondemand.com/#/entity/sap.suite.ui.commons.ChartContainer/sample/sap.suite.ui.commons.sample.ChartContainerSimpleToolbar/code

    Necesitaremos el codigo de los archivos view.xml, controller.js y manifest.json que alli se indican:


  	3.1) En la View, remplazar todo el codigo de nuestro archivo view/View1.view.xml con el de la plantilla excepto la linea que indica la     
     propiedad "controllerName", que es la que une a nuestra vista con nuestro controlador.


  	3.2) En el controlador, debes remplazar todo el codigo de tu archivo (excepto el string "almacen.almacen.controller.View1")
  	 con lo siguiente:
```
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
```

NOTA: En el string "almacen.almacen.controller.View1" debes colocar el nombre y ruta de tu archivo vista. En el codigo original del controlador, al crear el proyecto, lo puedes encontrar. Copialo antes de remplaar todo el controlador y luego pegalo alli, remplazando "almacen.almacen.controller.View1".
		
3.3) En el archivo manifest.json, debemos agregar con cuidado las propiedades que sean diferentes, o esten faltando en nuestro propio
    manifest.json (no copies y pegues, tampoco reemplaces, es solo agregar o cambiar los campos que ya existan y sean diferentes!)


4) Crea el archivo controller/Formatter.js, que sera el encargado de contener la logica js para mostrar los iconos y colores segun sea el caso de un salida o entrada de mercancia. Una vez creado, pega en el el siguiente codigo:
```
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
```

5) Solo falta dar forma a la vista, llamar nuestra data del mockserver en ella y llamar a nuestras funciones de formato en el archivo "Formatter.js" creado anteriormente. Para eso, reemplaza el codigo de tu vista con el siguiente codigo (excepto la linea de la propiedad "controllerName"):
   ```
    <mvc:View controllerName="almacen.almacen.controller.View1"
	        xmlns="sap.m"
		xmlns:commons="sap.suite.ui.commons"
		xmlns:main="sap.ui.webc.main"
		xmlns:mvc="sap.ui.core.mvc"
		xmlns:viz="sap.viz.ui5.controls"
		xmlns:layout="sap.ui.layout"
		height="50%">
		<main:Toast id="demoToast" duration="1000" />
		<Title level="H3"
			id="title"
			text="Movimientos de mercancia"
			class="sapUiTinyMargin"
			wrappingType="Normal"/>
		
		<IconTabBar
			id="idIconTabBarMulti"
			expanded="{device>/isNoPhone}"
			class="sapUiResponsiveContentPadding">
			<items>
				<IconTabFilter id="IconTabFilter1" icon="sap-icon://hint" key="info">
					<main:List 
					itemClick="handleItemClick" 
					id="lista" 
					items="{movalmacen>/}">
					
						<main:StandardListItem
							id="item"
							text="{movalmacen>producto} / Responsable: {movalmacen>responsable}"
							icon="{
									parts: [
										{path: 'movalmacen>tipo'}
									],
									formatter: 'almacen.almacen.controller.Formatter.tipoico'
								}"
							description="Cantidad: {movalmacen>cantidad} / {movalmacen>Fecha}"
							additionalText="{movalmacen>tipo}"
							additionalTextState="{
											parts: [
												{path: 'movalmacen>tipo'}
											],
											formatter: 'almacen.almacen.controller.Formatter.tipomovi'
										}" 
						/>
					</main:List>
				</IconTabFilter>
				<IconTabFilter
					id="IconTabFilter2"
					icon="sap-icon://attachment"
					key="attachments">
					<layout:Splitter id="ly" width="100%" height="100%">
						<layout:contentAreas>
							<commons:ChartContainer
								id="chartContainer"
								showFullScreen="true"
								showPersonalization="false"
								autoAdjustHeight="false"
								personalizationPress="attachPersonalizationPress"
								contentChange="attachContentChange"
								title="Balance total de productos mensual">
								<commons:content>
									<commons:ChartContainerContent
										id="ChartContainerContent"
										icon="sap-icon://line-chart"
										title="Balance total de productos mensual">
										<commons:content>
											<viz:VizFrame id="chartContainerVizFrame" height="500px" width="100%"
														uiConfig="{applicationSet:'fiori'}"></viz:VizFrame>
										</commons:content>
									</commons:ChartContainerContent>
								</commons:content>
							</commons:ChartContainer>
						</layout:contentAreas>
					</layout:Splitter>
				</IconTabFilter>
			</items>
		</IconTabBar>
	</mvc:View>
   ```
