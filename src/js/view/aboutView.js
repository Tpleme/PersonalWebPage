define(['controller/tabController'], function (tabController) {

    var externals = {};

    externals.show = function (onclick) {

        $('.content').empty();
        $('.content').append($('<h1>About Me</h1>'));
        $('.content').append($("<p id='aboutP'> Everyone wants to sleep at night and feel safe in their homes, but how many want to do what it takes to keep the tide of evil bugs at bay?<br><br> To stand in the cold office, waiting to battle those pesky bugs while hunger growls in the belly?<br> Many wish to reap the rewards of a good harvest, but few care to remove the stones and till the fields for planting.<br><br> I fight bugs that the team leader has never heard of. I remove the threats before the user even knows about it.<br><br>I make bugs go away, i'm the smasher.<br><br> That's what i'm good at. </p>"))

        tabController.init(onclick);
    };

    return externals;

});