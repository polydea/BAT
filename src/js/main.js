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
        overflowScroll: true,
        before: function() {},
        after: function() {},
        afterResize: function() {},
        afterRender: function() {}
    });
});
/* * * *
* MENU LINK
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