describe("ShoppingCart", function() {
  it("Starts out as an empty shopping cart. Hot and ready to be stolen by Bubbles", function() {
    var cart = new ShoppingCart();
    expect(cart.status).toEqual(
      []
    )})
})

describe("Popsicle", function() {
  it("Costs 2.50", function() {
    var popsicle = new Popsicle();
    expect(popsicle.price).toEqual(
      2.50
    )})
}

describe("PizzaPies", function() {
  it("costs 2.50", function() {
    var pizza = new PizzaPie();
      expect(pizza.price).toEqual(
        2.50
      )
  })
})

describe("MountainDew", function() {
  it("costs 2.50", function() {
    var dew = new MountainDew)();
    expect(dew.price).toEqual(
      2.50
    )})
})

describe("Add items to your cart", function(){
  it("Adds items to the shopping cart", function() {
    var cart = new ShoppingCart();
    var dew = new MountainDew();
    expect(cart.status).toEqual(
      ['dew'])
  })
})

describe("Remove items from your cart", function() {
  it("Removes items from your shopping cart", function() {
    var cart = new ShoppingCart();
    var dew = new MountainDew();
    expect(cart.status).toEqual(
      [])
  })
})

describe("Provides the total price for all items in the cart", function() {
  it("Totals all of the items in the cart", function() {
    var cart = new ShoppingCart();
    var dew = new MountainDew();
    var pizza = new PizzaPie();
    var popsicle = new Popsicle();
    expect(cart.totalCost).toEqual(
      7.50)
  })
})

describe("Provides a discount for the total price", function() {
  it("Discounts the carts items", function() {
    var cart = new ShoppingCart();
    var dew = new MountainDew();
    var pizza = new PizzaPie();
    var popsicle = new Popsicle();
    expect(discount(5)).toEqual(
      3.75)
  })
})

