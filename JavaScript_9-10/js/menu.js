$(document).ready(function() {
  var $submenu = $('.submenu');
  var $menuItems = $('.menu-item');
  var $submenuItems = $('.submenu-item');
  var $subSubMenu = $('.sub-submenu');
  var $submenuLink = $('.submenu-link');
  var $menuLink = $('.menu-link');
  var $current;

  $menuItems.on('mouseover', function (e) {
    e.preventDefault();
    $current = $(this);
    $current.children('.submenu').addClass('show');
    $current.children().css('visibility', 'visible');
  });

  $menuLink.on('mouseout', function (e) {
    e.preventDefault();
    $current = $(this);
    if (event.relatedTarget !== $submenuLink[0]) {
      $submenu.removeClass('show');
      $submenu.css('visibility', 'hidden');
      console.log('123');
    }
  });

  $submenuItems.on('mouseenter', function (e) {
    e.preventDefault();
    $current = $(this);
    if ($current.is(':has(ul)')) {
      $current.children().addClass('show');
    } else {
      $subSubMenu.removeClass('show');
    }
  });

  $subSubMenu.mouseleave(function(e) {
    $current = $(this);
    e.preventDefault();
    if ($current.parent().is(':has(ul)')) {
      $current.toggleClass('show');
      $current.toggleClass('show');
    } else {
      $current.toggleClass('show');
    }
  });

  $submenu.on('mouseleave', function (e) {
    e.preventDefault();
    $current = $(this);
    $current.removeClass('show');
    $current.children('show').removeClass('show');
    $current.css('visibility', 'hidden');
    $('.submenu-link').removeClass('show');
    $subSubMenu.removeClass('show');
    $current.parent().on('mouseover', function () {
      $current = $(this);
      $current.children().addClass('show');
    });
  });

});
