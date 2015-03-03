describe("FizzBuzz", function() {
  
  var fizzbuzz;

  beforeEach(function() {
    fizzbuzz = new FizzBuzz();
  });

  describe("Know's when a number is", function() {


    it("divisible by three", function () {
      expect(fizzbuzz.isDivisibleByThree(3)).toEqual(true);
    });

    it("NOT divisible by three", function() {
      expect(fizzbuzz.isDivisibleByThree(1)).toBe(false);
    });

    it("divisible by five", function() {
      expect(fizzbuzz.isDivisibleByFive(5)).toBe(true);
    });

    it("NOT divisible by five", function() {
      expect(fizzbuzz.isDivisibleByFive(7)).toBe(false);
    });

    it("divisible by fifteen", function() {
      expect(fizzbuzz.isDivisibleByFifteen(15)).not.toBe(false);
    });

    it("NOT divisible by fifteen", function() {
      expect(fizzbuzz.isDivisibleByFifteen(16)).toBe(false);
    });


  });

  describe("when playing, says", function() {


    it("FIZZ, when a number is divisible by 3", function () {
      expect(fizzbuzz.play(3)).toEqual("FIZZ");
    });

    it("BUZZ, when a number is divisible by 5", function () {
      expect(fizzbuzz.play(5)).toEqual("BUZZ");
    });


  });



});