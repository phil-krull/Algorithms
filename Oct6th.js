var obj = {

}

function mma(arr) {
  var min = arr[0];
  var max = arr[0];
  var sum = arr[0];

  for(var i = 1; i < arr.length; i++) {
    if(arr[i] > max) {
      max = arr[i];
    }
    else if(arr[i] < min) {
      min = arr[i];
    }
    sum = sum + arr[i];
  }
  var avg = sum / arr.length;
  obj["min"] = min;
  obj["max"] = max;
  obj["avg"] = avg;
  return obj;
}

console.log(mma([4,1,6,8]));
var obj = {

}
function cents(num) {
  var q = 0
  var d = 0
  var n = 0
  var p = 0

    while(num >= 25) {
      num = num - 25;
      q++
  }
    while(num >= 10) {
      num = num  - 10;
      d++
  }
    while(num >= 5) {
      num = num - 5;
      n++
  }
    while(num >= 1) {
      num = num - 1;
      p++
  }


  obj.quarters = q;
  obj.dimes = d;
  obj.nickels = n;
  obj.pennies = p;
  return obj
}

console.log(cents(85));
