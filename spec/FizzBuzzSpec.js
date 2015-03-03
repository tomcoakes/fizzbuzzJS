describe("FizzBuzz", function() {
  var fizzbuzz;

  beforeEach(function() {
    fizzbuzz = new FizzBuzz();
  })

  it("It know's when a number is divisible by three", function () {
    expect(fizzbuzz.isDivisibleByThree(3)).toEqual(true);
  })


})