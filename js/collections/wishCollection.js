define(['jquery', 'backbone', 'models/wishModel', 'amplify'], 
    function($, Backbone, model, Store){
	  
	var collection = Backbone.Collection.extend({

        model: model,

        localStorage: new window.Store("boilerplate"),
        
        url: function () {
            return location.protocol + "//" + location.hostname + (location.port && ":" + location.port) + "/";
        },

        initialize: function(models, options) {
            var self = this;
            this.fetch({
                error: self.fetchError,
                success: self.fetchSuccess
            });
            console.log('Start collection');
        },

        reset: function() {
            console.log('reset collection');
        },

        nextId: function() {            
            if (!this.length)
                return 1;
            return this.last().get('id') + 1;
        },

        fetchSuccess: function(collection, response) {
        },

        fetchError: function(collection, response) {
        }

    });

    return collection;
    
});
