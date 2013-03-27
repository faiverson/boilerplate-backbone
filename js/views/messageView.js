define(['jquery', 'backbone', 'mediator', 'text!templates/messages.html'], function ($, Backbone, mediator, template) {

    var View = Backbone.View.extend({

        el: $('#wrapper-messages'),
        template: _.template(template),
        url: function () {
            return location.protocol + "//" + location.hostname + (location.port && ":" + location.port) + "/";
        },

        /**
        * type support [block|success|error]
        */
        initialize: function () {
            var self = this;
            mediator.subscribe('createMessage', function (message, title, type) {
                self.clear();
                self.render(message, title, type);
            });
        },

        render: function (message, title, type) {
            var json = {
                title: title ? title : '',
                message: message,
                type: 'alert-' + (type ? type : 'error')
            }
            if (type == 'error') {
                this.saveError(json);
            }
            this.$el.append(this.template(json));
            this.$el.fadeIn('slow');
        },

        clear: function () {
            this.$el.empty();
        },

        saveError: function (data) {
            var self = this;
            $.ajax({
                type: 'GET',
                url: self.url() + 'Error/LogError',
                data: data,
                dataType: 'json',
                success: function (response) {},
                error: function (jqXHR, textStatus, errorThrown) { }
            });
        }
    });

    // Returns the View class
    return View;
});