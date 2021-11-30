(function () {
    var grades = [70, 80, 90];
    document.querySelector("#btn").addEventListener("click", onClick);
    document.addEventListener("array_changed", onChanged);

    function onClick(e) {
        grades.superPush(100);
    }

    function onChanged(e) {
        console.log("You added " + e.added + " to the array");
        console.log(e.array)
    }
})();