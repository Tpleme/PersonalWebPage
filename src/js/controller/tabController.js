define(function () {

    var externals = {};

    externals.init = function (onclick) {

        $('#aboutBtn').click(function () {
                console.log("About tab has been pressed")
                onclick('about');
        })

        $('#projectsBtn').click(function () {
                console.log("Projects tab has been pressed")
                onclick('projects');
        })

        $('#cvBtn').click(function () {
                console.log("cv tab has been pressed")
                onclick('cv');
        })

        $('#contactsBtn').click(function () {
                console.log("contacts tab has been pressed")
                onclick('contacts');
        })
    };

    return externals;

});