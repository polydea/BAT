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
        $('.menu__menu').removeClass('menu__menu--dark');
    }
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
}

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