(function(){


  var main = function(){
      console.log("main");


  }

  setTimeout(function(){
    window.subObj();  
  },1000)

  main();
  console.log(window);

})();
