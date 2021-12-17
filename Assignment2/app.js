class Application {
    constructor() {
        console.log("singleton created");
        let controller = new Controller();
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

class Person {
    constructor(name) {
        console.log("Person here");
        this.name = name;
        console.log(this.name);
    }
    
}

class Student extends Person {
    constructor(name, grades, average, computer) {
        console.log("Student:Person here.");
        super(name);
        this.grades = grades;
        this.average = average;
        this.computer = computer;
    }
  
    
}



class Controller {
    constructor() {
        console.log("controller here");
        this.model = new Model();
        this.view = new View();
        document.querySelector("#btn").addEventListener("click", (e) => this.onClick(e));

    }
    onClick(e) {
        e.preventDefault();
        let name = document.querySelector("#name").value;
        let grades = document.querySelector("#grades").value;
        let computer = document.querySelector("#computer").value;
        let gradesArr = Utils.convertToInt(grades);
        // validate that these are integers, otherwise make them do it again
        if (!parseInt(grades)) {
            document.getElementById("result").innerHTML = "Non-integer data detected. Please re-enter correct values.";
            document.myform.reset();
            this.onClick(e); // start over
        }
        let event = new Event("send_data");
        let dataDO = new DataObject();
        dataDO.name = name;
        dataDO.grades = gradesArr;
        dataDO.computer = computer;
        event.data = dataDO;
        document.getElementById("result").innerHTML = "Data accepted.";
        document.dispatchEvent(event);
    }   
}

class DataObject {
    constructor() {
        this.name = "";
        this.grades = [];
        this.computer = "";
        this.average = 0;
    }
}

class Model {
    constructor() {
        console.log("model here");
        document.addEventListener("send_data", (e) => this.calc(e));
    }
    calc(e) {
        console.log("processing", e);
        let average = Utils.getAverage(e.data.grades);
        e.data.average = average;
        let event = new Event("send_to_view");
        event.data = e.data;
        document.dispatchEvent(event);
        

    }
}


class View {
    constructor() {
        console.log("view here");
        document.addEventListener("send_to_view", (e) => this.displayTable(e));
    }
    displayTable(e) {
        // don't let our output disappear
        e.preventDefault(); 
        // set the table (create table elements)
        let myTable = document.createElement("table"), row = myTable.insertRow(), cell;
        // number of cells per row is 4
        let perrow = 4;
        // add cells
        for (let d in e.data) {
            cell = row.insertCell();
            cell.innerHTML = e.data[d];
            let next = d;
            // break into next row (if there is one)
            if (next % perrow == 0 && next != e.data.length) {
                row = myTable.insertRow();
            }
        }
        // tie the table to the container and call it good.
        document.getElementById("container").appendChild(myTable);
    } 
}



(function () {
    console.log("page loaded");
    const myApp = Application.getInstance();
})();
