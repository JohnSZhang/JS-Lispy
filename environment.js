module.exports = {
  // we are creating the standard environment for scheme as an object
  sin: Math.sin,
  cos: Math.cos,
  sqrt: Math.sqrt,
  abs: Math.abs,
  max: Math.max,
  min: Math.min,
  round: Math.floor,
  '+': function (a, b) {
    return a + b;
  },
  '-': function(a, b) {
    return a - b;
  },
  '*': function (a, b) {
    return a * b;
  },
  '/': function (a, b) {
    return a / b
  },
  '<': function (a, b) {
    return a < b
  },
  '<=': function (a, b) {
    return a <= b
  },
  '>': function (a, b) {
    return a > b
  },
  '>=': function (a, b) {
    return a >= b
  },
  'append': function (a, b) {
    a.push(b);
    return a; // not sure if return is needed
  },
  'apply': function () {
    // not sure
  },
  'begin': function (a) {
    return a[a.length - 1];
  },
  'car': function (a) {
    return a[0];
  },
  'cdr': function (a) {
    return a.slice(1);
  },
  'cons': function (a, b) {
    return [a].concat(b);
  },
  'eq?': function (a, b) {
    return a === b;
  },
  'equal?': function (a, b) {
    return a == b;
  },
  'length': function (a) {
    return a.length;
  },
  'list': function () {
    return Array.prototype.slice.call(arguments);
  },
  'list?': Array.prototype.isArray,
  'map': Array.prototype.map,
  'null?': function (a) {
    return a == [];
  },
  'number?': function (a) {
    return typeof a === 'number';
  },
  'procedure?': function () {
    return typeof a === 'function';
  },
  'symbol?': function () {
    return typeof a === 'string';
  }
}
