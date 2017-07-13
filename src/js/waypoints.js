var waypoint = new Waypoint({
  element: $('.page'),
  handler: function(direction) {
    console.log(direction);
  }
})