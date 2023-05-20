const readline = require('readline');
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

let N;


rl.on('line', function(line) {

    if(!N){
        N = parseInt(line)
        for(let i=N; i>=1; i--){
            console.log('*'.repeat(i))
        }
        rl.close()
    }
  
    
    
}).on('close', function() {
    
    process.exit();
});
