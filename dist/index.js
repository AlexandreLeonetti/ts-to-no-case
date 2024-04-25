/**
 * Test whether a string is camel-case.
 */
const hasSpace = /\s/;
const hasSeparator = /(_|-|\.|:)/;
const hasCamel = /([a-z][A-Z]|[A-Z][a-z])/;
function toNoCase(string) {
    if (hasSpace.test(string))
        return string.toLowerCase();
    if (hasSeparator.test(string))
        return (unseparate(string) || string).toLowerCase();
    if (hasCamel.test(string))
        return uncamelize(string).toLowerCase();
    return string.toLowerCase();
}
/**
 * Separator splitter.
 */
const separatorSplitter = /[\W_]+(.|$)/g;
function unseparate(string) {
    return string.replace(separatorSplitter, function (m, next) {
        return next ? ' ' + next : '';
    });
}
/**
 * Camelcase splitter.
 */
const camelSplitter = /(.)([A-Z]+)/g;
function uncamelize(string) {
    return string.replace(camelSplitter, function (m, previous, uppers) {
        return previous + ' ' + uppers.toLowerCase().split('').join(' ');
    });
}
// Export the functions
export { toNoCase, unseparate, uncamelize };
