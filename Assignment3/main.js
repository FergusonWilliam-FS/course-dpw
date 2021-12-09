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
        switch (robot) {
            case "dummy":
            case "robbie":
            case "terminator":
                RobotFactory.CreateRobot(robot);
                this.rn.push(robot);
                console.log(this.rn.length);
                document.getElementById("result").innerHTML = "Class " + robot + " successfully instantiated.";
                break;
            default:
                document.getElementById("result").innerHTML = "Don't know " + robot + ". Sorry. Please refresh.";
                document.myform.reset();
        }
    }

    


    viewClick(e) {
        e.preventDefault();
        console.log("view here");
        let rname = document.querySelector("#robot").value;
        console.log("hi. i have " + rname + ".");
        for (let x = 0; x < this.rn.length; x++) {
            let image = new Image();
            image.src = `./assets/${this.rn[x]}.jpeg`;
            for (let y = 0; y < this.rn.length; y++) {
                document.getElementById("result").innerHTML = "Robot " + this.rn[y] + " created.";
            }
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
