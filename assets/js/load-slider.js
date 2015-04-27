(function () {
    var $sliderContainer = $('#top-slider-container'),
        imagesCount = 6,
        imageAddress = 'assets/images/slider-',
        imageExtension = '.jpg',
        $divItemActive,
        $divFill;

    for (var i = 0; i < imagesCount; i += 1) {
        $divItemActive = $('<div>').addClass('item');
        $divFill = $('<div>').addClass('fill');

        $divFill.appendTo($divItemActive);
        $divItemActive.appendTo($sliderContainer);

        $divFill.css('background-image', 'url(' + imageAddress + i + imageExtension + ')');
    }

    var arr = $('.fill');
    $(arr[0]).parent().addClass('active');

    $('.carousel').carousel({
        interval: 3500
    });
})();