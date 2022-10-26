class Card{
    constructor(name,cost){
        this.name = name;
        this.cost = cost;
    }
}

class Unit extends Card{
    constructor(name,cost,power,resilience){
        super(name,cost);
        this.power = power;
        this.resilience = resilience;
    }

    attack(target){
        target.resilience -= this.power;
    }
}

class Effect extends Card{
    constructor(name,cost,text,stat,magnitude){
        super(name,cost);
        this.text = text;
        this.stat = stat;
        this.magnitude = magnitude;
    }

    play(target){
        if(target instanceof Unit){
            if(this.stat == "resilience"){
                target.resilience += this.magnitude;
            }
            if(this.stat == "power"){
                target.power += this.magnitude;
            }
            console.log(`${this.text}`);
        }else{
            throw new Error("Target must be a Unit!");
        }
    }
}









//Play

//1 - Make an instance of "Red Belt Ninja"
const redBeltNinja = new Unit ("Red Belt Ninja", 3, 3, 4);
console.log(redBeltNinja);

//Make an instance of "Hard Algorithm" and play it on "Red Belt Ninja"
const hardAlgorithm = new Effect ("Hard Algorithm", 2, "increase targets resilience by 3", "resilience", +3);

hardAlgorithm.play(redBeltNinja);

console.log(redBeltNinja);


//2 - Make an instance "Black Belt Ninja"
const blackBeltNinja = new Unit ("Black Belt Ninja", 4, 5, 4);

console.log(blackBeltNinja);

//Make an instance of "Unhandled Promise Rejection" and play it on "Red Belt Ninja"
const unhandledPromiseRejection = new Effect ("Unhandled Promise Rejection", 1, "reduce targets resilience by 2", "resilience", -2);

unhandledPromiseRejection.play(redBeltNinja);

console.log(redBeltNinja);

//3 - Make an instance of "Pair Programming" and play it on "Red Belt Ninja"
const pairProgramming = new Effect ("Pair Programming", 3, "increase targets power by 2", "power", +2);

console.log(redBeltNinja);

pairProgramming.play(redBeltNinja);

console.log(redBeltNinja);

//"Red Belt Ninja" uses the attack method on "Black Belt Ninja"
redBeltNinja.attack(blackBeltNinja);

console.log(blackBeltNinja);