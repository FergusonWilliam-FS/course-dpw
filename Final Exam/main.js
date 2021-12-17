class Application {
    constructor() {
        console.log("application here");
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
        this.title = "";
        this.duration = "";
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
        let title = document.querySelector("#movie").value;
        let dataDO = new DataObject();
        let event = new Event("callModel")
        Object.values(data);
        switch (title) {
            case "Star Wars":
                dataDO.title = data.movies[0].title;
                dataDO.duration = data.movies[0].duration;
                console.log(data.movies[0].title, data.movies[0].duration);
                break;
            case "The Matrix":
                dataDO.title = data.movies[1].title;
                dataDO.duration = data.movies[1].duration;
                console.log(data.movies[1].title, data.movies[1].duration);
                break;
            case "Alien":
                dataDO.title = data.movies[2].title;
                dataDO.duration = data.movies[2].duration;
                console.log(data.movies[2].title, data.movies[2].duration);
                break;
            default:
                console.log("movie not in database");
                break;
        }
        event.data = dataDO;
        document.dispatchEvent(event);

    }

}

class Model {
    constructor() {
        console.log("model here");
        document.addEventListener("callModel", (e) => this.getMovieData(e));
    }
    getMovieData(e) {
        console.log("model here. i show: " + e.data.title + " and a duration of " + e.data.duration);
        let runtime = Utils.convertTime(e.data.duration);
        e.data.duration = runtime;
        console.log(runtime);
        let event = new Event("callView");
        event.data = e.data;
        document.dispatchEvent(event);
    }

}

class View {
    constructor() {
        console.log("view here");
        document.addEventListener("callView", e => this.showResults(e));
    }
    showResults(e) {
        e.preventDefault();
        let poster = ["starwars.jpg", "matrix.jpg", "alien.jpg"];
        console.log(e.data.title);
        switch (e.data.title) {
            case "Star Wars":
                let img_sw = new Image();
                img_sw.src = `/assets/${poster[0]}`;
                console.log(img_sw.src);
                document.getElementById("title").innerHTML = e.data.title;
                document.getElementById("duration").innerHTML = e.data.duration;
                document.body.appendChild(img_sw);
                break;
            case "The Matrix":
                let img_tm = new Image();
                img_tm.src = `/assets/${poster[1]}`;
                console.log(img_tm.src);
                document.getElementById("title").innerHTML = e.data.title;
                document.getElementById("duration").innerHTML = e.data.duration;
                document.body.appendChild(img_tm);
                break;
            case "Alien":
                let img_a = new Image();
                img_a.src = `/assets/${poster[2]}`;
                console.log(img_a.src);
                document.getElementById("title").innerHTML = e.data.title;
                document.getElementById("duration").innerHTML = e.data.duration;
                document.body.appendChild(img_a);
                break;
            default:
                console.log("nope");
                break;
        }
    }
}



(function () {
    console.log("page loaded");
    const myApp = Application.getInstance();
})();