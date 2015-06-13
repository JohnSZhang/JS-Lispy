module.export = function eval (x, env) {
  if (env.hasOwnProperty(x)) {
    // if it's an environmental variable, return it
    return env(x);
  } else if (Array.prototype.isArray(x)) {
    // if it is a list
    return x;
  } else if (x[0] === 'quote') {
    // if it's quote we do not evaluate
    return x[1];
  } else if (x[0] === 'if') {
    // if its an if statement we break it part and evaluate
    var test = x[1];
    var conseq = x[2];
    var alt = x[3];
    expression = (conseq if evaluate(test, env) else alt);
    return eval(expression, environment);
  } else if (x[0] === 'define') {
    // defining more environmental variables
    env[x[1]] === eval(x[1], env);
  } else {
    // else we are processing the proc
    var proc = eval(x[0], env);
    var arguments = x.slice(1).map(function(arg){
      eval(arg, env);
    });
    return proc.call(this, arguments);
  }
}
