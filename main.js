
var chooseAffirmations = document.getElementById("affirmations")
var chooseMantras = document.getElementById("mantras")
var imgHolder = document.querySelector(".img-holder");
var mainPage = document.querySelector(".the-whole-page")
var newMessageButton = document.querySelector(".new-message");
var randomMessages = document.querySelector(".random-messages")



window.addEventListener("load", hideSaying);
newMessageButton.addEventListener("click", hideImage)
newMessageButton.addEventListener("click", showSaying)
newMessageButton.addEventListener("click", showRandomSayings)


function getRandomIndex(array) {
 return Math.floor(Math.random() * array.length);
}

function hideImage(){
 imgHolder.classList.add("hidden")
};

function hideSaying(){
 randomMessages.classList.add("hidden")
}

function showSaying(){
 randomMessages.classList.remove("hidden")
}

function showRandomSayings() {
 if (chooseAffirmations.checked === true){
 randomMessages.textContent = affirmations[getRandomIndex(affirmations)]
 } else if (chooseMantras.checked === true) {
 randomMessages.textContent = mantras[getRandomIndex(mantras)]
 }
}
