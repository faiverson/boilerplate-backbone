require.config({

    config: {
        i18n: {
            locale: 'en-us' // language selected by default
        }
    },
    
    // 3rd party script alias names (Easier to type "jquery" than "libs/jquery-1.9.0.min")
    paths: {
        // Core Libraries
        modernizr: "libs/vendor/modernizr-2.6.2.min",
        bootstrap: "libs/vendor/bootstrap.v2.0.3",
        jquery: "libs/vendor/jquery-1.9.0.min",
        underscore: "libs/vendor/lodash.underscore.v1.0.1.min",
        backbone: "libs/vendor/backbone",
        amplifyStore: "libs/vendor/amplify.store.min",
        amplify: "libs/vendor/backbone.amplify",
        dataTable: "libs/vendor/jquery.dataTables.min",
        //Highcharts: "libs/vendor/highcharts/highcharts.v2.3.5",
        //exporting: "libs/vendor/highcharts/modules/exporting",
        constant: "libs/constant",
        mediator: "libs/mediator",

        // Require.js Plugins
        domReady: "plugins/domReady.v2.0.1",
        text: "plugins/text.v2.0.1",
        image: "plugins/image.v0.2.1",
        i18n: "plugins/i18n.v2.0.1",
        json: "plugins/json.v0.2.1",
        font: "plugins/font.v0.2.0",
        propertyParser: "plugins/propertyParser.v0.1.0",

        templates : '../templates'
    },
    // Sets the configuration for your third party scripts that are not AMD compatible
    shim: {
        "backbone": {
            deps: ["underscore", "jquery"],
            exports: "Backbone"  //attaches "Backbone" to the window object
        },
        "amplifyStore": {
            deps: ["backbone"]
        },
        "amplify": {
            deps: ["amplifyStore"]
        },
        "dataTable": {
            deps: ["jquery"]
        }/*,
        "Highcharts": {
            "exports": "Highcharts",
            "deps": [ "jquery"] 
        },
        "exporting": {
            "exports": "exporting",
            "deps": [ "jquery"] 
        }*/
    } // end Shim Configuration
    
});

require(['modernizr', 'backbone', 'domReady', 'routers/Router', 'jquery', 'bootstrap', 'amplify',
    'dataTable', 'mediator', 'constant'],
function (Modernizr, Backbone, domReady, Router, $, bootstrap) {    
    domReady( function() {
        var router = new Router();
    });
});