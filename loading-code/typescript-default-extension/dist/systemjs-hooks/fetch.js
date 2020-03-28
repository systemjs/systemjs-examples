//@ts-ignore
System.shouldFetch = () => true;
const endsWith = (str, suffix) => str.indexOf(suffix, str.length - suffix.length) !== -1;
const origFetch = System.constructor.prototype.fetch;
System.constructor.prototype.fetch = function (url) {
    const lastSlash = url.lastIndexOf('/');
    const lastDot = url.lastIndexOf('.');
    const hasFileExtension = lastDot > lastSlash;
    url = hasFileExtension ? url : `${url}.js`;
    return origFetch.call(this, url);
};
//# sourceMappingURL=fetch.js.map