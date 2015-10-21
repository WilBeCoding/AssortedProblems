var noIdeaWhatImDoing = require("../knowwhatyouredoing.js");

describe("ElectricCar", function() {
  it("creates a new car with the engine property set to electric", function() { 
      var uberHonda = new ElectricCar();
      expect(uberHonda.engine).toEqual(
        'electric'
  )})
})

// mpc = miles per charge
  it("Can travel 100 miles on a single charge", function() {
    var uberHonda = new ElectricCar();
    expect(uberHonda.mpc).toEqual(
      100
  )})

  it("Can travel 100 miles on a single charge", function() {
    var uberHonda = new ElectricCar();
    if(uberHonda.milesTillCharge === 100) {

    }
    expect(uberHonda.mpc).to
  })

  it("Loses charge when driving thus when in operation the miles till charge go down", function() {
    var uberHonda = new ElectricCar();
    expect(
      if(uberHonda.drive === true) {
        uberHonda.milesTillCharge < 100
      })
  })

  it("Requires a recharge upon running out of energy", function() {
    var uberHonda = new ElectricCar();
    expect(
      if(uberHonda.milesTillCharge === 0) {
        uberHonda.drive === false;
        uberHonda.needsCharge === true;
      })
  })

  it("Is attacked by software bugs every 400 miles", function() {
    var uberHonda = new ElectricCar();
    expect(
      if(uberHonda.odometer % 400 === 0) {
        alert("Best Call The Orkin Man. Youza car got bugs.")
        uberHonda.drive === false;
      })
  })