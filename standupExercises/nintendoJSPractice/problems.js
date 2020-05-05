const systems = require("./systems");

//1. Return an array containing all the names of consoles that debuted after the year 2000
function millenials() {
    const arr = [];
    systems.forEach(sys => {
      if (sys.year > 1999) {
        arr.push(sys.console);
      }
    });
    return arr;
  }
  

console.log(millenials()); //gamecube, wii, wii u, switch
//
//
//
//
//
//2. Return the total units sold for all systems
function totalUnits() {
    let arr = [];
    systems.forEach(sys => arr.push(sys.unitsSold));
    return arr.reduce((t, c) => t + c);
  }
console.log("Nintendo has sold", totalUnits(), "home consoles worldwide"); //349530000
//
//
//
//
//
//3. Return the total number of multiplayer games listed for the Switch
function multiSwitch() {
    let games = 0;
    systems[systems.length - 1].games.forEach(game =>
      game.multiplayer ? games++ : (games += 0)
    );
    return games;
  }
console.log(multiSwitch()); // 2
//
//
//
//
//
//4. Return an array containing a list of game titles which released the same year as the console they were on.
function sameYear() {
    let arr = [];
    systems.forEach(sys => {
      let year = sys.year;
      sys.games.forEach(game => {
        return game.year === year ? arr.push(game.title) : null;
      });
    });
    return arr;
  }
  

console.log(sameYear());

//array 10 items long beginning with Super Mario Bros and ending with The Legend of Zelda: Breath of the Wild

//["Super Mario Bros", "Duck Hunt", "Super Mario World", "Super Smash Bros Melee", "Luigi's Mansion", "Wii Sports", "The Legend of Zelda: Twilight Princess", "Nintendo Land", "Super Mario Odyssey", "The Legend of Zelda: Breath of the Wild"]
//
//
//
//
//STRETCH: Return the name of the system which lists ONLY multiplayer games

function multi() {
    let gamesArr = [];
    let system = "";
    for (let i = 0; i < systems.length; i++) {
      for (let j = 0; j < systems[i].games.length; j++) {
        if (systems[i].games[j].multiplayer === true) {
          gamesArr[i] ? gamesArr[i]++ : (gamesArr[i] = 1);
        }
        gamesArr[i] === systems[i].games.length
          ? (system = systems[i].console)
          : null;
      }
    }
    return system;
  }

console.log(multi()); // Wii U
