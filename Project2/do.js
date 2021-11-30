// dataobjects

class FoodDO {
    constructor() {
        console.log("DO created!");
        this.pizza = "cheese";
        this.drinks = ["soda", "water"];
        this.cost = 100;
        this.meat = "steak";
    }
}

var foodDO = new FoodDO();

for (var p in foodDO) {
    console.log(p + ":" + foodDO[p]);
}