/*
    Write a function that returns a promise that resolves after n seconds have passed, where n is passed as an argument to the function.
*/

function wait(n) {
    let p = new Promise (function(resolves){
        setTimeout(resolves, n * 1000)
    })
    return p
}


wait(1).then(function(){
    console.log("kualll")
})


module.exports = wait;
