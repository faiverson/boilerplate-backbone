define('constant', function() {

	/**
	 * Module used to send constants in the system, if it's needed
	 */

    var constant = (function() {       

        return {
            HELLO: 'Hello World',
            start: function () {
            	console.log('start constants');
            }
        };

    }());

    return constant;
});