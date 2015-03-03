var FizzBuzz = function() {
};



FizzBuzz.prototype.isDivisibleByThree = function(number) {
  return this._isDivisibleBy(number, 3);
};

FizzBuzz.prototype.isDivisibleByFive = function(number) {
  return this._isDivisibleBy(number, 5);
};

FizzBuzz.prototype.isDivisibleByFifteen = function(number) {
  return this._isDivisibleBy(number, 15);
};

FizzBuzz.prototype.play = function(number) {
  if (this.isDivisibleByFifteen(number)) { return "FIZZBUZZ";
  };
  if (this.isDivisibleByFive(number)) { return "BUZZ";
  };
  if (this.isDivisibleByThree(number)) { return "FIZZ";
  };
  return number;
};


//Private methods

FizzBuzz.prototype._isDivisibleBy = function(number, divisor) {
  return (number % divisor === 0);
};