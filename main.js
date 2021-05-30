
var affirmations = ["I forgive myself and set myself free.", "I believe I can be all that I want to be.", "I am in the process of becoming the best version of myself.", "I have the freedom & power to create the life I desire.", "I choose to be kind to myself and love myself unconditionally." "My possibilities are endless.", "I am worthy of my dreams.",  "I am enough.", "I deserve to be healthy and feel good.", "I am full of energy and vitality and my mind is calm and peaceful.", "Every day I am getting healthier and stronger.", "I honor my body by trusting the signals that it sends me.", "I manifest perfect health by making smart choices."]

var mantras = ["Breathing in, I send myself love. Breathing out, I send love to someone else who needs it.", "Don’t let yesterday take up too much of today.", "Every day is a second chance.", "Tell the truth and love everyone.", "I am free from sadness.", "I am enough.", "In the beginning it is you, in the middle it is you and in the end it is you.", "I love myself.", "I am present now.", "Inhale the future, exhale the past.", "This too shall pass.", "Yesterday is not today.", "The only constant is change.", "Onward and upward.", "I am the sky, the rest is weather."]


var chooseAffirmations = document.getElementById("affirmation-selection")
var chooseMantras = document.getElementById("mantra")
var imgHolder = document.querySelector(".img-holder");
var mainPage = document.querySelector(".the-whole-page")
var newMessageButton = document.querySelector(".message-display");
var randomMessages = document.querySelector(".receive-messages")


window.addEventListener("load", hideSaying);
var receiveMessageButton = document.querySelector('.receive-message');
var mantraPhrase = document.querySelector('.mantra-phrase');
var checkAffirmationRadio = document.getElementById('affirmation-radio');
var checkMantraRadio = document.getElementById('mantra-radio');
var meditationImage = document.querySelector('.meditation-img');


receiveMessageButton.addEventListener('click', createRandomMessage);
backToMainPageButton.addEventListener('click', showMainPage);
viewFavoritesPage.addEventListener('click', deleteMessage);

function hideImage() {
  meditationImage.classList.add('hidden');
}

function showFavoriteButton() {
  event.preventDefault();
  favoriteButton.classList.remove('hidden');
  secondFavoriteButton.classList.remove('hidden');
}

function hideMainPage() {
  mainPage.classList.add('hidden');
  viewFavoritesPage.classList.remove('hidden');

}

function showMainPage() {
  mainPage.classList.remove('hidden');
  viewFavoritesPage.classList.add('hidden');
}
function getRandomIndex(array) {
  return Math.floor(Math.random() * array.length);
}
function selectAffirmation() {
   var randomAffirmation = affirmations[getRandomIndex(affirmations)];
   currentQuote = randomAffirmation;
 }

 function selectMantra() {
   var randomMantra = mantras[getRandomIndex(mantras)];
   currentQuote = randomMantra;
 }
 function createRandomMessage() {
   if (checkAffirmationRadio.checked) {
    hideImage();
    selectAffirmation();
    quoteArea.innerText = currentQuote;
    showFavoriteButton();
  } else if (checkMantraRadio.checked) {
    hideImage();
    selectMantra();
    quoteArea.innerText = currentQuote;

    showFavoriteButton();
