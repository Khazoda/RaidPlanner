const anime = require('animejs');
const { ipcMain, webFrame} = require("electron");
// Resets zoom to default
webFrame.setZoomFactor(1);

var divs = document.getElementById("span_container").childNodes;
// For each outer div
for (var i = 0; i < divs.length; i++) {
  if (divs[i].nodeName.toLowerCase() == "div") {
    
   console.log(i);
    anime({
      targets: '#span_container div',
      rotate: 2880,
      // rotate: '1turn',
      easing: "linear",
      delay: anime.stagger(100),
      // backgroundColor: '#FFF',
      loop: true,
      duration: 30000
    });
  }
}
