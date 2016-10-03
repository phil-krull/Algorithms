// Remove Blanks with split
function removeBlanks(str){
  return str.split(" ").join("");
}
// console.log(removeBlanks('Pl ayTha tF   unkyM usi     c  '));

// Remove Blanks without split
function removeBlanksTwo(str){
  if(typeof str !== "string"){
    return 0;
  }
  var arr = [];
  for(var idx = 0; idx < str.length; idx++){
    if(str[idx] != " "){
      arr.push(str[idx]);
    }
  }
  var end = t.getTime();
  console.log(end);
  return arr.join("");
}
// console.log(removeBlanksTwo('Pl ayTha tF   unkyM usi     c  '));

function removeBlanksThree(str){
  if(typeof str !== "string"){
    return 0;
  }
  var newStr = "";
  for(var idx = 0; idx < str.length; idx++){
    if(str[idx] != " "){
      newStr += str[idx];
    }
  }
  return newStr;
}
// console.log(removeBlanksThree('Pl ayTha tF   unkyM usi     c  '));

// Keep digits of a string
function getDigits(str){
  if(typeof str !== "string"){
    return 0;
  }
  var num = 0;
  for(var idx = 0; idx < str.length; idx++){
    if(str[idx] >= "0" && str[idx] <= "9"){
      num = num * 10 + parseInt(str[idx]);
    }
  }
  return num
}
// console.log(getDigits("0s1z3y5w7h9a2t4?6!8?0"));

// Remove string index of an array where length < num
function shortenStringArray(arr, num){
  for(var idx = 0; idx < arr.length; idx++){
    if(arr[idx].length < num){
      for(var j = idx; j < arr.length-1; j++){
        arr[j] = arr[j + 1];
      }
      arr.length--;
      idx--;
    }
  }
  return arr;
}
// console.log(shortenStringArray(["Today", "is", "Monday", "the", "first", "day", "of", "the", "week", "is"], 4));
