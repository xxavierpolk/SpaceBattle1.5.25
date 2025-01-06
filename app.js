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
            target.hullull -= this.firepower;
        } else {
            console.log('Attack avoided')
        }
    }
}



// My spaceship / USS ASSEMBLY
const myPlayer = new SpaceShip("USS ASSEMBLY", 20, 5, 0.7);


// Alien Gang
const alienMember = new SpaceShip("Alien Member 1", 6, 3, 0.6)

// Game Round 

// Battle Round

// New Round or Retreat




