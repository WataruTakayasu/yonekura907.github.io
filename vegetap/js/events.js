var key = true;
  
// keydown
document.onkeydown = handleKeyDown;
function handleKeyDown(e) {
  if(key == true){
      switch(event.keyCode) {
          case 65:
            // a
              loadVegeData(0);
              break;
          case 66:
            // b
               loadVegeData(1);
              break;
          case 67:
            // c
              loadVegeData(2);
              break;
          case 68:
            // d
              loadVegeData(3);
              break;
          case 69:
            // e
              loadVegeData(4);
              break;
          case 70:
            // f
              loadVegeData(5);
              break;
          case 71:
            // g
              loadVegeData(6);
              break;
          case 72:
            // h
              loadVegeData(7);
              break;
          case 73:
            // i
              loadVegeData(8);
              break;
          case 74:
            // j
              loadVegeData(9);
              break;
          case 75:
            // k
              loadVegeData(10);
              break;
          case 76:
            // l
              loadVegeData(11);
              break;
          case 77:
            // m
              loadVegeData(12);
              break;
      }
    }
}

