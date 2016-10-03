function blanks(s) {
  var temp=" ";

     temp=s.split (" ");
     return temp.join("");
}
blanks("Pl ayTha tF u nkyM usi  c");

    //PRINT AS A STRING
function get_digits(s){
  var temp=[];
  for (var i=0; i< s.length;i++)
    if( s[i]>=0 && s[i]<=9){
      temp.push(s[i]);
    }
  return temp.join("")
}
get_digits("0s1a3y5w7h9a2t4?6!8?0");

  // PRINT AS INTERGERS
function get_num(str){
  var num=0;
  var e=0;
  for ( var i=str.length-1;i>=0;i--){
    if(str[i]>=0 && str[i]<=9){
      num+= parseInt(str[i])*Math.pow(10,e);
      e++
    }
  }
console.log(num);
}
 get_num("0s1a3y5w7h9a2t4?6!8?0");



function shorterStrings(string,val) {
  var newarr=[];
  for (var i = 0; i < string.length; i++) {
    if (string[i].length>=val){
      newarr.push(string[i]);
    }
  }
  return newarr;
}
shorterStrings(["Coding", "dojo", "is", "the", "best!"],4);
