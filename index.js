var noOfDrum = document.querySelectorAll(".drum").length;
for(let i=0; i<noOfDrum ; i++){
  document.querySelectorAll("button")[i].addEventListener("click", function(){
    let innerHtmlButton= this.innerHTML;
    playSound(innerHtmlButton);
    addAnimationToButton(innerHtmlButton);
  });
}
function playSound(char){
  switch (char) {
    case "w":
      let tom1 = new Audio("sounds/tom-1.mp3")
      tom1.play();
      break;
    case "a":
      let tom2 = new Audio("sounds/tom-2.mp3")
      tom2.play();
      break;
    case "s":
      let tom3 = new Audio("sounds/tom-3.mp3")
      tom3.play();
      break;
    case "d":
      let tom4 = new Audio("sounds/tom-4.mp3")
      tom4.play();
      break;
    case "j":
      let snare = new Audio("sounds/snare.mp3")
      snare.play();
      break;
    case "k":
      let crash = new Audio("sounds/crash.mp3")
      crash.play();
      break;
    case "l":
      let kickBass = new Audio("sounds/kick-bass.mp3")
      kickBass.play();
      break;
  
    default:
      break;
  }
}
document.addEventListener("keydown" ,function(event){
  playSound(event.key);
  addAnimationToButton(event.key);
})
function addAnimationToButton(key){
  let activeButton = document.querySelector("."+key);
  // console.log(activeButton);
  activeButton.classList.add("pressed");
  setTimeout(() => {
    activeButton.classList.remove("pressed")
  }, 100);
}
// document.getElementById("w").addEventListener("click" ,handleClick1);

