console.log("hello world");
let date = moment().month();
console.log(date);
let currentDay = document.querySelector("#currentDay");
currentDay.textContent = moment().format("[Today is] dddd M.D h:mm:ss a");
// tuesday 8.25 9:54

let timeBlockContainer = document.getElementById("timeblockcontainer");

for (time = 0; time < 8; time++) {
  let starting = 9 + time;
  let timeblock = `<div class="row">
<div class="col-1 text-uppercase text-right border-top border-right">
  ${twelveHourClock(starting)}
</div>
<div class="present col-10 border-top">
  <textarea rows="2"></textarea>
</div>
<div class="col-1 saveBtn">
  <i class="far fa-save"></i>
</div>
</div>`;
  timeBlockContainer.innerHTML += timeblock;
}

function twelveHourClock(time) {
    let newTime = null
  let ampm = null;
  if (time < 12) {
    ampm = "am";
    newTime = time
  } else {
    ampm = "pm";
    newTime = time - 12
  }
return newTime +ampm
}
