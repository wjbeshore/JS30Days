document.addEventListener('keydown', logKey);

function logKey(e) {
  if(e.keyCode == 65){
      console.log("a")
  } else if(e.keyCode == 83){
      console.log("s")
  } else if(e.keyCode == 68){
    console.log("d")
} else if(e.keyCode == 70){
    console.log("f")
} else if(e.keyCode == 71){
    console.log("g")
} else if(e.keyCode == 72){
    console.log("h")
} else if(e.keyCode == 74){
    console.log("j")
} else if(e.keyCode == 75){
    console.log("k")
} else if(e.keyCode == 76){
    console.log("l")
}
  
  
  
    console.log(e.keyCode);
}