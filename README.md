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
   Configuracion:
    https://github.com/SAP-samples/teched2022-AD280/blob/main/exercises/ex2/ex2.1/README.md
   
   Creacion de proyecto:
    https://github.com/SAP-samples/teched2022-AD280/blob/main/exercises/ex2/ex2.2-alternative/README.md
   

3)	Crearemos el Mock server en la plataforma de postman, siguiendo el siguiente tutorial:             
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

   Codigo para crear el modelo en el manifest.json:
```
   "movalmacen": {
        "type": "sap.ui.model.json.JSONModel",
        "uri": "https://0f53f119-1e36-442c-89b3-860c487036a5.mock.pstmn.io/v1/almacen"
	}
 ```
2.1) al final de la url, los segmentos que observamos deben ser los mismo que colocamos al crear nuestro mosck server, en este caso
         "v1/almacen", mientras que el resto de la url la podemos obtener al crear el mockserver.

3)	Una vez creados el proyecto y el MockServer, agregaremos nuestra plantilla DemoKit a nuestro proyecto. Es la siguiente:
    https://sapui5.hana.ondemand.com/#/entity/sap.ui.webc.main.List/sample/sap.ui.webc.main.sample.ListBasic/code

    Necesitaremos el codigo de los archivos view.xml, controller.js y manifest.json que alli se indican:
  	3.1) En la View, remplazar todo el codigo de nuestro archivo view/View1.view.xml con el de la plantilla excepto la linea que indica la     
     propiedad "controllerName", que es la que une a nuestra vista con nuestro controlador.

    3.2) En el controlador, debes remplazar todo el codigo de tu archivo (excepto el string "almacen.almacen.controller.View1")
  	 con lo siguiente:
        /////////////////////////////////////////////////////////////////
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
        ///////////////////////////////////////////////////////////////

   NOTA: En el string "almacen.almacen.controller.View1" debes colocar el nombre y ruta de tu archivo vista. En el codigo original del controlador, al crear el proyecto, lo puedes encontrar. Copialo antes de remplaar todo el controlador y luego pegalo alli, remplazando "almacen.almacen.controller.View1".

   3.3) En el archivo manifest.json, debemos agregar con cuidado las propiedades que sean diferentes, o esten faltando en nuestro propio
    manifest.json (no copies y pegues, tampoco reemplaces, es solo agregar o cambiar los campos que ya existan y sean diferentes!)

4) Crea el archivo controller/Formatter.js, que sera el encargado de contener la logica js para mostrar los iconos y colores segun sea el caso de un salida o entrada de mercancia. Una vez creado, pega en el el siguiente codigo:
////////////////////////////////////////////////////////////////////
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
////////////////////////////////////////////////////////////////////

5) Solo falta dar forma a la vista, llamar nuestra data del mockserver en ella y llamar a nuestras funciones de formato en el archivo "Formatter.js" creado anteriormente. Para eso, reemplaza el codigo de tu vista con el siguiente codigo (excepto la linea de la propiedad "controllerName"):
   ////////////////////////////////////////////////////////////////////
    <mvc:View controllerName="almacen.almacen.controller.View1"
        xmlns="sap.ui.webc.main"
    	xmlns:mvc="sap.ui.core.mvc"
    	height="50%">
    	<Toast id="demoToast" duration="1000" />
    	<Title level="H3"
    		id="title"
    		text="Movimientos de mercancia"
    		class="sapUiTinyMargin"
    		wrappingType="Normal"/>
    	<List 
    	itemClick="handleItemClick" 
    	id="lista" 
    	items="{movalmacen>/}">
    		<StandardListItem
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
    	</List>
    </mvc:View>
   ////////////////////////////////////////////////////////////////////
