class ArithmeticError extends Error {
  constructor(message) {
    super(message);
    this.name = 'ArithmeticError';
  }
}

class BadRequestError extends Error {
  constructor(message) {
    super(message);
    this.name = 'BadRequestError';
  }
}

function Calculator() {
  this.total = 0;
}

Calculator.prototype.add = function (number) {
  return (this.total += number);
};
Calculator.prototype.subtract = function (number) {
  return (this.total -= number);
};
Calculator.prototype.multiply = function (number) {
  return (this.total *= number);
};
Calculator.prototype.divide = function (number) {
  if (number === 0) {
    throw new ArithmeticError('number cannot be zero');
  }
  return (this.total /= number);
};

Object.defineProperty(Calculator.prototype, 'version', {
  get: function () {
    return fetch(
      'https://gist.githubusercontent.com/Emreedk/5f371d2fa74d698e966e74bcb60a5c3e/raw/85b3964d2a1dd8e58a2536a7848bb2efde1f2f7c/version.json'
    )
      .then(function (result) {
        return result.json();
      })
      .then(function (jsonData) {
        return jsonData.version;
      });
  },

  configurable: true,
  enumerable: true
});
