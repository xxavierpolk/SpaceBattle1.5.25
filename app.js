// Template or Class for each spaceship
class SpaceShip {
    constructor (name, hull, firepower, accuracy) {
        this.name = name;
        this.hull = hull;
        this.firepower = firepower;
        this.accuracy = accuracy;
    }

    attack(target) {
        console.log('${this.name} attacks ${target.name}!')
        if (Math.random() < this.accuracy) {
            console.log('Attack Landed! ${target.name} eats ${this.firepower} damage.');
            target.hull -= this.firepower;
        } else {
            console.log('Attack avoided')
        }
    }
}



// My spaceship / USS ASSEMBLY
const myPlayer = new SpaceShip("USS ASSEMBLY", 20, 5, 0.7);


// Alien Gang with a function
function generateAlienGang(numOfShips) {
    const alienGang = [];
    for (let i = 0; i < numOfShips; i++) {
        const hull = Math.floor(Math.random() * (6 - 3 + 1) + 3);
        const firepower = Math.floor(Math.random() * (4 - 2 + 1) + 2);
        const accuracy = Math.random() * (0.8 - 0.6) + 0.6;
        alienGang.push(new SpaceShip('Alien Ship{i  $+ 1}', hull, firepower, accuracy));
    }
    return alienGang;

}

// Creating the Alien Gang Fleet

const alienFleet = generateAlienGang(6)
console.log("Alien Fleet", alienFleet)


// Game Round 

// Battle Round

// New Round or Retreat




