define(['jquery', 'backbone', 'mediator'],
function($, Backbone, mediator) {
    
  var View = Backbone.View.extend({
    
    el: $('#wrapper-loading'),
    
    initialize: function() {
        var self = this;
        
        mediator.subscribe('hideLoader', function () {            
            self.hide();
        });

        mediator.subscribe('showLoader', function () {            
            self.render();
        });
    },    

    render: function() {
        this.$el.fadeIn('slow');
    },

    hide: function() {
        this.$el.fadeOut('slow');
    },

    destroy: function(){
        this.undelegateEvents();
        this.$el.removeData().unbind();
        this.$el.empty();
    }
    
  });

  return View;
});