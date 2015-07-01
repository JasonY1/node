function foo() {
    var bar;
    quux = 'outside zip';
    function zip() {
        var quux = 'variable';
        bar = true;
    }
    return zip;
}