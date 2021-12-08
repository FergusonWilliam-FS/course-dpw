class Application {
    constructor() {
        console.log("singleton created");
        document.querySelector("#btnSubmit").addEventListener("click", (e) => this.submitClick(e));
        document.querySelector("#btnView").addEventListener("click", (e) => this.viewClick(e));

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
                document.getElementById("result").innerHTML = "Robot " + robot + " successfully created.";
                break;
            default:
                window.alert("Don't know how to create that robot.");
                document.myform.reset();
        }
    }


    viewClick(e) {
        e.preventDefault();
        console.log("view here");
        let rname = document.querySelector("#robot").value;
        console.log("hi. i got " + rname + " here.");
        let image = new Image();
        image.src = `./assets/${rname}.jpeg`;
        document.body.appendChild(image);
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
            throw "Attempt to create a second Singleton not allowed. Aborting.";
        }
    }
}



(function () {
    console.log("page loaded");
    const myApp = Application.getInstance();
})();
