var FizzBuzz = function() {
};

FizzBuzz.prototype._isDivisibleBy = function(number, divisor) {
  return (number % divisor === 0);
};

FizzBuzz.prototype.isDivisibleByThree = function(number) {
  return _isDivisibleBy(number, 3);
};

FizzBuzz.prototype.isDivisibleByFive = function(number) {
  return _isDivisibleBy(number, 5);
};

FizzBuzz.prototype.isDivisibleByFifteen = function(number) {
  return _isDivisibleBy(number, 15);
};