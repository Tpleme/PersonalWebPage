define(['view/projectView'], function (projectsView) {

    var internals = {};
    var externals = {};

    internals.reRoute = function (pageName) {
        require(['router'], function (router) {
            
            switch(pageName) {
                case 'about' : window.location.hash = 'about';
                    break;
                case 'projects' : window.location.hash = 'projects';
                    break;
                case 'cv' : window.location.hash = 'cv';
                    break;
                case 'contacts' : window.location.hash = 'contacts';
                    break;
            }
        });
    };

    externals.init = function () {
        projectsView.show(internals.reRoute)
    };

    return externals;
})