module.exports = {
  eval: function (x) {
    var self = this;
    var env = global.environment;
    if (env.hasOwnProperty(x)) {
      // if it's an environmental variable, return it
      return env(x);
    } else if (Array.isArray(x)) {
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
      var expression = (self.eval(test, env)) ? conseq : alt;
      return self.eval(expression, env);
    } else if (x[0] === 'define') {
      // defining more environmental variables
      env[x[1]] === self.eval(x[1], env);
    } else {
      // else we are processing the proc
      var proc = self.eval(x[0], env);
      var arguments = x.slice(1).map(function(arg){
        self.eval(arg, env);
      });
      return proc.call(this, arguments);
    }
  }
}
