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
            target.jull -= this.firepower;
        } else {
            console.log('Attack avoided')
        }
    }
}



// My spaceship / USS ASSEMBLY

// Alien Gang

// Game Round 

// Battle Round

// New Round or Retreat




