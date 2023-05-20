const readline = require('readline');
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});
// Joe 16 34
let numbers = [];
let name;
let outputs = [];


rl.on('line', function(line) {

    numbers = line.split(' ').map((el)=>parseInt(el)).filter(el=>!isNaN(el))
    name = line.split(' ').filter(el=>isNaN(el))

    if(name=='#' && numbers[0]===0 || numbers[1]===0) rl.close()
    else{
        if(numbers[0] > 17 || numbers[1] >= 80){
            outputs.push(`${name} Senior`)
        }
        else{
            outputs.push(`${name} Junior`)
        }
    }
    
    
    
}).on('close', function() {
    outputs.forEach(el=>console.log(el))
    process.exit();
});
