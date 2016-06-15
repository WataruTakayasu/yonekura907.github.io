(function(){

  var subObj = function(){
    console.log("subsub");
  }
  window.subObj = subObj;

  console.log(window.subObj);

})();
