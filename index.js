
var numberOfdrumbutton = document.querySelectorAll(".drum").length;



for (var i = 0; i <numberOfdrumbutton; i++) {
  
  document.querySelectorAll(".drum")[i].addEventListener("click",function () {
    
    var audio = new Audio("sounds/tom-1.mp3");

     audio.play();
    
     console.log(this.style.color= "white");
     
    
  })
  
}


