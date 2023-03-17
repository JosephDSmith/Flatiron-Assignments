function receivesAFunction(Spy) {
    return Spy()
}

function returnsANamedFunction() {
    return function namedFunction(){};
}
function returnsAnAnonymousFunction() {
    return function(){};
}