class SmartCalculator {
  constructor(initialValue) {
    this.value = initialValue;
    return this;
  }

  add(number) {
    this.value = this.value.toString().concat(" + " + parseInt(number));
    return this;
  }

  subtract(number) {
    this.value = this.value.toString().concat(" - " + parseInt(number));
    return this;
  }

  multiply(number) {
    this.value = this.value.toString().concat(" * " + parseInt(number));
    return this;
  }

  devide(number) {
    this.value = this.value.toString().concat(" / " + parseInt(number));
    return this;
  }

  pow(number) {
    this.value = this.value.toString().concat("pow" + parseInt(number));
    return this;
  }
}

SmartCalculator.prototype.valueOf = function () {
  while (this.value.toString().match(/pow\d/)) {
    this.value = this.value.toString().replace(/(\d{1,})(pow)(\w{1,})/, 'Math.pow($1, $3)');
  }
  this.value = eval(this.value);
  return this.value.toString();
}

module.exports = SmartCalculator;