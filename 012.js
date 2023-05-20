/*
NLCS: North London Collegiate School
BHA: Branksome Hall Asia
KIS: Korea International School
SJA: St. Johnsbury Academy
*/

const readline = require('readline');
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

let input;

rl.on('line', function(line) {

    input = line
    
    switch (input) {
    case 'NLCS':
        console.log('North London Collegiate School');
        break;
    case 'BHA':
        console.log('Branksome Hall Asia');
        break;
    case 'KIS':
        console.log('Korea International School');
        break;
    case 'SJA':
        console.log('St. Johnsbury Academy')
    default:
        process.exit();
    }
    rl.close()

    
    
}).on('close', function() {

    process.exit();
});
