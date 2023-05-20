const readline = require('readline');
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

let input;


function factorial(n){
    if (n === 0 || n === 1) {
      return 1;
    }
    else {
      return n * factorial(n - 1);
    }
}

rl.on('line', (line) => {
    if(!input && line >= 0 && line <= 20) {
        input = parseInt(line)
        rl.close()
    }

}).on('close', ()=>{
    console.log(factorial(input))
    process.exit();
})

