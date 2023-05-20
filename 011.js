const readline = require('readline');
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

let str;
let target;



rl.on('line', function(line) {

    if(!str){
        str = line
    }
    else if(!target){
        target = parseInt(line)
        if(target >= 1 && target <= str.length){
            console.log(str[target-1])
            rl.close()
        }
    }
    
}).on('close', function() {

    process.exit();
});
