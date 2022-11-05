alert("Hello, prototipes!");

function Dog(name, breed, weight) {
    this.name = name;
    this.breed = breed;
    this.weight = weight;
}

Dog.prototype.species = "Canine";

Dog.prototype.bark = function () {
    if (this.weight > 25) {
        console.log(this.name + " says Woof!");
    } else {
        console.log(this.name + " says Yip!");
    }
};

Dog.prototype.run = function () {
    console.log("Run!");
}

Dog.prototype.wag = function () {
    console.log("Wag!");
}

let fido = new Dog("Fido", "Mixed", 38);
let fluffy = new Dog("Fluffy", "Poodle", 30);
let spot = new Dog("Spot", "Chihuahua", 10);

spot.bark = function () {
    console.log(this.name + " says WOOF!")
}

fido.bark();
fido.run();
fido.wag();

fluffy.bark();
fluffy.run();
fluffy.wag();

spot.bark();
spot.run();
spot.wag();

function Robot(name, year, owner) {
    this.name = name;
    this.year = year;
    this.owner = owner;
}

Robot.prototype.maker = "ObjectsRUs";
Robot.prototype.errorMessage = "All systems go.";
Robot.prototype.reportError = function () {
    console.log(this.name + " says " + this.errorMessage);
};
Robot.prototype.spillWater = function () {
    this.errorMessage = "I appear to have a short circuit!";
}

Robot.prototype.speak = function () {
    console.log(this.name + " says Hello!");
};

Robot.prototype.makeCoffee = function () {
    console.log(this.name + " makes coffee!");
};

Robot.prototype.blinkLights = function () {
    console.log(this.name + " blinks lights!");
};

let robby = new Robot("Robby", 1956, "Dr. Morbius");
let rosie = new Robot("Rosie", 1962, "George Jetson");

robby.onOffSwitch = true;
robby.makeCoffee = function () {
    console.log(this.name + " goes to Starbucks!");
};

rosie.cleanHouse = function () {
    console.log(this.name + " cleans house!");
};

console.log(robby.name + " was made by " + robby.maker + " in " + robby.year + " and is owner by " + robby.owner);
robby.makeCoffee();
robby.blinkLights();

console.log(rosie.name + " was made by " + rosie.maker + " in " + rosie.year + " and is owner by " + rosie.owner);
rosie.cleanHouse();

let barnaby = new Dog("Barnaby", "Basset Hound", 55);

Dog.prototype.sitting = false;

Dog.prototype.sit = function () {
    if (this.sitting) {
        console.log(this.name + " is already sitting!");
    } else {
        this.sitting = true;
        console.log(this.name + " is now sitting!");
    }
};

barnaby.sit();
barnaby.sit();
console.log(spot.hasOwnProperty("sitting"));
spot.sit();
spot.sit();
console.log(spot.hasOwnProperty("sitting"));
console.log(fido.hasOwnProperty("sitting"));

function Game() {
    this.level = 0;
}

Game.prototype.play = function () {
    this.level++;
    //console.log("Welcome to level " + this.level)
    this.unlock();
}

Game.prototype.unlock = function () {
    if (this.level === 42) {
        Robot.prototype.deployLaser = function () {
            console.log(this.name + " is blasting you with laser beams.");
        }
    }
}

let game = new Game();

while (game.level < 42) {
    game.play();
}

robby.deployLaser();
rosie.deployLaser();

rosie.reportError();
robby.reportError();
robby.spillWater();
rosie.reportError();
robby.reportError();

console.log(robby.hasOwnProperty("errorMessage"));
console.log(rosie.hasOwnProperty("errorMessage"));