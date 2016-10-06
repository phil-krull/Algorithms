// Given a sorted array of numbers, return an index string
function bookIndex(arr){
  var bookStr = "";
  var isRange = false;
  for(var idx = 0; idx < arr.length-1; idx++){
    if(arr[idx + 1] !== arr[idx] + 1){
      bookStr += arr[idx] + ",";
      isRange = false;
    } else {
      if(!isRange){
        isRange = true;
        bookStr += arr[idx] + "-";
      }
    }
  }
  bookStr += arr[idx];
  return bookStr;
}
console.log(bookIndex([1,2,3,6,8,10,11,12,14,15,18,19,20]));

// Given a string, return a boolean whether it is a strict palindrome.
function palindrome(str){
  for(var idx = 0; idx < str.length/2; idx++){
    if(str[idx] != str[str.length - 1 - idx]){
      return false;
    }
  }
  return true;
}
console.log(palindrome("a x a"));
console.log(palindrome("animal"));
