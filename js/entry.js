/*here it is*/
const d3 = require('d3');
const $ = require('jquery');
const Circles = require('./circles');

$(document).ready( () => {
(() => {
  "use strict";
  console.log('ready');
  const circles = new Circles({top: 0, left: 0});
  circles.drawCircles();
})()
});
