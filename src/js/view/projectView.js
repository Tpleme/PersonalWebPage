define(['controller/tabController'], function (tabController) {

    var externals = {};

    externals.show = function (onclick) {

        $('.content').empty();
        $('.content').append($('<h1>Test Projects</h1>'));

        tabController.init(onclick);
    };

    return externals;

});