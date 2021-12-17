class RobotFactory {
    constructor() {
        console.log("constructor here"); // 
    }
    static createRobot(type) {
        if (type == "dummy") {
            return new Dummy()
        }
        else if (type == "robby") {
            return new Robby()
        }
        else if (type == "terminator") {
            return new Terminator()
        }
        else {
            window.alert("Robot " + type + " doesn't exist.");
        }
    }
}