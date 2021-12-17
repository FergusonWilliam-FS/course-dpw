class Application {
    constructor() {
        console.log("singleton created");
        let controller = new Controller();
    }

    static getInstance()
    {
        if (!Application._instance) {
            Application._instance = new Application();
            return Application._instance;
        }
        else {
            window.alert("Attempt to create a second singleton not allowed!");
        }
    }
}

class Utils {
    constructor() {
        console.log("utils created");
    }
    static getNames(arr) {
        let names = "";
        arr.forEach(function (e) {
            names += e;
        });
        return names;
    }
}

class Controller {
    constructor() {
        this.model = new Model();
        this.view = new View();
        document.querySelector("#btnAdd").addEventListener("click", (e) => this.onAdd(e));
        document.querySelector("#btnView").addEventListener("click", (e) => this.onView(e));
    }
    onAdd(e) {
        e.preventDefault();
        let rname = document.querySelector("#robot").value;
        let event = new Event("send_data");
        let ds = new DataStruct();
        ds.productName = rname;
        event.data = ds;
        document.getElementById("result").innerHTML = "Class " + rname + " instantiated.";
        document.dispatchEvent(event);
    }
    
    onView(e) {
        e.preventDefault();
        
    }
}



class DataStruct {
    constructor() {
        console.log("datastruct here");
        this.productName = "";
    }
}

class Model {
    constructor() {
        console.log("model here");
        document.addEventListener("send_data", (e) => this.getRobotName(e));
    }
    getRobotName(e) {
        console.log("getting robot name", e);
        let rname = Utils.getNames(e.data.names);
        console.log("recvd " + rname);
        e.data.names = rname;
        let event = new Event("send_to_view");
        event.data = e.data;
        document.dispatchEvent(event);
    }
}

class View {
    constructor() {
        console.log("view here");
        document.addEventListener("send_to_view", (e) => this.displayData(e));
    }
    displayData(e) {
        // begin code
        let image = new Image();
        image.src = `./assets/${e}.jpeg`;
        document.body.appendChild(image);
        document.getElementById("result").innerHTML = "Robot " + e + "created."
        
    }
}

(function () {
    console.log("page loaded");
    const myApp = Application.getInstance();
})();