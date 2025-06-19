"use strict"
let input = document.getElementById("maleName");
let inp = document.getElementById("femaleName");
let submit = document.getElementById("submit");
let players = document.getElementById("players");
let score = document.getElementById("score");
let back = document.getElementById("back")


let story = ["You're the melody that fills my heart with joy, the rhythm that makes my soul sing. Every moment with you is a gift, a reminder of the love we share. Your touch ignites a flame that never fades, a flame that burns brighter with each passing day. I love you more with every breath, more with every beat of my heart. You're my forever home, my safe haven, my guiding star.",

  "You're the sunshine that warms my skin, the calm in every storm that soothes my soul. Every laugh we share is music to my ears, every whisper a gentle breeze that brings me peace. Your love is my anchor, my shelter from life's tempests, my haven where I am free to be me. With you, every day is a new adventure, every night a sweet serenade. You're the missing piece that makes me whole, the missing beat that makes my heart complete."]

submit.addEventListener('click', function (event) {

   event.preventDefault();
  if(input.value === "" &&  inp.value === "")    {
     alert("write your name")  
   }else {
        players.innerHTML = input.value + "🤵" + " " + "&" + " " + inp.value + "👰"; 
      
        let quotes = document.getElementById("quote")   
let get = story[Math.floor(Math.random() * story.length )];
 quotes.innerHTML = get;

let num = Math.floor(Math.random() * 100);
let answer = num + "%";
 score.innerHTML = `Your Love Score Is ${answer}`
 
 if(num <= 50) {
    quotes.innerHTML = "🤔 Hey guys try to understand each other so that your love can increase more🤗🥰,Or else this is a risky love better still break up oo🤣😂";
    back.style.display = "blue";
 }
 
   }
   input.value = "";
   inp.value = ""
});
