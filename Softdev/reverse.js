  //Reverse a string without js function
  function reverse(str){
    var r = "";
    for(var i = str.length - 1; i >= 0; i--){
      r += str[i]
    }
    return r;
  }