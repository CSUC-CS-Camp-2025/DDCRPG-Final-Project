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
    location.href = "https://csuc-cs-camp-2025.github.io/DDCRPG-Final-Project/map.html";
  };
}
nextButton = document.getElementById("nextButton");
nextButton.addEventListener('click', () =>{
  conversation();
});