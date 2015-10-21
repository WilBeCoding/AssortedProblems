// INVOKE YOUR FUNCTIONS


function Bicycle(wheelSize, color) {
  this.wheelSize = wheelSize;
  this.color = color;
}

Bicycle.prototype.toString = function() {
  return 'This sweet ' + this.color + ' bicycle has an awesome ' + this.wheelSize + ' wheelset.';
};

Bicycle.prototype.takeForRide = function() {
  return 'Currently riding a shiny ' + this.color + ' bike down the sidewalk!';
};

function RoadBike(wheelSize, color) {
  this.validWheelSizes = ['700C'];
  if (this.validWheelSizes.indexOf(wheelSize) == -1) throw 'Wheelsize for road bikes must be one of ' + this.validWheelSizes.join(', ');
  this.wheelSize = wheelSize;

  this.color = color;
}

var redRoadBike = new RoadBike('700C', 'red');
console.log(redRoadBike.toString());
// This sweet red bicycle has an awesome 700C wheelset.


RoadBike.prototype = new Bicycle();

var dmxBike = new Bicycle('Fucking Massive', 'Maroon Five');

console.log(dmxBike.toString());
console.log(dmxBike.takeForRide());

// Good practice is pick anything in surrounding and start creating objects for it