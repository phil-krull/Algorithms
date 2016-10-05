function reverseString(str){
  var newStr = [];
  for(var idx = str.length; idx >= 0; idx--){
    newStr.push(str[idx]);
  }
  return newStr.join("");
}
console.log(reverseString("abcdefghijklmnopqrstuvwxyz"));

function parensValid(str){
  var parensFound = 0;
  for(var idx = 0; idx < str.length; idx++){
    if(str[idx] == "("){
      parensFound++;
    }
    if(str[idx] == ")"){
      parensFound--;
    }
    if(parensFound < 0){
      return false;
    }
  }
  return (parensFound === 0);
}
console.log(parensValid('n(a(R)'));
console.log(parensValid('Y(3(p)p(3)r)a'));

function bracesValid(str){
  if(typeof str !== "string"){
    return false;
  };
  var braces = {
    ")":"(",
    "}":"{",
    "]":"["
  };
  var bracesFound = [];
  for(var idx = 0; idx < str.length; idx++){
    switch (str[idx]) {
      case "(":
      case "{":
      case "[":
        bracesFound.push(str[idx]);
        break;
      case ")":
      case "}":
      case "]":
        if(bracesFound[bracesFound.length-1] != braces[str[idx]]){
          return false;
        }
        bracesFound.pop();
        break;
      default:
        continue;
    }
  }
  return (bracesFound.length === 0);
}

console.log(bracesValid('W(a{t}s[o(n{ c}o)m]e )h[e{r}e]!'));
console.log(bracesValid('D(i{a}l[ t]o)n{e'));
