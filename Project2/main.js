window.addEventListener("load", function () {
    console.log("page loaded");
    var myAssignment = Assignment.getInstance();
});

class Assignment
{
    constructor() {
        console.log("singleton created");
        var controller = new Controller();
    }

    static getInstance()
    {
        if (!Assignment._instance)
        {
            Assignment._instance = new Assignment();
            return Assignment._instance;
        }
        else
        {
            throw "Attempt to create a second Singleton not allowed. Aborting.";
        }
    }
}

class Model {
    constructor() {
        console.log("model created");
    }
    process(d) {
        var total = 0;
        d.forEach(function (e) {
            total += e;
        })
        return total / d.length;
    }
}

class View {
    constructor() {
        console.log("view created");
    }
}

class Controller {
    constructor() {
        console.log("controller created");
        this.model = new Model();
        this.view = new View();
        var grades = [70, 80, 90];
        var result = this.model.process(grades);
        console.log(result);
    }
}