class Ninja {
    constructor(name, health=10) {
        this.name = name;
        this.health = health;
        this.speed = 3;
        this.strength = 3;
    }

    sayName() {
        console.log(`I am ${this.name}`);
        return this;
    }

    showStats() {
        console.log(`Name:    ${this.name}`);
        console.log(`Health:  ${this.health}`);
        console.log(`Speed:   ${this.speed}`);
        console.log(`Stength: ${this.strength}`);
        return this;
    }

    drinkSake() {
        console.log(`${this.name} drank sake.`);
        this.health += 10;
        return this;
    }
}

class Sensei extends Ninja{
    constructor(name, health, speed, strength, wisdom){
        super(name);
        this.health = 200;
        this.speed = 10;
        this.strength = 10;
        this.wisdom = 10;

    }

    speakWisdom(){
        super.drinkSake();
        console.log('What one programmer can do in one month, two programmers can do in two months.');
        return this;
    }
}

const superSensei = new Sensei("Master Splinter", 200, 10, 10);
superSensei.speakWisdom().showStats();
