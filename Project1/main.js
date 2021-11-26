class Utils {
    constructor() {
        console.log("utils created");
    }
    static getAverage(arr) {
        var total = 0;
        arr.forEach(function (e) {
            total += e;
        });
        return total / arr.length;
    }
    static convertToInt(str) {
        let temp = str.split(',');
        temp.forEach((el, index) => {
            el = Number(el);
            if (!parseInt(el)) {
                document.getElementById("result").innerHTML = "Non-integer data detected.";
                return 0;
            }

            temp[index] = el;
        });
        return temp;
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

Student.school = "Full Sail University"; // 


class App {
    constructor() {
        console.log("App here.");
        this.students = [];
        document.querySelector("#btn").addEventListener("click", (e) => this.onClick(e));
        document.querySelector("#btnDone").addEventListener("click", (e) => this.onSubmit(e));
        document.getElementById("school").value = Student.school;

    }

    onSubmit(e) {
        e.preventDefault();
        console.log("Done pressed.");
        // create table element
        var myTable = document.createElement("table"), row = myTable.insertRow(), cell;
        // four cells per row
        var perrow = 5;
        this.students.forEach((value, i) => { // get our data from the array
            // add cell
            cell = row.insertCell();
            cell.innerHTML = value.name;
            cell = row.insertCell();
            cell.innerHTML = value.grades;
            cell = row.insertCell();
            cell.innerHTML = value.average;
            cell = row.insertCell();
            cell.innerHTML = value.computer;
            cell = row.insertCell();
            cell.innerHTML = Student.school;
            // break into the next row
            var next = i + 1;
            if (next % perrow == 0 && next != this.students.length) {
                row = myTable.insertRow();
            }
        });
        // attach table to container and we're good!
        document.getElementById("container").appendChild(myTable);
    }
        

    onClick(e) {
        e.preventDefault();
        let name = document.querySelector("#name").value;
        let grades = document.querySelector("#grades").value;
        let computer = document.querySelector("#computer").value;
        let gradesArr = Utils.convertToInt(grades);
        let average = Utils.getAverage(gradesArr);
        let student = new Student(name, grades, average, computer);
        this.students.push(student);
        console.log(this.students);
        document.getElementById("result").innerHTML = "Student Accepted.";
        let form = document.getElementById('form');
        form.reset();
    }   
}

(()=> { 
	const app = new App(); 
})();
