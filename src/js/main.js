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
        scrollbars: false,
        standardScrollElements: "",
        setHeights: true,
        overflowScroll: true,
        before: function() {},
        after: function() {},
        afterResize: function() {},
        afterRender: function() {}
    });
});
/* * * *
* MENU LINKS
* * * */
$(".menu__item").click(function(){
    switch(this.className) {
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

$(".bar__section").click(function(){
    switch(this.className) {
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
$(window).scroll(function (event) {
    var scroll = $(window).scrollTop();
    if (scroll > 10) {
        // $('.menu__item').css('color', 'black');
        $('.menu__menu').addClass('menu__menu--dark');
    }
    if (scroll < 250) {
        // $('.menu__item').css('color', 'white');
        cvHide();
        $('.menu__menu').removeClass('menu__menu--dark');
    }
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

var cvHide = function () {
    $('.menu__menu').removeClass('menu__menu--dark');
    $('.cv').addClass('cv--hide');
    $('.home--hide').removeClass('home--hide');
};

/* * * *
* CV ICONS LINK
* * * */
$('.icons__media').click(function() {
    $.scrollify.instantMove("#News");
    cvHide();
    mediasDisplay();
});
$('.icons__events').click(function() {
    
});
$('.icons__contact').click(function() {
    $.scrollify.move("#Contact");
    cvHide();
});
/* * * *
* MEDIAS SHOWING
* * * */
$('.links__medias').click(function() {
    mediasDisplay();
});
$('.medias__close').click(function() {
    mediasHide();
});

var mediasDisplay = function() {
    $('.news').addClass('news--hide');
    $('.medias--hide').addClass('medias');
    $('.medias--hide').removeClass('medias--hide');
};

var mediasHide = function () {
    $('.medias').addClass('medias--hide');
    $('.news--hide').removeClass('news--hide');
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

var recipesListHide = function () {
    $('.recipesList').addClass('recipesList--hide');
    $('.recipes--hide').removeClass('recipes--hide');
}

var w_home = new Waypoint({
  element: $('.home'),
  handler: function(direction) {
    $('.section__home').addClass('bar__section--active');
    $('.section__news').removeClass('bar__section--active');
    $('.section__recipes').removeClass('bar__section--active');
    $('.section__contact').removeClass('bar__section--active');

    $('.item__home').addClass('menu__item--active');
    $('.item__news').removeClass('menu__item--active');
    $('.item__recipes').removeClass('menu__item--active');
    $('.item__contact').removeClass('menu__item--active');
  },
  offset: 100
});
var w_home_top = new Waypoint({
  element: $('.home'),
  handler: function(direction) {
    $('.section__home').addClass('bar__section--active');
    $('.section__news').removeClass('bar__section--active');
    $('.section__recipes').removeClass('bar__section--active');
    $('.section__contact').removeClass('bar__section--active');

    $('.item__home').addClass('menu__item--active');
    $('.item__news').removeClass('menu__item--active');
    $('.item__recipes').removeClass('menu__item--active');
    $('.item__contact').removeClass('menu__item--active');
  },
  offset: -100
});
var w_news = new Waypoint({
  element: $('.news'),
  handler: function(direction) {
    $('.section__news').addClass('bar__section--active');
    $('.section__home').removeClass('bar__section--active');
    $('.section__recipes').removeClass('bar__section--active');
    $('.section__contact').removeClass('bar__section--active');

    $('.item__news').addClass('menu__item--active');
    $('.item__home').removeClass('menu__item--active');
    $('.item__recipes').removeClass('menu__item--active');
    $('.item__contact').removeClass('menu__item--active');
  },
  offset: 100
});
var w_news_top = new Waypoint({
  element: $('.news'),
  handler: function(direction) {
    $('.section__news').addClass('bar__section--active');
    $('.section__home').removeClass('bar__section--active');
    $('.section__recipes').removeClass('bar__section--active');
    $('.section__contact').removeClass('bar__section--active');

    $('.item__news').addClass('menu__item--active');
    $('.item__home').removeClass('menu__item--active');
    $('.item__recipes').removeClass('menu__item--active');
    $('.item__contact').removeClass('menu__item--active');
  },
  offset: -100
});
var w_recipes = new Waypoint({
  element: $('.recipes'),
  handler: function(direction) {
    $('.section__recipes').addClass('bar__section--active');
    $('.section__home').removeClass('bar__section--active');
    $('.section__news').removeClass('bar__section--active');
    $('.section__contact').removeClass('bar__section--active');

    $('.item__recipes').addClass('menu__item--active');
    $('.item__news').removeClass('menu__item--active');
    $('.item__home').removeClass('menu__item--active');
    $('.item__contact').removeClass('menu__item--active');
  },
  offset: 100
});
var w_recipes_top = new Waypoint({
  element: $('.recipes'),
  handler: function(direction) {
    $('.section__recipes').addClass('bar__section--active');
    $('.section__home').removeClass('bar__section--active');
    $('.section__news').removeClass('bar__section--active');
    $('.section__contact').removeClass('bar__section--active');

    $('.item__recipes').addClass('menu__item--active');
    $('.item__news').removeClass('menu__item--active');
    $('.item__home').removeClass('menu__item--active');
    $('.item__contact').removeClass('menu__item--active');
  },
  offset: -100
});
var w_contact = new Waypoint({
  element: $('.contact'),
  handler: function(direction) {
    $('.section__contact').addClass('bar__section--active');
    $('.section__home').removeClass('bar__section--active');
    $('.section__recipes').removeClass('bar__section--active');
    $('.section__news').removeClass('bar__section--active');

    $('.item__contact').addClass('menu__item--active');
    $('.item__news').removeClass('menu__item--active');
    $('.item__recipes').removeClass('menu__item--active');
    $('.item__home').removeClass('menu__item--active');
  },
  offset: 100
});
var w_contact_top = new Waypoint({
  element: $('.contact'),
  handler: function(direction) {
    $('.section__contact').addClass('bar__section--active');
    $('.section__home').removeClass('bar__section--active');
    $('.section__recipes').removeClass('bar__section--active');
    $('.section__news').removeClass('bar__section--active');

    $('.item__contact').addClass('menu__item--active');
    $('.item__news').removeClass('menu__item--active');
    $('.item__recipes').removeClass('menu__item--active');
    $('.item__home').removeClass('menu__item--active');
  },
  offset: -100
});