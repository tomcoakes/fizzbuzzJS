describe("FizzBuzz", function() {
  var fizzbuzz;

  beforeEach(function() {
    fizzbuzz = new FizzBuzz();
  });

  it("It know's when a number is divisible by three", function () {
    expect(fizzbuzz.isDivisibleByThree(3)).toEqual(true);
  });

  it("knows when a number is NOT divisible by three", function() {
    expect(fizzbuzz.isDivisibleByThree(1)).toBe(false);
  });

  it("knows when a number is divisible by five", function() {
    expect(fizzbuzz.isDivisibleByFive(5)).toBe(true);
  });

  it("knows when a number is NOT divisible by five", function() {
    expect(fizzbuzz.isDivisibleByFive(7)).toBe(false);
  });

});