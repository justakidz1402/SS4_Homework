//1
function findEven(number){
    for (let i = 4; i < number + 1; i++) {
        if(i % 2 == 0){
            console.log(i);
        }
    }
}
findEven(20);

//3
function numberOneTriangle(){
    for (let i = 0; i < 5; i++) {
        for (let j = 0; j <= i; j++) {
            document.writeln("1");
        }
        document.writeln("<br/>");
    }
}
numberOneTriangle();

//4
let timer = new Date();

function clock(){
    let hour = timer.getHours();  
    let minute = timer.getMinutes();  
    let second = timer.getSeconds(); 
    if(hour < 10) {
        hour = "0" + hour;
    }
    if(minute < 10) {
        minute = "0" + minute;
    }
    if(second < 10) {
        second = "0" + second;
    }
    
    setInterval((second) => {
        second += 1;
    }, 1000)

    document.getElementById("clock").innerHTML = hour + ":" + minute + ":" + second;
}

clock();




