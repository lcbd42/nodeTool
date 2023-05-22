const readline = require('readline');
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

let T = 3;
let times = [];
let result = [];

rl.on('line', function(line) {
    if(T === 0){
        rl.close()
    }
    else{
        times = line.split(' ').map(el => parseInt(el));

        // 출근 시간이 7시 이전인 경우 7시로 설정
        if(times[0] < 7){
            times[0] = 7;
            times[1] = 0;
            times[2] = 0;
        }

        // 퇴근 시간이 23시 이후인 경우 23시로 설정
        if(times[3] >= 23){
            times[3] = 23;
            times[4] = 0;
            times[5] = 0;
        }

        // 근무 시간 계산
        let hours = times[3] - times[0];
        let minutes = times[4] - times[1];
        let seconds = times[5] - times[2];

        // 분과 초가 음수인 경우 보정
        if(minutes < 0){
            hours -= 1;
            minutes += 60;
        }
        if(seconds < 0){
            if(minutes === 0){
                hours -= 1;
                minutes += 60;
            }
            minutes -= 1;
            seconds += 60;
        }

        result.push(`${hours} ${minutes} ${seconds}`);
        T--;
        if(T === 0) rl.close();
    }
}).on('close', function() {
    result.forEach(el => console.log(el));
    process.exit();
});
