
//MODELO
const ANIVERSARY = new Date(2022, 07, 04, 00, 00, 00, 0);
let timeLeft = {};

//VISTA
const showUnits = (day, hour, minute, second) => {
    
    let daysLeftElement = document.getElementById('daysLeft'),
        hoursLeftElement = document.getElementById('hoursLeft'),
        minutesLeftElement = document.getElementById('minutesLeft'),
        secondsLeftElement = document.getElementById('secondsLeft');

    daysLeftElement.innerHTML = day;

    if (second < 10 && minute < 10 && hour < 10) {    
        hoursLeftElement.innerHTML = '0' + hour;
        minutesLeftElement.innerHTML = '0' + minute;
        secondsLeftElement.innerHTML = '0' + second;
    } else if (minute < 10 && hour < 10) {
        hoursLeftElement.innerHTML = '0' + hour;
        minutesLeftElement.innerHTML = '0' + minute;
        secondsLeftElement.innerHTML = second;
    } else if (second < 10 && hour < 10) {
        hoursLeftElement.innerHTML = '0' + hour;
        minutesLeftElement.innerHTML = minute;
        secondsLeftElement.innerHTML = '0' + second;
    } else if (second < 10 && minute < 10) {
        hoursLeftElement.innerHTML = hour;
        minutesLeftElement.innerHTML = '0' + minute;
        secondsLeftElement.innerHTML = '0' + second;
    } else if (hour < 10) {
        hoursLeftElement.innerHTML = '0' + hour;
        minutesLeftElement.innerHTML = minute;
        secondsLeftElement.innerHTML = second;
    } else if (minute < 10) {
        hoursLeftElement.innerHTML = hour;
        minutesLeftElement.innerHTML = '0' + minute;
        secondsLeftElement.innerHTML = second;
    } else if (second < 10) {
        hoursLeftElement.innerHTML = hour;
        minutesLeftElement.innerHTML = minute;
        secondsLeftElement.innerHTML = '0' + second;
    } else {
        hoursLeftElement.innerHTML = hour;
        minutesLeftElement.innerHTML = minute;
        secondsLeftElement.innerHTML = second;
    }
}

const surprise = () => {

}

//Controlador
const getRemainTime = () =>{
    let now = new Date();
    let remainTime = (ANIVERSARY - now) / 1000;

    timeLeft = 
        {
            s: Math.floor(remainTime % 60),
            m: Math.floor(remainTime / 60 % 60),
            h: Math.floor(remainTime / 3600 % 24),
            d: Math.floor(remainTime / (3600*24))
        };
}

const countDown = () => {
    return new Promise((resolve, reject) => {
        setTimeout(resolve, 1000);
    });
}

const start = async() => {
    let on = true;
    while (on) {
        await countDown(getRemainTime());
        if (timeLeft.d === 0 && timeLeft.h === 0 && timeLeft.m === 0 && timeLeft.s === 0) {
            on = false;
        } else {
            showUnits(timeLeft.d, timeLeft.h, timeLeft.m, timeLeft.s);
        }
    }
    surprise();
}

//Manejador de eventos
document.addEventListener('DOMContentLoaded', () => start());