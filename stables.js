// Welcome to the Stable!
//
//                               _(\_/)
//                             ,((((^`\
//                            ((((  (6 \
//                          ,((((( ,    \
//      ,,,_              ,(((((  /"._  ,`,
//     ((((\\ ,...       ,((((   /    `-.-'
//     )))  ;'    `"'"'""((((   (
//    (((  /            (((      \
//     )) |     Sonja's Horse    |
//    ((  |        .       '     |
//    ))  \     _ '      `t   ,.')
//    (   |   y;- -,-""'"-.\   \/
//    )   / ./  ) /         `\  \
//       |./   ( (           / /'
//      ||     \\          //'|
//     ||      \\       _//'||
//     ||       ))     |_/  ||
//     \_\     |_/          ||
//     `'"                  \_\
//                          `'"
//
//
//

// Variables
let horsesStable = []; // A place to store all the horses
let welcomeMessage = "Welcome to our stable! Make yourself at home."; // Greeting for visitors
let latePaymentFee = 50; // The extra fee for late payments
let availableStalls = 10; // Number of stalls we have in the stable

// Horse Constructor Function
function Horse(name, nickname, favoriteTreat, age, monthlyRent, location, colour, trait) {
  this.name = name;
  this.nickname = nickname;
  this.favoriteTreat = favoriteTreat;
  this.age = age;
  this.monthlyRent = monthlyRent;
  this.location = location; // true = inside, false = outside
  this.colour = colour; // Unique color of the horse
  this.trait = trait; // a unique trait about the horse (ex. lazy)
  this.hungry = false; // Keeps track of hunger

  // Introduce the horse
  this.introduce = function() {
    return `Hi, I'm ${this.name}, but my friends call me ${this.nickname}. I'm ${this.age} years old, and I love eating ${this.favoriteTreat}!`;
  };

  // Toggle hunger status
  this.toggleHunger = function() {
    this.hungry = !this.hungry;
    return `${this.name} is now ${this.hungry ? "hungry" : "full"}.`;
  };

  // Move the horse inside or outside
  this.toggleLocation = function() {
    this.location = !this.location;
    console.log(`${this.name} is now ${this.location ? "inside" : "outside"}.`);
  };
}

// Let's add 3 horses to the stables!
const Rock = new Horse("Rock", "Stone", "sushi", 5, 300, true, "brown", "lazy");
const Paper = new Horse("Paper", "Whitey", "pasta", 7, 350, false, "black", "stubborn");
const Scissors = new Horse("Scissors", "Snip", "steak", 4, 400, true, "grey", "curious");
// Adding them to the stable
horsesStable.push(Rock, Paper, Scissors);
//horses = [
//   {
//     name: 'Rock',
//     nickname : "Stone"
//     faveTreat: 'sushi',
//     age 5
//     rent: 300 
//     isInside: true,
//     color: "brown"
//     trait: "lazy"
//   },
//   {
//     name: 'Paper',
//     nickname : "Whitey"
//     faveTreat: 'pasta',
//     age 7
//     rent: 350 
//     isInside: false,
//     color: "black"
//     trait: "stubborn"
//   },
//   {
//     name: 'Scissors',
//     nickname : "Snip"
//     faveTreat: 'steak',
//     age 4
//     rent: 400 
//     isInside: true,
//     color: "grey"
//     trait: "curious"
//   }
// ]

// adding another horse using object literal and converted to horse instance
const Shoot = new Horse("Shoot", "Shoota", "chicken", 6, 375, false, "white", "energetic");
horsesStable.push(Shoot);

//stable looking after newHorse
//horses = [
//   {
//     name: 'Rock',
//     nickname : "Stone"
//     faveTreat: 'sushi',
//     age 5
//     rent: 300 
//     isInside: true,
//     color: "brown"
//     trait: "lazy"
//   },
//   {
//     name: 'Paper',
//     nickname : "Whitey"
//     faveTreat: 'pasta',
//     age 7
//     rent: 350 
//     isInside: false,
//     color: "black"
//     trait: "stubborn"
//   },
//   {
//     name: 'Scissors',
//     nickname : "Snip"
//     faveTreat: 'steak',
//     age 4
//     rent: 400 
//     isInside: true,
//     color: "grey"
//     trait: "curious"
//   },
//    {
//     name: 'Shoot',
//     nickname : "Shoota"
//     faveTreat: 'chicken',
//     age 6
//     rent: 375 
//     isInside: false,
//     color: "white"
//     trait: "energetic"
//   }
// ]

// Feeding time! Move the horses inside and give them their treats
function feedHorses() {
  horsesStable.forEach(horse => {
    if (!horse.location) {
      horse.toggleLocation(); // Move them inside
    }
    console.log(`${horse.name} is happily munching on their favorite treat: ${horse.favoriteTreat}.`);
  });
}
feedHorses();

// Calculate how much a horse owes if rent is late
function calculateLateFee(horseName) {
  const horse = horsesStable.find(h => h.name === horseName);
  if (horse) {
    const totalFee = horse.monthlyRent + latePaymentFee;
    console.log(`${horse.name} owes $${totalFee} for late rent (base rent: $${horse.monthlyRent}, late fee: $${latePaymentFee}).`);
    return totalFee;
  } else {
    console.log(`We couldn't find a horse named ${horseName}.`);
  }
}

// Check which horse loves a specific treat
function findHorseWithTreat(desiredTreat) {
  for (let horse of horsesStable) {
    if (horse.favoriteTreat === desiredTreat) {
      console.log(`We found ${horse.name}! They love ${desiredTreat}.`);
      return horse;
    }
  }
  console.log(`No horses here like ${desiredTreat}.`);
}
findHorseWithTreat("pasta");

calculateLateFee("Rock");

// Adjust the number of available stalls
availableStalls -= horsesStable.length;

// Check stall availability
if (availableStalls < 2) {
  console.log("Uh oh, we're running out of space! Time to build more stalls.");
} else {
  console.log(`Good news! We still have ${availableStalls} stalls available.`);
}

// Show off a horse's unique trait
function checkTrait(horseName) {
  const horse = horsesStable.find(h => h.name === horseName);
  if (horse) {
    console.log(`${horse.name} is known for being ${horse.trait}.`);
  } else {
    console.log(`No horse named ${horseName} found.`);
  }
}
checkTrait("Rock");

// Let’s move all the horses outside to enjoy some sun
function moveOutside() {
  horsesStable.forEach(horse => {
    if (horse.location) {
      horse.location = false;
      console.log(`${horse.name} has been moved outside to spend time in the sun.`);
    }
  });
}
moveOutside();

// Bedtime routine: Bring all the horses back inside
function bedtime() {
  console.log("The sun is setting. Time to bring the horses inside.");
  horsesStable.forEach(horse => {
    if (!horse.location) {
      horse.toggleLocation(); // Move them inside
      console.log(`${horse.name} has been brought back inside.`);
    }
  });
}
bedtime();
