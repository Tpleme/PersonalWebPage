define(['controller/tabController'], function (tabController) {

    var externals = {};

    externals.show = function (onclick) {
        
        $('.content').empty();

        const content = $('.content');
        
        content.append($('<div id="contactsDiv">').append($('<form class="form" action="#">')));
       
        const sideForm = $('#contactsDiv').append($('<div id="sideForm">'));

        const form = $('.form');

        form.append($('<div class="form-group">')
            .append($('<input type="text" id="firstName" name="firstName" placeholder="Your Name">')));

        form.append($('<div class="form-group">')
            .append($('<input type="email" id="email" name="email" placeholder="Your Email">')));

        form.append($('<div class="form-group">')
            .append($('<textarea name="message" id="message" rows="7" placeholder="Type your message here"></textarea>')));

        form.append($('<button type="submit">Submit</button>'));

        tabController.init(onclick);
    };

    return externals;

});