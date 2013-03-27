define(['jquery', 'backbone', 'text!templates/addWish.html', 'collections/wishCollection', 'models/wishModel', 'mediator', 'i18n!nls/main'],
function($, Backbone, template, collection, model, mediator, words) {
    
  var View = Backbone.View.extend({

    el: $('#wrapper-add-wishlist'),

    template: _.template(template),

    collection: collection,

    model: model,
    
    events: {
        "click #btn-wish": "newWish",
        "keypress input": "newWish"
    },
    
    initialize: function(attr, options) {
        var self = this;
        self.ENTER_KEY = 13; // enter key

        if (attr.model == undefined)
            self.model = new model();

        self.$el.append(self.template);

        $.each(self.$el.find('input'), function(i, item) {
            var name = $(item);

            switch(name.attr('name')) {
                case 'wish':
                    self.wish = name;
                    if (self.model.get('wish'))
                        name.val(self.model.get('wish'));
                    break;
            }
        });
    },    

    newWish: function(event) {
        if ((event.type == 'keypress' && event.which == this.ENTER_KEY) || event.type == 'click') {
            this.collection.create(this.newAttributes());
            this.collection.fetch();
            var text = this.model.get('id') ? words.messages.wishAddView.save : words.messages.wishAddView.edit;
            mediator.publish('createMessage', text, words.messages.title, 'success');
        }

        if (event.type == 'click')
            return false;
    },

    newAttributes: function() {
        var self = this;
        return {
            id: this.model.get('id') ? this.model.get('id') : this.collection.nextId(),
            wish: this.getWish()
        };
    },

    getWish: function() {
        return this.wish.val() ? this.wish.val() : '';
    },

    render: function() {
        this.$el.fadeIn('slow').removeClass('hide');;
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

  return View;

});
