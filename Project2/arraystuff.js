function ArrayStuff() {
    var stuff = [4, 5, 6];
    stuff.push(stuff[1] + 5);
    stuff.splice(0,1);
    stuff[1] = stuff.length - 1;
    console.log(stuff[1]);
}

ArrayStuff();