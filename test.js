var parser = require('./parser');
global.environment = require('./environment');
var evaluator = require('./eval');
evaluator.eval(parser.parse("(define r 10)"));
console.log(evaluator.eval(parser.parse("(r)")));
console.log(evaluator.eval(parser.parse("(+ 1 1)")));
console.log(evaluator.eval(parser.parse("(* r r)")));
console.log(evaluator.eval(parser.parse("(* 16 (* r r))")));
