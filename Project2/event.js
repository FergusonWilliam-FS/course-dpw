(function () {
    document.addEventListener("phone_ringing", onDone);
    document.dispatchEvent(new Event("phone_ringing"));
    document.querySelector("#btn").addEventListener("click", onDone);

    function onDone(e) {
        console.log("Done", e);
    }
})();
