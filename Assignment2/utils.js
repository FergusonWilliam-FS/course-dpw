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

