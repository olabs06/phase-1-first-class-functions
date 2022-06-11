function receivesAFunction(cb){
    return (cb ());
}

function returnsANamedFunction (cb) {
    return (function fn (){
        return (cb ());
    })
}

function returnsAnAnonymousFunction(cb) {
    return (function (){
        return (cb());
    })
}