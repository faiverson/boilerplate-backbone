define(['backbone', 'views/loaderView', 'views/messageView', 'views/initView', 'views/navbarView', 'views/wishView', 
    'views/wishAddView', 'collections/wishCollection'], 
    function (Backbone, loaderView, messageView, initView, navbar, wishView, wishAddView, wishCollection) {

    var Router = Backbone.Router.extend({

        initialize: function() {
            Backbone.history.start({pushState : false});
        },

        routes: {
            '': 'init',
            'wishlist': 'wishlist',
            'wishlist/add': 'newWishlist',
            'wishlist/edit/:id': 'newWishlist',
        },
        
        init: function () {
            var self = this;
            if (self.loaderView == undefined)
                self.loaderView = new loaderView();

            if (self.messageView == undefined)
                self.messageView = new messageView();
            else
                self.messageView.clear();

            if (self.navbar == undefined)
                self.navbar = new navbar();
        },

        wishlist: function () {
            var self = this;
            self.init();
            self.loaderView.render();

            if(self.wishCollection == undefined) {
                self.wishCollection = new wishCollection();
            }

            var wish = new wishView({model: self.wishCollection});
            self.changeView(wish);
        },

        newWishlist: function (id) {
            var self = this;
            self.init();
            self.loaderView.render();

            if(self.wishCollection  == undefined) {
                self.wishCollection = new wishCollection();
            }

            var mod = self.wishCollection.get({'id': id});
            var wish = new wishAddView({collection: self.wishCollection, model: mod});
            self.changeView(wish);
        },

        changeView: function (view) {
            if (this.currentView != null) {
                this.currentView.hide();
                this.currentView.destroy();
            }
            this.currentView = view;
            this.currentView.render();
            this.loaderView.hide();
        }

    });

    return Router;
});