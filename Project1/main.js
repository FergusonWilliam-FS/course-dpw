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
        // five cells per row
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
            var next = i;
            if (next % perrow == 0 && next != this.students.length) {
                row = myTable.insertRow();
            }
        });
        // attach table to container and we're good!
        document.getElementById("container").appendChild(myTable);
    }
        

    onClick(e) {
        e.preventDefault();
        document.getElementById("school").value = Student.school;
        let name = document.querySelector("#name").value;
        let grades = document.querySelector("#grades").value;
        let computer = document.querySelector("#computer").value;
        let gradesArr = Utils.convertToInt(grades);
        if (!parseInt(grades)) { // if what we enter for grades isn't valid integers in any way...
            document.getElementById("result").innerHTML = "Non-integer data detected - please use numbers for Grades."; // nope.
            document.myform.reset();
            this.onClick(e); // start over
        }
        else { // but if what we entered as grades are integers
            let average = Utils.getAverage(gradesArr); // go ahead and compute an average
            let student = new Student(name, grades, average, computer); // stuff this all into the object
            this.students.push(student); // stuff the object into the the aray
            console.log(this.students); // console ouput that it has been accepted.
            document.getElementById("result").innerHTML = "Student Accepted."; // we're good
            document.myform.reset();
            document.getElementById("school").value = Student.school;
        }


    }   
}

(()=> { 
	const app = new App(); 
})();
