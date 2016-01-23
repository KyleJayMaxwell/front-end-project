//Pulling pokedex, and the pokemon uri number
var settings = {
  "url": "http://pokeapi.co/api/v1/pokedex/1/",
  "method": "GET",
}

//creating random number to pull the pokemon uri out with
var randomCom = Math.round(Math.random()*(778-0))+0;
console.log(randomCom);

//empty array to push all the pokemon uri into 
var pokeArray = [];

//declaring a variable that will pick the computer pokemon
var comPokemon = "";

//User choosing pokemon
var userInput = prompt("Enter a Pokemon name!");
var userPokemon = userInput.toLowerCase();
console.log(userPokemon);

$.ajax(settings).done(function (response) {
  var poke = response.pokemon;
  //grabbing all pokemon from the pokedex
  for(i=0;i<poke.length;i++){
    console.log(poke[i]);
    //pushing the location of the pokemon into the array
    pokeArray.push(poke[i]["resource_uri"]);
  }
  console.log(poke.userPokemon);
  //making the computer pokemon equal something
  var comPokemon = pokeArray[randomCom];
  console.log(comPokemon);

  //grabbing the computer pokemon
  var pokemonAttr = {
  "url": "http://pokeapi.co/"+comPokemon,
  "method": "GET",
  }

  $.ajax(pokemonAttr).done(function (response) {
    //var for name
    var name = response.name;
    //var for attack
    var attack = response.attack;
    //var for defense
    var defense = response.defense;
    //var for type
    var type = response.types[0].name;
    console.log(response);
    console.log("Name: "+name);
    //adding computer name
    $("#computerInput").append("<li>"+"Name: "+name+"</li>");
    console.log("Health: "+response.hp);
    //adding computer attack
    $("#computerInput").append("<li>"+"Attack: "+attack+"</li>");
    console.log("Attack: "+response.attack);
    //adding computer defense
    $("#computerInput").append("<li>"+"Defense: "+defense+"</li>");
    console.log("Defense: "+response.defense);
    //adding computer type
    $("#computerInput").append("<li>"+"Type: "+type+"</li>");
    console.log("Type: "+response.types[0].name);
  });



});




// var comPokemone = Math.round(Math.random()*)

// var settings = {
//   "url": "http://pokeapi.co/api/v1/pokemon/1/",
//   "method": "GET",
// }

// $.ajax(settings).done(function (response) {
//   console.log(response);
// });