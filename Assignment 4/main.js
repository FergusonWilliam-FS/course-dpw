class Application {
    constructor() {
        console.log("singleton created");
        let controller = new Controller();
    }
    static getInstance() {
        if (!Controller._instance) {
            Controller._instance = new Controller();
        }
        else {
            throw "A second singleton cannot be created. Aborting";
        }
    }
}

class DataObject {
    constructor() {
        console.log("dataobject here");
        this.grades = [];
        this.average = 0;
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
        let g1 = document.querySelector("#grade1").value;
        let g2 = document.querySelector("#grade2").value;
        let g3 = document.querySelector("#grade3").value;
        let gradesArr = [g1, g2, g3];
        let event = new Event("send_data");
        let dataDO = new DataObject();
        dataDO.grades = gradesArr;
        console.log(gradesArr);
        event.data = dataDO;
        document.dispatchEvent(event);        
    }
}

class Model {
    constructor() {
        console.log("model here");
        document.addEventListener("send_data", (e) => this.calc(e));
    }
    calc(e) {
        let average = Utils.getAverage(e.data.grades);
        e.data.average = average;
        let event = new Event("viewEvent");
        event.data = e.data;
        document.dispatchEvent(event);
  
    }
}


class View {
    constructor() {
        console.log("view here");
        document.addEventListener("viewEvent", e => this.drawChart(e));
    }
    drawChart(e) {
        // start code here
        console.log(e.data.grades);
        let barColors = ["red", "green", "blue"];
        let xValues = ["Grade 1", "Grade 2", "Grade 3"];
        let yValues = e.data.grades;
        console.log("i have: " + yValues);
        
        new Chart("chart", {
            type: "bar",
            data: {
              labels: xValues,
              datasets: [{
                backgroundColor: barColors,
                  data: yValues
              }]
            },
            scales: {
                yValues: {
                    min: 0,
                    max: 100,
                }
            },
            options: {
              legend: {display: false},
              title: {
                display: true,
                  text: "Average: " + e.data.average
              }
            }
          });
    }
}

(function () {
    console.log("page loaded");
    const myApp = Application.getInstance();
})();