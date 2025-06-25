var btnfx = document.getElementById("btnfx");
let mbgm = document.getElementById("main_bgm")
function playAudio(Audio) 
{ 
  Audio.play();
}
const dialogue = [
  "Hi, Grandma!"
  ,"Hey, Kid! I need help!"
  ,"There's monsters stealing my sheep!"
  ,"Could you help your dear grandmother out?"
  ,"Of course Grandma!"
]

let talking = 0 
function conversation() {
  talking = talking + 1;
  document.getElementById("text").textContent = dialogue[talking];
  if (talking == dialogue.length){
    talking = 0;
    //last next should redirect to map
  };
}

document.getElementById("nextButton").addEventListener('click', () =>{
  conversation();
});