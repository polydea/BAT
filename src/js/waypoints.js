var w_home = new Waypoint({
  element: $('.home'),
  handler: function(direction) {
    console.log('home');
  },
  offset: -20
});
var w_news = new Waypoint({
  element: $('.news'),
  handler: function(direction) {
    console.log('news');
  }
});
var w_recipes = new Waypoint({
  element: $('.recipes'),
  handler: function(direction) {
  }
});
var w_contact = new Waypoint({
  element: $('.contact'),
  handler: function(direction) {
  }
});