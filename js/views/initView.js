define(['jquery', 'backbone', 'text!templates/init.html'], function ($, Backbone, template) {

    var View = Backbone.View.extend({

        el: $('#wrapper-init'),

        template: _.template(template),

        url: function () {
            return location.protocol + "//" + location.hostname + (location.port && ":" + location.port) + "/";
        },

        initialize: function () {
            this.$el.append(this.template);
        },

        render: function() {
            this.$el.fadeIn('slow').removeClass('hide');
        },

        hide: function() {
            this.$el.fadeOut('slow').addClass('hide');
        },

        destroy: function() {
            this.undelegateEvents();
            this.$el.removeData().unbind();
            this.$el.empty();
        }
    });

    // Returns the View class
    return View;
});