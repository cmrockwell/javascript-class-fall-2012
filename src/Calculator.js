var Calculator = function() {
};

Calculator.prototype.add = function(x, y) {
    this.result = x + y;
    return this.result;
};

Calculator.prototype.subtract = function(x, y) {
    this.result = x - y;
    return this.result;
};

Calculator.prototype.lastResult = function() {
    return this.result;
};

Calculator.prototype.subtract = function(x, y) {
    return x - y;
};

Calculator.prototype.multiply = function(x, y) {
    return x * y;
};

window.Calculator = Calculator;