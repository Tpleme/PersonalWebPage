define(function() {

    var internals = {};

    var externals = {};

    internals.routes = {
        home : { hash: '#home', controller: 'homeController'},
        about: { hash: '#about', controller: 'aboutcontroller'},
        projects: { hash: '#projects', controller: 'projectsController'}
    }
    
    internals.defaulRoute = internals.routes.home;

    internals.initController = function (route) {
        require(['controller/' + route.controller], function (controller) {
            controller.init();
        }); 
    };

    internals.getRoute = function () {
        return Object.values(internals.routes).find(function (route) {
            return window.location.hash === route.hash;
        });
    }

    externals.init = function () {
        internals.initController(
            internals.getRoute() || internals.defaulRoute
        );

        window.onhashchange = function () {
            try {
                internals.initController(internals.getRoute());
            }
            catch (error) {
                window.location.hash = internals.defaulRoute.hash;
            }
        };
    };

    return externals;

})