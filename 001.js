const readline = require("readline");
const { arrayBuffer } = require("stream/consumers");
const rl = readline.createInterface({

	input: process.stdin,
    output: process.stdout,

});

let T = 5;
let burger = []
let soda = []

function min(arr){
    let min = arr[0]
    for(let i=1; i<arr.length; i++){
        if(arr[i] < min) min = arr[i]
    }
    return min
}


rl.on("line", function (line) {

    if(T >= 3){
        burger.push(parseInt(line))
    }
    else{
        soda.push(parseInt(line))
    }
    T--
    if(T==0) rl.close()

    

}).on("close", function () {

    console.log(min(burger)+min(soda)-50)
    process.exit();  

});




