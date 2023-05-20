const readline = require('readline');
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

let T;
let outputs = [];

rl.on('line', function(line) {

    if(!T){
        T = parseInt(line)
    }
    else{
        
        outputs.push(line.toLowerCase())

        T--
        if(T == 0) rl.close()
    }
    

}).on('close', function() {
    
    outputs.forEach(el=>console.log(el))
    process.exit();
});
