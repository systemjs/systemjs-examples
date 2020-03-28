(function () {
    const endsWithFileExtension = /\/?\.[a-zA-Z]{2,}$/;
    const originalResolve = System.constructor.prototype.resolve;
    System.constructor.prototype.resolve = function () {
        // apply original resolve to make sure importmaps are resolved first
        const url = originalResolve.apply(this, arguments);
        // append .js file extension if url is missing a file extension
        return endsWithFileExtension.test(url) ? url : url + ".js";
    };
})();
//# sourceMappingURL=resolve.js.map