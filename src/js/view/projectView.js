define(['controller/tabController'], function (tabController) {

    var externals = {};

    externals.show = function (onclick) {

        $('.content').empty();
        $('.content').append($('<h1>Projects</h1>'));
        $('.content').append($('<div class="project" id="KeepItCleanBtn" role="button">').append($('<img src="resources/Keep_it_clean.png" width="200" height="150"></img>')).append($('<h3>Keep it Clean</h3>')))
        $('.content').append($('<div class="project" id="QuboBtn"role="button">').append($('<img src="resources/Qubo.png" width="200" height="150"></img>')).append($('<h3>Qubo</h3>')))
        $('.content').append($('<div class="project" id="500MilesBtn"role="button">').append($('<img src="resources/500Miles.png" width="200" height="150"></img>')).append($('<h3>500 Miles to Learn</h3>')))

        $('#KeepItCleanBtn').click(() => window.open('https://github.com/Tpleme/GameProject', '_blank'));
        $('#QuboBtn').click(() => window.open('https://ixiongames.wixsite.com/website', '_blank'));
        $('#500MilesBtn').click(() => window.open('https://github.com/Tpleme/500_Miles_to_Learn', '_blank'));
        
        tabController.init(onclick);
    };

    return externals;

});