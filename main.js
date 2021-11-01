var countdown = document.getElementById("time");
// var button = document.getElementById("circle-red");
var text = document.getElementById("pause");
var btnApply = document.getElementById("btn-apply");
var pomodoro = document.getElementById("pomodoro");
var shortBreak = document.getElementById("short-break");
var longBreak = document.getElementById("long-break");
var progressBarr = document.querySelector(".circle-red");
var valueCointainer = document.querySelector(".value-container");
var changeColorBtnDefault = document.getElementsByClassName(".changeColorBtnDefault");
var changeColorBtn = document.getElementsByClassName(".changeColorBtn");

var progressValue = 0;
var startingMinutes = 25;
var time = startingMinutes * 60;
var time2 = time;
var myInterval = -1;
var minutes = Math.floor(time / 60);
var seconds = time % 60;
minutes = minutes < 10 ? '0' + minutes : minutes;
seconds = seconds < 10 ? '0' + seconds : seconds;
countdown.innerHTML = `${minutes}:${seconds}`;

function setValue() {
  clearInterval(myInterval);
  progressValue = 0;
  text.innerHTML = "START";
  progressBarr.style.background = "#161932";
  time = startingMinutes * 60;
  time2 = time;
  myInterval = -1;
  minutes = Math.floor(time / 60);
  seconds = time % 60;
  minutes = minutes < 10 ? '0' + minutes : minutes;
  seconds = seconds < 10 ? '0' + seconds : seconds;
  countdown.innerHTML = `${minutes}:${seconds}`;
}

function changeMinutesPomodoro() {
  var inputPomodoro = document.getElementById("input-pomodoro").value;
  var inputPomodoroFloat = parseFloat(inputPomodoro);
  startingMinutes = inputPomodoroFloat;
  setValue();
}
pomodoro.addEventListener("click", changeMinutesPomodoro);

function changeMinutesShortBreak() {
  var inputShortBreak = document.getElementById("input-shortBreak").value;
  var inputShortBreakFloat = parseFloat(inputShortBreak);
  startingMinutes = inputShortBreakFloat;
  setValue();
}
shortBreak.addEventListener("click", changeMinutesShortBreak);

function changeMinutesLongBreak() {
  var inputLongBreak = document.getElementById("input-longBreak").value;
  var inputLongBreakFloat = parseFloat(inputLongBreak);
  startingMinutes = inputLongBreakFloat;
  setValue();
}
longBreak.addEventListener("click", changeMinutesLongBreak);

function intervalTimer() {
  if (myInterval == -1) {
    myInterval = setInterval(function () {
      if (time == 0) {
        clearInterval(myInterval);
        myInterval = -1;
        text.innerHTML = "RESTART";
        time = time2;
        progressValue = 0;
      }
      else {
        var timeT = time - 1;
        var minutes = Math.floor(timeT / 60);
        var seconds = timeT % 60;
        minutes = minutes < 10 ? '0' + minutes : minutes;
        seconds = seconds < 10 ? '0' + seconds : seconds;
        countdown.innerHTML = `${minutes}:${seconds}`;
        time--;
        text.innerHTML = "PAUSE";
        progressValue++;
        progressBarr.style.background = `conic-gradient(
                  var(--color1) ${progressValue * (360 / time2)}deg,
                  #161932 ${progressValue * (360 / time2)}deg
                  )`;
      }
    }, 1000);
  }
  else {
    clearInterval(myInterval);
    myInterval = -1;
    text.innerHTML = "RESUME";
  }
}
text.addEventListener("click", intervalTimer);

/*MODAL - settings*/
var modal = document.getElementById("myModal");
var btn = document.getElementById("myBtn");
var span = document.getElementsByClassName("close")[0];

btn.addEventListener("click", function () {
  modal.style.display = "flex";
})

span.addEventListener("click", function () {
  modal.style.display = "none";
})

window.addEventListener("click",function (event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
})

btnApply.addEventListener("click", function () {
  modal.style.display = "none";
})

//swtich to short and long
pomodoro.addEventListener("click", function () {
  shortBreak.classList.remove("changeColorBtnDefault");
  longBreak.classList.remove("changeColorBtnDefault");
  pomodoro.classList.remove("changeColorBtn");
  pomodoro.classList.add("changeColorBtnDefault");
})

shortBreak.addEventListener("click", function () {
  pomodoro.classList.add("changeColorBtn");
  longBreak.classList.remove("changeColorBtnDefault");
  shortBreak.classList.add("changeColorBtnDefault");
})

longBreak.addEventListener("click", function () {
  shortBreak.classList.remove("changeColorBtnDefault");
  longBreak.classList.add("changeColorBtnDefault");
  pomodoro.classList.add("changeColorBtn");
})

btnApply.addEventListener("click", function () {
  changeMinutesLongBreak();
  changeMinutesShortBreak();
  changeMinutesPomodoro(); 
})

//radio buttons colors
var color1 = document.getElementById("color1");
var color2 = document.getElementById("color2");
var color3 = document.getElementById("color3");
var check1 = document.getElementById("check1");
var check2 = document.getElementById("check2");
var check3 = document.getElementById("check3");

btnApply.addEventListener("click", function () {
  var element = document.querySelector('html');
  if (color1.checked == true) {
    element.classList.add("theme-color1");
    element.classList.remove("theme-color2");
    element.classList.remove("theme-color3");
  }
  else if (color2.checked == true) {
    element.classList.add("theme-color2");
    element.classList.remove("theme-color1");
    element.classList.remove("theme-color3");
  }
  else if (color3.checked == true) {
    element.classList.add("theme-color3");
    element.classList.remove("theme-color1");
    element.classList.remove("theme-color2");
  }
})
color1.addEventListener("click", function () {
  check1.style.display = "flex";
  check2.style.display = "none";
  check3.style.display = "none";
})

color2.addEventListener("click", function () {
  check1.style.display = "none";
  check2.style.display = "flex";
  check3.style.display = "none";
})

color3.addEventListener("click", function () {
  check1.style.display = "none";
  check2.style.display = "none";
  check3.style.display = "flex";
})

//radio buttons fonts

var ff1 = document.getElementById("ff1");
var ff2 = document.getElementById("ff2");
var ff3 = document.getElementById("ff3");
var ff1aa = document.getElementById("ff1aa");
var ff2aa = document.getElementById("ff2aa");
var ff3aa = document.getElementById("ff3aa");

btnApply.addEventListener("click", function () {
  var element = document.querySelector('html');
  if (ff1.checked == true) {
    element.classList.add("ff-1");
    element.classList.remove("ff-2");
    element.classList.remove("ff-3");
  }
  else if (ff2.checked == true) {
    element.classList.add("ff-2");
    element.classList.remove("ff-1");
    element.classList.remove("ff-3");
  }
  else if (ff3.checked == true) {
    element.classList.add("ff-3");
    element.classList.remove("ff-1");
    element.classList.remove("ff-2");
  }
})

ff1aa.addEventListener("click", function () {
  ff1aa.style.backgroundColor = "#161932";
  ff1aa.style.color = "#FFFFFF";
  ff2aa.style.backgroundColor = "#EFF1FA";
  ff2aa.style.color = "#1E213F";
  ff3aa.style.backgroundColor = "#EFF1FA";
  ff3aa.style.color = "#1E213F";
})

ff2aa.addEventListener("click", function () {
  ff2aa.style.backgroundColor = "#161932";
  ff2aa.style.color = "#FFFFFF";
  ff1aa.style.backgroundColor = "#EFF1FA";
  ff1aa.style.color = "#1E213F";
  ff3aa.style.backgroundColor = "#EFF1FA";
  ff3aa.style.color = "#1E213F";
})
ff3aa.addEventListener("click", function () {
  ff3aa.style.backgroundColor = "#161932";
  ff3aa.style.color = "#FFFFFF";
  ff1aa.style.backgroundColor = "#EFF1FA";
  ff1aa.style.color = "#1E213F";
  ff2aa.style.backgroundColor = "#EFF1FA";
  ff2aa.style.color = "#1E213F";
})
