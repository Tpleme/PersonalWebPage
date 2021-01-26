define(function () {

        var externals = {};

        externals.init = function (onclick) {

                $('#aboutBtn').click(() => onclick('about'));

                $('#projectsBtn').click(() => onclick('projects'));

                $('#cvBtn').click(() => onclick('cv'));

                $('#contactsBtn').click(() => onclick('contacts'));
        }

        return externals;

});