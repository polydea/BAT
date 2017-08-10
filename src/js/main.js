/* * * *
 * SCROLLIFY FUNCTION
 * * * */
$(function scrollify() {
  $.scrollify({
    section: ".page",
    sectionName: "section-name",
    interstitialSection: "",
    easing: "easeOutExpo",
    scrollSpeed: 1100,
    offset: 0,
    scrollbars: true,
    standardScrollElements: "",
    setHeights: true,
    touchScroll: false,
    overflowScroll: true,
    before: function() {},
    after: function() {},
    afterResize: function() {},
    afterRender: function() {}
  });
});
/* * * *
 * CHECK IF MOBILE
 * * * */
if (window.matchMedia("(max-width: 768px)").matches) {
  /* * * *
   * DISABLE SCROLLIFY
   * * * */
  // $.scrollify.destroy();
  // $.scrollify.disable();
  /* * * *
   * CONTACT FORM MOBILE
   * * * */
  $(".contact__mobile").click(function() {
    $(this).fadeOut();
    $('.form__text').fadeOut();
    $('.contact__form').css('display', 'block');
  });
}
/* * * *
 * HOMEPAGE ARROWS
 * * * */
$(".home__arrows").click(function() {
  $.scrollify.next();
});
/* * * *
 * MENU LINKS
 * * * */
$(".menu__item").click(function() {
  cvHide();
  mediasHide();
  eventsHide();
  switch (this.className) {
    case 'menu__item item__home':
      $.scrollify.move("#Accueil");
      break;
    case 'menu__item item__news':
      $.scrollify.move("#News");
      break;
    case 'menu__item item__recipes':
      $.scrollify.move("#Recettes");
      break;
    case 'menu__item item__contact':
      $.scrollify.move("#Contact");
      break;
  }
});

$(".bar__section").click(function() {
  switch (this.className) {
    case 'bar__section section__home':
      $.scrollify.move("#Accueil");
      break;
    case 'bar__section section__news':
      $.scrollify.move("#News");
      break;
    case 'bar__section section__recipes':
      $.scrollify.move("#Recettes");
      break;
    case 'bar__section section__contact':
      $.scrollify.move("#Contact");
      break;
  }
});

/* * * *
 * MENU COLOR CHANGE
 * * * */
$(window).scroll(function(event) {
  var scroll = $(window).scrollTop();
  if (scroll > 10) {
    $('.menu__menu').addClass('menu__menu--dark');
  }
  if (scroll < 250) {
    cvHide();
    $('.menu__menu').removeClass('menu__menu--dark');
  }
});

/* * * *
 * CV ICONS LINK
 * * * */
$('.icons__media').click(function() {
  $.scrollify.move("#News");
  mediasDisplay();
});
$('.icons__events').click(function() {
  $.scrollify.move("#News");
  eventsDisplay();
});
$('.icons__contact').click(function() {
  $.scrollify.move("#Contact");
});

/* * * *
 * CV SHOWING
 * * * */
$('.CV__link').click(function() {
  cvDisplay();
});
$('.CV__close').click(function() {
  cvHide();
});

var cvDisplay = function() {
  $('.menu__menu').addClass('menu__menu--dark');
  $('.home').addClass('home--hide');
  $('.cv--hide').addClass('cv');
  $('.cv--hide').removeClass('cv--hide');
};

var cvHide = function() {
  $('.menu__menu').removeClass('menu__menu--dark');
  $('.cv').addClass('cv--hide');
  $('.home--hide').removeClass('home--hide');
};

/* * * *
 * MEDIAS SHOWING
 * * * */
$('.links__medias').click(function() {
  $.scrollify.move("#News");
  $.scrollify.update();
  mediasDisplay();
});
$('.medias__close').click(function() {
  mediasHide();
});

var mediasDisplay = function() {
  eventsHide();
  $('.news').addClass('news--hide');
  $('.medias--hide').addClass('medias');
  $('.medias--hide').removeClass('medias--hide');
  $('.news').parent().css("height", "auto");
};

var mediasHide = function() {
  $('.medias').addClass('medias--hide');
  $('.news--hide').removeClass('news--hide');
  $.scrollify.update();
};

/* * * *
 * EVENTS SHOWING
 * * * */
$('.links__events').click(function() {
  eventsDisplay();
});
$('.agenda__close').click(function() {
  eventsHide();
});

var eventsDisplay = function() {
  $.scrollify.move("#News");
  $.scrollify.update();
  mediasHide();
  $('.news').addClass('news--hide');
  $('.agenda--hide').addClass('agenda');
  $('.agenda--hide').removeClass('agenda--hide');
};

var eventsHide = function() {
  $('.agenda').addClass('agenda--hide');
  $('.news--hide').removeClass('news--hide');
  $.scrollify.update();
};

/* * * *
 * RECIPES LIST SHOWING
 * * * */
$('.recipesList__link').click(function() {
  recipesListDisplay();
});
$('.recipesList__close').click(function() {
  recipesListHide();
});

var recipesListDisplay = function() {
  $('.recipes').addClass('recipes--hide');
  $('.recipesList--hide').addClass('recipesList');
  $('.recipesList--hide').removeClass('recipesList--hide');
};

var recipesListHide = function() {
  $('.recipesList').addClass('recipesList--hide');
  $('.recipes--hide').removeClass('recipes--hide');
}

/* * * *
 * LAZY LOADING FOR IMG
 * * * */
$(document).ready(function() {
  $('.lazyimg').unveil();
});

/* * * *
 * CONTACT FORM
 * * * */
$(".form__input").focus(function() {
  $(this).removeAttr('placeholder');
});
