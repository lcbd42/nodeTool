// 영문 대소문자,숫자가 1번 이상 반복 + foreach 출력
const readline = require('readline');
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

let N;
let passwords = [];

rl.on('line', (input) => {
  if (!N) {
    N = parseInt(input);
  } 
  else {
    const password = input.trim();
    if (password.length >= 6 && password.length <= 9 && /^[a-zA-Z0-9]+$/.test(password)) {
      passwords.push('yes');
    }
    else {
      passwords.push('no');
    }
    if (passwords.length === N) {
      rl.close();
    }
  }

}).on('close', ()=>{
    passwords.forEach(el => console.log(el));
})


