define(['jquery', 'backbone'],
function($, Backbone) {
    
  var View = Backbone.View.extend({

    el: $('div.container'),
    
    events: {
        "click .brand": "changeActive",
        "click ul.nav li": "changeActive"
    },
    
    initialize: function() {
        this.active = $('a.brand');
    },

    changeActive: function(event) {
        this.active.removeClass('active');
        $(event.currentTarget).addClass('active');
        this.active = $(event.currentTarget);
    }
    
  });

  return View;
});