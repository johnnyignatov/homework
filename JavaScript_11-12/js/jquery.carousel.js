(function( $ ) {

  $.fn.carousel = function(options) {
    var defaults = {
      speed: 400
    };
    var settings = $.extend(defaults, options);
    var $left = $('.carousel-arrow-left');
    var $right = $('.carousel-arrow-right');
    var elements = $('.carousel-list');
    var pixelsOffset = 225;
    var currentLeft = 0;
    var elementsCount = elements.find('li').length;
    var minimumOffset = -((elementsCount / 2 ) * pixelsOffset);
    var maximumOffset = 0;

    $left.on('click', function () {
      if (currentLeft !== maximumOffset) {
           currentLeft += 225;
           elements.animate({ left : currentLeft + "px"}, settings.speed);
       }
    });

    $right.on('click', function () {
      if (currentLeft !== minimumOffset) {
           currentLeft -= 225;
           elements.animate({ left : currentLeft + "px"}, settings.speed);
       }
    });
  };
})( jQuery );
