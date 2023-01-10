function receivesAFunction(callback) {
    callback()
}

function returnsANamedFunction() {
    return function receivesANamedFunction(something) {
        console.log(something)
    }
}

function returnsAnAnonymousFunction() {
    return function() {
        console.log("anon")
    }
}
