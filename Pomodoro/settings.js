const focusTimeInput =  document.querySelector('#focusTime');
const breakTimeInput = document.querySelector('#breakTime');
const pauseBtn = document.querySelector(".pause");

document.querySelector("form").addEventListener("submit", (event) => {
    event.preventDefault();
    localStorage.setItem("focusTime", focusTimeInput.value);
    localStorage.setItem("breakTime", breakTimeInput.value);
});

document.querySelector(".reset").addEventListener("click", () => {
    startBtn.style.transform = "scale(1)";
    clearTimeout(initial);
    setProgress(0);
    minutesDiv.textContent = 0;
    secondsDiv.textContent = 0;
})



pauseBtn.addEventListener("click", () => {
    if(paused === undefined) {
        return;
    }
    if (paused) {
        paused = false;
        initial = setTimeout("decremenT()", 60);
        pauseBtn.textContent = "pause";
        pauseBtn.classList.remove("resume");
    } else {
        clearTimeout(initial);
        pauseBtn.textContent = "resume";
        pauseBtn.classList.add("resume");
        paused = true;
    }
});