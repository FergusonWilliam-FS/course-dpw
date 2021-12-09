// simple factory

class RobotFactory {
    constructor() {
        console.log("constructor created");
     }
    static CreateRobot(type) {
        if (type == "dummy") {
            return new Dummy()
        }
        else if (type == "robbie") {
            return new Robbie()
        }
        else if (type == "terminator") {
            return new Terminator()
        }
        else {
            return -1;
        }
    }   
}