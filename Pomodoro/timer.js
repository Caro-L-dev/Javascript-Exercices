const clock = document.querySelector(".clock");
const bell = document.querySelector("audio");

const minutesDiv = document.querySelector(".minutes");
const secondsDiv = document.querySelector("seconds");

const startBtn = document.querySelector(".start");
localStorage.setItem("btn", "focus");

let initial, totalSeconds, perc, paused, minutes, seconds;

function startBtn() {
    let startBtn = localStorage.getItem("btn");

    if( startBtn === "focus" ){
        minutes =+ localStorage.getItem("focusTime");
    } else {
        minutes =+ localStorage.getItem("breakTime");
    };

    seconds = minutes * 60;
    totalSeconds = minutes * 60;
    setTimeout(decremenT(), 60);
    startBtn.style.transform = "scale(0)";
    paused = false;
};

function decremenT() {
    minutesDiv.textContent = Math.floor(seconds / 60);
    secondsDiv.textContent = seconds % 60 > 9 ? seconds % 60: `0${seconds % 60}`;

    if ( seconds > 0 ) {
        seconds--;
        initial = window.setTimeout("decremenT()", 100);
    } else {
        minutes = 0;
        seconds = 0;
        bell.play();
        let btn = localStorage.getItem("btn");

        if( btn === "focus" ) {
            startBtn.textContent = "start break";
            startBtn.classlist.add("break");
            localStorage.setItem("btn", "break");
        } else {
            startBtn.classlist.remove("break");
            startBtn.textContent = "start focus";
            localStorage.setItem("btn", "focus");
        }
        startBtn.style.transform = "scale(1)";
    }
}