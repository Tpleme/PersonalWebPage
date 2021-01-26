define(['controller/tabController'], function (tabController) {

    var externals = {};

    externals.show = function (onclick) {

        $('.content').empty();
        $('.content').append($('<h1>Projects</h1>'));
        $('.content').append($('<div class="project">').append($('<img src="resources/Keep_it_clean.png" width="300" height="200"></img>')).append($('<h3>Keep it Clean</h3>')))
        $('.content').append($('<div class="project">').append($('<img src="resources/Qubo.png" width="300" height="200"></img>')).append($('<h3>Keep it Clean</h3>')))
        $('.content').append($('<div class="project">').append($('<img src="resources/500Miles.png" width="300" height="200"></img>')).append($('<h3>Keep it Clean</h3>')))

        
        tabController.init(onclick);
    };

    return externals;

});