class Application {
    constructor() {
        console.log("singleton created");
        document.querySelector("#btnSubmit").addEventListener("click", (e) => this.submitClick(e));
        document.querySelector("#btnView").addEventListener("click", (e) => this.viewClick(e));
        this.rn = [];
    }

    submitClick(e) {
        e.preventDefault();
        console.log("sumbit here");
        let robot = document.querySelector("#robot").value;
        let factoryRobot = RobotFactory.CreateRobot(robot);
        if (factoryRobot != "-1") {
            this.rn.push(factoryRobot);
            document.getElementById("result").innerHTML = "Class " + robot + " successfully instantiated.";
        }
        else {
            document.getElementById("result").innerHTML = "Crack kills!";
        }
        
    }

    viewClick(e) {
        e.preventDefault();
        console.log("view here");
        console.log("hi. i have " + this.rn + ".");
        for (let x = 0; x < this.rn.length; x++) {
            let image = new Image();
            image.src = `./assets/${this.rn[x].image}.jpeg`;
            document.getElementById("result").innerHTML = "Robot " + this.rn[x].image + " created.";
            document.body.appendChild(image);
        }
        
    }

    static getInstance()
    {
        if (!Application._instance)
        {
            Application._instance = new Application();
            return Application._instance;
        }
        else
        {
            Error("Attempt to create a second Singleton not allowed. Aborting.");
        }
    }

}


(function () {
    console.log("page loaded");
    const myApp = Application.getInstance();
})();
