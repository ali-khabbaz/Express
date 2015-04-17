define(['app'], function(app) {
    app.factory('mainViewFactory', mainViewFactory);
    mainViewFactory.$inject = ['$http'];

    function mainViewFactory($http) {
        var factory = {
            as: as
        };
        return factory;

        function as() {
            return 2 * 8;
        }
    }
});
