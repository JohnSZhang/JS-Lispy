module.exports = {
  tokenize: function (string) {
    // converts a string of characters into an array of tokens
    return string.replace('(', ' ( ').replace(')', ' ) ').split(' +');
  },

  parse: function (program) {
    // returns scheme expression from string
    return readFromTokens(tokenize(program));
  }

  readFromTokens(tokens): function () {
    // read expression from an array of tokens
    if (tokens.length === 0) {
      throw 'unexpected EOF while reading';
    }
    var token = tokens.shift();
    if ('(' === token) {
      var List = [];
      while (tokens[0] !== ')') {
        List.push(readFromTokens(tokens)); // recurisvely read the expressions
      }
      tokens.shift(); // drop the closing paren )
      return List
    } else if (')' === token) {
      throw 'Unexpect ) in program';
    } else {
      return this.atom(token);
    }
  },

  atom: function (token) {
    // Converting number to numbers, other tokens are strings
    if (isNaN(parseInt(token))) {
      return token;
    } else if (parseInt(token) === parseFloat(token)) {
      return parseInt(token);
    } else {
      return parseFloat(token);
    }
  }
};
