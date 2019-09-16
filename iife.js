var iifeExample  = (function () {

    /* Private vars and methods */
    var private_var_1,
        private_var_2,
        init,
        private_method_2;


    /* private methods */
    init = function() {
        private_var_1 = 1;
        private_var_2 = 2;
    };

    private_method_2 = function() {

    }

    /* Public vars and methods */
    return {
        init: function () {
            init();
        },
    };
})();
