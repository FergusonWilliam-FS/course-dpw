(function () {
    Array.prototype.superPush = function (...arg) {
        arg.forEach((e) => {
            this.push(e);
        });
        var evt = new Event("array_changed");
        evt.array = this;
        evt.added = arg;
        document.dispatchEvent(evt);
    }
})();