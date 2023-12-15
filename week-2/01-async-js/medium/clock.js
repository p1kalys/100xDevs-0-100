function zero(val){
    return val < 10 ? "0" + val : val;
}

function time(){
    const present_time = new Date();

    const hour = zero(present_time.getHours());
    const min = zero(present_time.getMinutes());
    const sec = zero(present_time.getSeconds());

    console.log(`${hour} : ${min} : ${sec}`);
}

setTimeout(time, 1000);


function timeAMPM(){
    const present_time = new Date();

    let hours = zero(present_time.getHours());
    const min = zero(present_time.getMinutes());
    const sec = zero(present_time.getSeconds());
    const AMPM = hours>=12 ? "PM" : "AM";
    hours = hours % 12;  

    console.log(`${hours} : ${min} : ${sec} ${AMPM}`);
}

setTimeout(timeAMPM, 2000);


// Another Approach 

function disp1(){
const sec_time = new Date().toTimeString().slice(0,8);
console.log(sec_time);
}

setTimeout(disp1,3000);

function disp2(){
const sec_time = new Date().toLocaleTimeString();
console.log(sec_time);
}

setTimeout(disp2,4000);