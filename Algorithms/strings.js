// With split
function removeBlanks(str){
  return str.split(" ").join("");
}
// console.log(removeBlanks('Pl ayTha tF   unkyM usi     c  '));

// Without split
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
  return arr.join("");
}
// console.log(removeBlanksTwo('Pl ayTha tF   unkyM usi     c  '));

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

function shortenStringArray(arr, length){
  var count = 0;
  for(var idx = 0; idx < arr.length; idx++){
    console.log(arr[idx].length);
    if(arr[idx].length < length){
      for(var j = idx; j < arr.length; j++){
        arr[j] = arr[j + 1];
      }
      count++;
    }
  }
  console.log(arr);
  // arr.length -= count;
  return count;
}
console.log(shortenStringArray(["Today", "is", "Monday", "the", "first", "day", "of", "the", "week"], 4));
