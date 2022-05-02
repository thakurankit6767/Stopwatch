// var minutes = document.getElementById("minutes");
// var seconds = document.getElementById("seconds");
// var milliseconds = document.getElementById("milliseconds");
// var start = document.getElementById("start");
// var stop = document.getElementById("stop");
// var reset = document.getElementById("reset");

// var millisec = 0;
// var sec = 0;
// var minute = 0;
// var time = 0;

// const timer = () => {
//   millisec++;
//   if (millisec < 9) {
//     milliseconds.innerHTML = "0" + millisec;
//   }
//   if (millisec > 9) {
//     milliseconds.innerHTML = millisec;
//   }
//   if (millisec > 99) {
//     sec++;
//     millisec = 0;
//     seconds.innerHTML = sec;
//   }
//   if (sec >=59) {
//     minute++;
//     sec = 0;
//     minutes.innerHTML = minute;
//   }
// };
// start.addEventListener("click", () => {
//   console.log("click start button");
//   time = setInterval(timer, 10);
// });

// stop.addEventListener("click", () => {
//   console.log("click stop button");
//   clearInterval(time);
// });
// reset.addEventListener("click", () => {
//   console.log("click reset button");
//   clearInterval(time);
//   minute="00"
//   sec = "00";
//   millisec = "00";
//   minutes.innerHTML=minute;
//   seconds.innerHTML = sec;
//   milliseconds.innerHTML = millisec;
// });

// console.log(time)
var minutes = document.getElementById("minutes");
var seconds = document.getElementById("seconds");
var milliseconds = document.getElementById("milliseconds");
var start = document.getElementById("start");
var stop = document.getElementById("stop");
var reset = document.getElementById("reset");

var min = 0;
var sec = 0;
var mili = 0;
var time = 0;
const timer = () => {
  mili++;

  if (mili < 9) {
    milliseconds.innerHTML = "0" + mili;
  }

  if (mili > 9) {
    milliseconds.innerHTML = mili;
  }
  if (mili > 99) {
    sec++;
    mili = 0;
    seconds.innerHTML = sec;
  }
  if (sec >= 59) {
    min++;
    sec = 0;
    minutes.innerHTML = min;
  }
};

start.addEventListener("click", () => {
  console.log("click on start");
  time = setInterval(timer, 10);
});

stop.addEventListener("click", () => {
  console.log("click on stop");
  clearInterval(time);
});

reset.addEventListener("click", () => {
  console.log("click on reset");
  clearInterval(time);
  min = "00";
  sec = "00";
  mili = "00";
  minutes.innerHTML = min;
  seconds.innerHTML = sec;
  milliseconds.innerHTML = mili;
});
