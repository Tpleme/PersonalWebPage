define(['controller/tabController'], function (tabController) {

    var externals = {};

    externals.show = function (onclick) {

        $('.content').empty();
        $('.content').append($('<div class="pdfShower"></div>').append($('<iframe src="resources/CV_Leandro_Melo.pdf" title="CV Leandro Melo" style="width:800px; height:500px;" frameborder="0"></iframe>')));

        tabController.init(onclick);
    };

    return externals;

});