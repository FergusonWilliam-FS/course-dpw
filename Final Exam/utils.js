class Utils {
    constructor() {
        console.log("utils created");
    }
    static convertTime(m) {
        let result = m;
        let hours = (result / 60);
        let rhours = Math.floor(hours);
        let min = (hours - rhours) * 60;
        let rminutes = Math.round(min);
        return "Run time: " + rhours + " hours and " + rminutes + " minutes.";
    }
}