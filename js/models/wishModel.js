define(['jquery', 'backbone', 'amplify'], function($, Backbone){

  var Model = Backbone.Model.extend({

    url: function () {
        return location.protocol + "//" + location.hostname + (location.port && ":" + location.port) + "/";
    },

  	defaults: {
        id: null,
        wish: null
    },    

    initialize: function() {
        console.log('Start model wishlist');
    }/*,

    sync: function(method, model, options) {
        var med = method.toLowerCase();
        options = options || {};
        switch(med) {
            case 'read':
                options.url = '/wishlist/get/' + this.get('id');
                break;
            case 'create':
                options.url = '/wishlist/add/' + this.get('id');
                break;
            case 'update':
                options.url = '/wishlist/edit/' + this.get('id');
                break;
            case 'delete':
                options.url = '/wishlist/delete/' + this.get('id');
                break;
        }      
        Backbone.sync(method, model, options);
    }*/

  });
  
  return Model
;
});
