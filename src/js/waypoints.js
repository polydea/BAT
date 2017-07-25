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
    eventsHide();
    mediasHide();
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
    eventsHide();
    mediasHide();
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
    recipesListHide();
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
    recipesListHide();
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
    eventsHide();
    mediasHide();
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
    eventsHide();
    mediasHide();
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
    $('.infos__img').css({
      'transform': 'rotateY(180deg)'
    });
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
    $('.infos__img').css({
      'transform': 'rotateY(180deg)'
    });
  },
  offset: -100
});
