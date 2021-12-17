class Utils {
    constructor() {
        console.log("utils created")
    }
    static getAverage(arr) {
        var total = 0;
        arr.forEach(function (e) {
            total += Number(e);
        });
        console.log(total);
        return total / arr.length;
    }
}