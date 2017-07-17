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

/* * * *
* MENU COLOR CHANGE
* * * */
$(window).scroll(function (event) {
    var scroll = $(window).scrollTop();
    console.log('SCROLL : '+scroll);
    if (scroll > 10) {
        // $('.menu__item').css('color', 'black');
        $('.menu__menu').addClass('menu__menu--dark');
    }
    if (scroll < 250) {
        // $('.menu__item').css('color', 'white');
        $('.menu__menu').removeClass('menu__menu--dark');
    }
});