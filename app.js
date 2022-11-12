/* SQUAD SHOW/HIDE BUTTONS */
function generalFunction() {
   var general = document.getElementById("gen1");
   general.classList.remove("hide");
   general.classList.add("show");
   var defence = document.getElementById("def1");
   defence.classList.add("hide");
   defence.classList.remove("show");
   var distribution = document.getElementById("dist1");
   distribution.classList.add("hide");
   distribution.classList.remove("show");
   var attack = document.getElementById("att1");
   attack.classList.add("hide");
   attack.classList.remove("show");
   var discipline = document.getElementById("disc1");
   discipline.classList.add("hide");
   discipline.classList.remove("show");
}
function defenceFunction() {
   var defence = document.getElementById("def1");
   defence.classList.remove("hide");
   defence.classList.add("show");
   var general = document.getElementById("gen1");
   general.classList.add("hide");
   general.classList.remove("show");
   var distribution = document.getElementById("dist1");
   distribution.classList.add("hide");
   distribution.classList.remove("show");
   var attack = document.getElementById("att1");
   attack.classList.add("hide");
   attack.classList.remove("show");
   var discipline = document.getElementById("disc1");
   discipline.classList.add("hide");
   discipline.classList.remove("show");
   
}

function distributionFunction() {
    var distribution = document.getElementById("dist1");
    distribution.classList.remove("hide");
    distribution.classList.add("show");
   var general = document.getElementById("gen1");
   general.classList.add("hide");
   general.classList.remove("show");
   var defence = document.getElementById("def1");
   defence.classList.add("hide");
   defence.classList.remove("show");
   var attack = document.getElementById("att1");
   attack.classList.add("hide");
   attack.classList.remove("show");
   var discipline = document.getElementById("disc1");
   discipline.classList.add("hide");
   discipline.classList.remove("show");
}
function attackFunction() {
   var attack = document.getElementById("att1");
   attack.classList.remove("hide");
   attack.classList.add("show");
   var general = document.getElementById("gen1");
   general.classList.add("hide");
   general.classList.remove("show");
   var defence = document.getElementById("def1");
   defence.classList.add("hide");
   defence.classList.remove("show");
   var distribution = document.getElementById("dist1");
   distribution.classList.add("hide");
   distribution.classList.remove("show");
   var discipline = document.getElementById("disc1");
   discipline.classList.add("hide");
   discipline.classList.remove("show");
}
function disciplineFunction() {
   var discipline = document.getElementById("disc1");
   discipline.classList.remove("hide");
   discipline.classList.add("show");
   var general = document.getElementById("gen1");
   general.classList.add("hide");
   general.classList.remove("show");
   var defence = document.getElementById("def1");
   defence.classList.add("hide");
   defence.classList.remove("show");
   var distribution = document.getElementById("dist1");
   distribution.classList.add("hide");
   distribution.classList.remove("show");
   var attack = document.getElementById("att1");
   attack.classList.add("hide");
   attack.classList.remove("show");
}

/* SQUAD SHOW/HIDE BUTTONS END */
/* STANDINGS SHOW/HIDE */

function totalFunction() {
   var total = document.getElementById("total");
   total.classList.remove("hide");
   total.classList.add("show");

   var totalbtn = document.getElementById("total-btn");
   totalbtn.classList.add("subtabs-active");

   var home = document.getElementById("home");
   home.classList.add("hide");
   home.classList.remove("show");
   
   var homebtn = document.getElementById("home-btn");
   homebtn.classList.remove("subtabs-active");

   var away = document.getElementById("away");
   away.classList.add("hide");
   away.classList.remove("show");

   var awaybtn = document.getElementById("away-btn");
   awaybtn.classList.remove("subtabs-active");
}
function homeFunction() {
   var home = document.getElementById("home");
   home.classList.remove("hide");
   home.classList.add("show");

   var homebtn = document.getElementById("home-btn");
   homebtn.classList.add("subtabs-active");

   var total = document.getElementById("total");
   total.classList.add("hide");
   total.classList.remove("show");

   var totalbtn = document.getElementById("total-btn");
   totalbtn.classList.remove("subtabs-active");

   var away = document.getElementById("away");
   away.classList.add("hide");
   away.classList.remove("show");

   var awaybtn = document.getElementById("away-btn");
   awaybtn.classList.remove("subtabs-active");
}

function awayFunction() {
   var away = document.getElementById("away");
   away.classList.remove("hide");
   away.classList.add("show");

   var awaybtn = document.getElementById("away-btn");
   awaybtn.classList.add("subtabs-active");

   var total = document.getElementById("total");
   total.classList.add("hide");
   total.classList.remove("show");

   var totalbtn = document.getElementById("total-btn");
   totalbtn.classList.remove("subtabs-active");

   var home = document.getElementById("home");
   home.classList.add("hide");
   home.classList.remove("show");

   var homebtn = document.getElementById("home-btn");
   homebtn.classList.remove("subtabs-active");
}


/* CALENDAR */
const date = new Date();

const renderCalendar = () => {
  date.setDate(1);

  const monthDays = document.querySelector(".days");

  const lastDay = new Date(
    date.getFullYear(),/* GET YEAR */
    date.getMonth() + 1, /* GET MONTH */
    0
  ).getDate();

  const prevLastDay = new Date(
    date.getFullYear(),
    date.getMonth(),
    0
  ).getDate();

  const firstDayIndex = date.getDay();

  const lastDayIndex = new Date(
    date.getFullYear(),
    date.getMonth() + 1,
    0
  ).getDay();

  const nextDays = 7 - lastDayIndex - 1;

  const months = [ /* MONTH'S ARRAY */
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ];
  ano = document.querySelector(".date h1").innerHTML = months[date.getMonth()] + " " + new Date().getFullYear();/* GET MONTH + YEAR TITLE*/
  dia = document.querySelector(".date h1").innerHTML = months[date.getMonth()] + " " + new Date().getFullYear();/* GET MONTH + YEAR TITLE*/

  document.querySelector(".date p").innerHTML = new Date().toDateString();/* GET DAY PARAGRAPH */

  let days = "";

  for (let x = firstDayIndex; x > 0; x--) {
    days += `<div class="prev-date">${prevLastDay - x + 1}</div>`;
  }

  for (let i = 1; i <= lastDay; i++) {
    if (
      i === new Date().getDate() &&
      date.getMonth() === new Date().getMonth()
    ) {
      days += `<div class="today">${i}</div>`;
    } else {
      days += `<button>${i}</button>`;
    }
  }

  for (let j = 1; j <= nextDays; j++) {
    days += `<div class="next-date">${j}</div>`;
    monthDays.innerHTML = days;
  }
};

document.querySelector(".prev").addEventListener("click", () => {
  date.setMonth(date.getMonth() - 1);
  renderCalendar();
});

document.querySelector(".next").addEventListener("click", () => {
  date.setMonth(date.getMonth() + 1);
  renderCalendar();
});

renderCalendar();
document.getElementById("month-year").innerHTML = ano;

function btnh11Function() {
   var btnh11 = document.getElementById("btnh11");
   btnh11.classList.add("hour-active");
   var btnh113 = document.getElementById("btnh113");
   btnh113.classList.remove("hour-active");
   var btnh12 = document.getElementById("btnh12");
   btnh12.classList.remove("hour-active");
   var btnh123 = document.getElementById("btnh123");
   btnh123.classList.remove("hour-active");
   var btnh13 = document.getElementById("btnh13");
   btnh13.classList.remove("hour-active");
   var btnh133 = document.getElementById("btnh133");
   btnh133.classList.remove("hour-active");
   var btnh14 = document.getElementById("btnh14");
   btnh14.classList.remove("hour-active");
   var btnh143 = document.getElementById("btnh143");
   btnh143.classList.remove("hour-active");
   var btnh15 = document.getElementById("btnh15");
   btnh15.classList.remove("hour-active");
   var btnh153 = document.getElementById("btnh153");
   btnh153.classList.remove("hour-active");
   var btnh16 = document.getElementById("btnh16");
   btnh16.classList.remove("hour-active");
   var btnh163 = document.getElementById("btnh163");
   btnh163.classList.remove("hour-active");
   var btnh17 = document.getElementById("btnh17");
   btnh17.classList.remove("hour-active");
   var btnh173 = document.getElementById("btnh173");
   btnh173.classList.remove("hour-active");
   var btnh18 = document.getElementById("btnh18");
   btnh18.classList.remove("hour-active");
   var btnh183 = document.getElementById("btnh183");
   btnh183.classList.remove("hour-active");
   var btnh19 = document.getElementById("btnh19");
   btnh19.classList.remove("hour-active");
   var btnh193 = document.getElementById("btnh193");
   btnh193.classList.remove("hour-active");
   var btnh20 = document.getElementById("btnh20");
   btnh20.classList.remove("hour-active");
   var btnh203 = document.getElementById("btnh203");
   btnh203.classList.remove("hour-active");
   chosenHour = "11:00 AM";
   document.getElementById("banana").innerHTML= chosenHour;
}
function btnh113Function() {
   var btnh113 = document.getElementById("btnh113");
   btnh113.classList.add("hour-active");
   var btnh11 = document.getElementById("btnh11");
   btnh11.classList.remove("hour-active");
   var btnh12 = document.getElementById("btnh12");
   btnh12.classList.remove("hour-active");
   var btnh123 = document.getElementById("btnh123");
   btnh123.classList.remove("hour-active");
   var btnh13 = document.getElementById("btnh13");
   btnh13.classList.remove("hour-active");
   var btnh133 = document.getElementById("btnh133");
   btnh133.classList.remove("hour-active");
   var btnh14 = document.getElementById("btnh14");
   btnh14.classList.remove("hour-active");
   var btnh143 = document.getElementById("btnh143");
   btnh143.classList.remove("hour-active");
   var btnh15 = document.getElementById("btnh15");
   btnh15.classList.remove("hour-active");
   var btnh153 = document.getElementById("btnh153");
   btnh153.classList.remove("hour-active");
   var btnh16 = document.getElementById("btnh16");
   btnh16.classList.remove("hour-active");
   var btnh163 = document.getElementById("btnh163");
   btnh163.classList.remove("hour-active");
   var btnh17 = document.getElementById("btnh17");
   btnh17.classList.remove("hour-active");
   var btnh173 = document.getElementById("btnh173");
   btnh173.classList.remove("hour-active");
   var btnh18 = document.getElementById("btnh18");
   btnh18.classList.remove("hour-active");
   var btnh183 = document.getElementById("btnh183");
   btnh183.classList.remove("hour-active");
   var btnh19 = document.getElementById("btnh19");
   btnh19.classList.remove("hour-active");
   var btnh193 = document.getElementById("btnh193");
   btnh193.classList.remove("hour-active");
   var btnh20 = document.getElementById("btnh20");
   btnh20.classList.remove("hour-active");
   var btnh203 = document.getElementById("btnh203");
   btnh203.classList.remove("hour-active");
   chosenHour = "11:30 AM";
   document.getElementById("banana").innerHTML= chosenHour;
}
function btnh12Function() {
   var btnh12 = document.getElementById("btnh12");
   btnh12.classList.add("hour-active");
   var btnh11 = document.getElementById("btnh11");
   btnh11.classList.remove("hour-active");
   var btnh113 = document.getElementById("btnh113");
   btnh113.classList.remove("hour-active");
   var btnh123 = document.getElementById("btnh123");
   btnh123.classList.remove("hour-active");
   var btnh13 = document.getElementById("btnh13");
   btnh13.classList.remove("hour-active");
   var btnh133 = document.getElementById("btnh133");
   btnh133.classList.remove("hour-active");
   var btnh14 = document.getElementById("btnh14");
   btnh14.classList.remove("hour-active");
   var btnh143 = document.getElementById("btnh143");
   btnh143.classList.remove("hour-active");
   var btnh15 = document.getElementById("btnh15");
   btnh15.classList.remove("hour-active");
   var btnh153 = document.getElementById("btnh153");
   btnh153.classList.remove("hour-active");
   var btnh16 = document.getElementById("btnh16");
   btnh16.classList.remove("hour-active");
   var btnh163 = document.getElementById("btnh163");
   btnh163.classList.remove("hour-active");
   var btnh17 = document.getElementById("btnh17");
   btnh17.classList.remove("hour-active");
   var btnh173 = document.getElementById("btnh173");
   btnh173.classList.remove("hour-active");
   var btnh18 = document.getElementById("btnh18");
   btnh18.classList.remove("hour-active");
   var btnh183 = document.getElementById("btnh183");
   btnh183.classList.remove("hour-active");
   var btnh19 = document.getElementById("btnh19");
   btnh19.classList.remove("hour-active");
   var btnh193 = document.getElementById("btnh193");
   btnh193.classList.remove("hour-active");
   var btnh20 = document.getElementById("btnh20");
   btnh20.classList.remove("hour-active");
   var btnh203 = document.getElementById("btnh203");
   btnh203.classList.remove("hour-active");
   chosenHour = "12:00 AM";
   document.getElementById("banana").innerHTML= chosenHour;
}
function btnh123Function() {
   var btnh123 = document.getElementById("btnh123");
   btnh123.classList.add("hour-active");
   var btnh11 = document.getElementById("btnh11");
   btnh11.classList.remove("hour-active");
   var btnh113 = document.getElementById("btnh113");
   btnh113.classList.remove("hour-active");
   var btnh12 = document.getElementById("btnh12");
   btnh12.classList.remove("hour-active");
   var btnh13 = document.getElementById("btnh13");
   btnh13.classList.remove("hour-active");
   var btnh133 = document.getElementById("btnh133");
   btnh133.classList.remove("hour-active");
   var btnh14 = document.getElementById("btnh14");
   btnh14.classList.remove("hour-active");
   var btnh143 = document.getElementById("btnh143");
   btnh143.classList.remove("hour-active");
   var btnh15 = document.getElementById("btnh15");
   btnh15.classList.remove("hour-active");
   var btnh153 = document.getElementById("btnh153");
   btnh153.classList.remove("hour-active");
   var btnh16 = document.getElementById("btnh16");
   btnh16.classList.remove("hour-active");
   var btnh163 = document.getElementById("btnh163");
   btnh163.classList.remove("hour-active");
   var btnh17 = document.getElementById("btnh17");
   btnh17.classList.remove("hour-active");
   var btnh173 = document.getElementById("btnh173");
   btnh173.classList.remove("hour-active");
   var btnh18 = document.getElementById("btnh18");
   btnh18.classList.remove("hour-active");
   var btnh183 = document.getElementById("btnh183");
   btnh183.classList.remove("hour-active");
   var btnh19 = document.getElementById("btnh19");
   btnh19.classList.remove("hour-active");
   var btnh193 = document.getElementById("btnh193");
   btnh193.classList.remove("hour-active");
   var btnh20 = document.getElementById("btnh20");
   btnh20.classList.remove("hour-active");
   var btnh203 = document.getElementById("btnh203");
   btnh203.classList.remove("hour-active");
   chosenHour = "12:30 AM";
   document.getElementById("banana").innerHTML= chosenHour;
}
function btnh13Function() {
   var btnh13 = document.getElementById("btnh13");
   btnh13.classList.add("hour-active");
   var btnh11 = document.getElementById("btnh11");
   btnh11.classList.remove("hour-active");
   var btnh113 = document.getElementById("btnh113");
   btnh113.classList.remove("hour-active");
   var btnh12 = document.getElementById("btnh12");
   btnh12.classList.remove("hour-active");
   var btnh123 = document.getElementById("btnh123");
   btnh123.classList.remove("hour-active");
   var btnh133 = document.getElementById("btnh133");
   btnh133.classList.remove("hour-active");
   var btnh14 = document.getElementById("btnh14");
   btnh14.classList.remove("hour-active");
   var btnh143 = document.getElementById("btnh143");
   btnh143.classList.remove("hour-active");
   var btnh15 = document.getElementById("btnh15");
   btnh15.classList.remove("hour-active");
   var btnh153 = document.getElementById("btnh153");
   btnh153.classList.remove("hour-active");
   var btnh16 = document.getElementById("btnh16");
   btnh16.classList.remove("hour-active");
   var btnh163 = document.getElementById("btnh163");
   btnh163.classList.remove("hour-active");
   var btnh17 = document.getElementById("btnh17");
   btnh17.classList.remove("hour-active");
   var btnh173 = document.getElementById("btnh173");
   btnh173.classList.remove("hour-active");
   var btnh18 = document.getElementById("btnh18");
   btnh18.classList.remove("hour-active");
   var btnh183 = document.getElementById("btnh183");
   btnh183.classList.remove("hour-active");
   var btnh19 = document.getElementById("btnh19");
   btnh19.classList.remove("hour-active");
   var btnh193 = document.getElementById("btnh193");
   btnh193.classList.remove("hour-active");
   var btnh20 = document.getElementById("btnh20");
   btnh20.classList.remove("hour-active");
   var btnh203 = document.getElementById("btnh203");
   btnh203.classList.remove("hour-active");
   chosenHour = "13:00 AM";
   document.getElementById("banana").innerHTML= chosenHour;
}
function btnh133Function() {
   var btnh133 = document.getElementById("btnh133");
   btnh133.classList.add("hour-active");
   var btnh11 = document.getElementById("btnh11");
   btnh11.classList.remove("hour-active");
   var btnh113 = document.getElementById("btnh113");
   btnh113.classList.remove("hour-active");
   var btnh12 = document.getElementById("btnh12");
   btnh12.classList.remove("hour-active");
   var btnh123 = document.getElementById("btnh123");
   btnh123.classList.remove("hour-active");
   var btnh13 = document.getElementById("btnh13");
   btnh13.classList.remove("hour-active");
   var btnh14 = document.getElementById("btnh14");
   btnh14.classList.remove("hour-active");
   var btnh143 = document.getElementById("btnh143");
   btnh143.classList.remove("hour-active");
   var btnh15 = document.getElementById("btnh15");
   btnh15.classList.remove("hour-active");
   var btnh153 = document.getElementById("btnh153");
   btnh153.classList.remove("hour-active");
   var btnh16 = document.getElementById("btnh16");
   btnh16.classList.remove("hour-active");
   var btnh163 = document.getElementById("btnh163");
   btnh163.classList.remove("hour-active");
   var btnh17 = document.getElementById("btnh17");
   btnh17.classList.remove("hour-active");
   var btnh173 = document.getElementById("btnh173");
   btnh173.classList.remove("hour-active");
   var btnh18 = document.getElementById("btnh18");
   btnh18.classList.remove("hour-active");
   var btnh183 = document.getElementById("btnh183");
   btnh183.classList.remove("hour-active");
   var btnh19 = document.getElementById("btnh19");
   btnh19.classList.remove("hour-active");
   var btnh193 = document.getElementById("btnh193");
   btnh193.classList.remove("hour-active");
   var btnh20 = document.getElementById("btnh20");
   btnh20.classList.remove("hour-active");
   var btnh203 = document.getElementById("btnh203");
   btnh203.classList.remove("hour-active");
   chosenHour = "13:30 AM";
   document.getElementById("banana").innerHTML= chosenHour;
}
function btnh14Function() {
   var btnh14 = document.getElementById("btnh14");
   btnh14.classList.add("hour-active");
   var btnh11 = document.getElementById("btnh11");
   btnh11.classList.remove("hour-active");
   var btnh113 = document.getElementById("btnh113");
   btnh113.classList.remove("hour-active");
   var btnh12 = document.getElementById("btnh12");
   btnh12.classList.remove("hour-active");
   var btnh123 = document.getElementById("btnh123");
   btnh123.classList.remove("hour-active");
   var btnh13 = document.getElementById("btnh13");
   btnh13.classList.remove("hour-active");
   var btnh133 = document.getElementById("btnh133");
   btnh133.classList.remove("hour-active");
   var btnh143 = document.getElementById("btnh143");
   btnh143.classList.remove("hour-active");
   var btnh15 = document.getElementById("btnh15");
   btnh15.classList.remove("hour-active");
   var btnh153 = document.getElementById("btnh153");
   btnh153.classList.remove("hour-active");
   var btnh16 = document.getElementById("btnh16");
   btnh16.classList.remove("hour-active");
   var btnh163 = document.getElementById("btnh163");
   btnh163.classList.remove("hour-active");
   var btnh17 = document.getElementById("btnh17");
   btnh17.classList.remove("hour-active");
   var btnh173 = document.getElementById("btnh173");
   btnh173.classList.remove("hour-active");
   var btnh18 = document.getElementById("btnh18");
   btnh18.classList.remove("hour-active");
   var btnh183 = document.getElementById("btnh183");
   btnh183.classList.remove("hour-active");
   var btnh19 = document.getElementById("btnh19");
   btnh19.classList.remove("hour-active");
   var btnh193 = document.getElementById("btnh193");
   btnh193.classList.remove("hour-active");
   var btnh20 = document.getElementById("btnh20");
   btnh20.classList.remove("hour-active");
   var btnh203 = document.getElementById("btnh203");
   btnh203.classList.remove("hour-active");
   chosenHour = "14:00 AM";
   document.getElementById("banana").innerHTML= chosenHour;
}
function btnh143Function() {
   var btnh143 = document.getElementById("btnh143");
   btnh143.classList.add("hour-active");
   var btnh11 = document.getElementById("btnh11");
   btnh11.classList.remove("hour-active");
   var btnh113 = document.getElementById("btnh113");
   btnh113.classList.remove("hour-active");
   var btnh12 = document.getElementById("btnh12");
   btnh12.classList.remove("hour-active");
   var btnh123 = document.getElementById("btnh123");
   btnh123.classList.remove("hour-active");
   var btnh13 = document.getElementById("btnh13");
   btnh13.classList.remove("hour-active");
   var btnh133 = document.getElementById("btnh133");
   btnh133.classList.remove("hour-active");
   var btnh14 = document.getElementById("btnh14");
   btnh14.classList.remove("hour-active");
   var btnh15 = document.getElementById("btnh15");
   btnh15.classList.remove("hour-active");
   var btnh153 = document.getElementById("btnh153");
   btnh153.classList.remove("hour-active");
   var btnh16 = document.getElementById("btnh16");
   btnh16.classList.remove("hour-active");
   var btnh163 = document.getElementById("btnh163");
   btnh163.classList.remove("hour-active");
   var btnh17 = document.getElementById("btnh17");
   btnh17.classList.remove("hour-active");
   var btnh173 = document.getElementById("btnh173");
   btnh173.classList.remove("hour-active");
   var btnh18 = document.getElementById("btnh18");
   btnh18.classList.remove("hour-active");
   var btnh183 = document.getElementById("btnh183");
   btnh183.classList.remove("hour-active");
   var btnh19 = document.getElementById("btnh19");
   btnh19.classList.remove("hour-active");
   var btnh193 = document.getElementById("btnh193");
   btnh193.classList.remove("hour-active");
   var btnh20 = document.getElementById("btnh20");
   btnh20.classList.remove("hour-active");
   var btnh203 = document.getElementById("btnh203");
   btnh203.classList.remove("hour-active");
   chosenHour = "14:30 AM";
   document.getElementById("banana").innerHTML= chosenHour;
}
function btnh143Function() {
   var btnh143 = document.getElementById("btnh143");
   btnh143.classList.add("hour-active");
   var btnh11 = document.getElementById("btnh11");
   btnh11.classList.remove("hour-active");
   var btnh113 = document.getElementById("btnh113");
   btnh113.classList.remove("hour-active");
   var btnh12 = document.getElementById("btnh12");
   btnh12.classList.remove("hour-active");
   var btnh123 = document.getElementById("btnh123");
   btnh123.classList.remove("hour-active");
   var btnh13 = document.getElementById("btnh13");
   btnh13.classList.remove("hour-active");
   var btnh133 = document.getElementById("btnh133");
   btnh133.classList.remove("hour-active");
   var btnh14 = document.getElementById("btnh14");
   btnh14.classList.remove("hour-active");
   var btnh15 = document.getElementById("btnh15");
   btnh15.classList.remove("hour-active");
   var btnh153 = document.getElementById("btnh153");
   btnh153.classList.remove("hour-active");
   var btnh16 = document.getElementById("btnh16");
   btnh16.classList.remove("hour-active");
   var btnh163 = document.getElementById("btnh163");
   btnh163.classList.remove("hour-active");
   var btnh17 = document.getElementById("btnh17");
   btnh17.classList.remove("hour-active");
   var btnh173 = document.getElementById("btnh173");
   btnh173.classList.remove("hour-active");
   var btnh18 = document.getElementById("btnh18");
   btnh18.classList.remove("hour-active");
   var btnh183 = document.getElementById("btnh183");
   btnh183.classList.remove("hour-active");
   var btnh19 = document.getElementById("btnh19");
   btnh19.classList.remove("hour-active");
   var btnh193 = document.getElementById("btnh193");
   btnh193.classList.remove("hour-active");
   var btnh20 = document.getElementById("btnh20");
   btnh20.classList.remove("hour-active");
   var btnh203 = document.getElementById("btnh203");
   btnh203.classList.remove("hour-active");
   chosenHour = "14:30 AM";
   document.getElementById("banana").innerHTML= chosenHour;
}
function btnh15Function() {
   var btnh15 = document.getElementById("btnh15");
   btnh15.classList.add("hour-active");
   var btnh11 = document.getElementById("btnh11");
   btnh11.classList.remove("hour-active");
   var btnh113 = document.getElementById("btnh113");
   btnh113.classList.remove("hour-active");
   var btnh12 = document.getElementById("btnh12");
   btnh12.classList.remove("hour-active");
   var btnh123 = document.getElementById("btnh123");
   btnh123.classList.remove("hour-active");
   var btnh13 = document.getElementById("btnh13");
   btnh13.classList.remove("hour-active");
   var btnh133 = document.getElementById("btnh133");
   btnh133.classList.remove("hour-active");
   var btnh14 = document.getElementById("btnh14");
   btnh14.classList.remove("hour-active");
   var btnh143 = document.getElementById("btnh143");
   btnh143.classList.remove("hour-active");
   var btnh153 = document.getElementById("btnh153");
   btnh153.classList.remove("hour-active");
   var btnh16 = document.getElementById("btnh16");
   btnh16.classList.remove("hour-active");
   var btnh163 = document.getElementById("btnh163");
   btnh163.classList.remove("hour-active");
   var btnh17 = document.getElementById("btnh17");
   btnh17.classList.remove("hour-active");
   var btnh173 = document.getElementById("btnh173");
   btnh173.classList.remove("hour-active");
   var btnh18 = document.getElementById("btnh18");
   btnh18.classList.remove("hour-active");
   var btnh183 = document.getElementById("btnh183");
   btnh183.classList.remove("hour-active");
   var btnh19 = document.getElementById("btnh19");
   btnh19.classList.remove("hour-active");
   var btnh193 = document.getElementById("btnh193");
   btnh193.classList.remove("hour-active");
   var btnh20 = document.getElementById("btnh20");
   btnh20.classList.remove("hour-active");
   var btnh203 = document.getElementById("btnh203");
   btnh203.classList.remove("hour-active");
   chosenHour = "15:00 AM";
   document.getElementById("banana").innerHTML= chosenHour;
}
function btnh153Function() {
   var btnh153 = document.getElementById("btnh153");
   btnh153.classList.add("hour-active");
   var btnh11 = document.getElementById("btnh11");
   btnh11.classList.remove("hour-active");
   var btnh113 = document.getElementById("btnh113");
   btnh113.classList.remove("hour-active");
   var btnh12 = document.getElementById("btnh12");
   btnh12.classList.remove("hour-active");
   var btnh123 = document.getElementById("btnh123");
   btnh123.classList.remove("hour-active");
   var btnh13 = document.getElementById("btnh13");
   btnh13.classList.remove("hour-active");
   var btnh133 = document.getElementById("btnh133");
   btnh133.classList.remove("hour-active");
   var btnh14 = document.getElementById("btnh14");
   btnh14.classList.remove("hour-active");
   var btnh143 = document.getElementById("btnh143");
   btnh143.classList.remove("hour-active");
   var btnh15 = document.getElementById("btnh15");
   btnh15.classList.remove("hour-active");
   var btnh16 = document.getElementById("btnh16");
   btnh16.classList.remove("hour-active");
   var btnh163 = document.getElementById("btnh163");
   btnh163.classList.remove("hour-active");
   var btnh17 = document.getElementById("btnh17");
   btnh17.classList.remove("hour-active");
   var btnh173 = document.getElementById("btnh173");
   btnh173.classList.remove("hour-active");
   var btnh18 = document.getElementById("btnh18");
   btnh18.classList.remove("hour-active");
   var btnh183 = document.getElementById("btnh183");
   btnh183.classList.remove("hour-active");
   var btnh19 = document.getElementById("btnh19");
   btnh19.classList.remove("hour-active");
   var btnh193 = document.getElementById("btnh193");
   btnh193.classList.remove("hour-active");
   var btnh20 = document.getElementById("btnh20");
   btnh20.classList.remove("hour-active");
   var btnh203 = document.getElementById("btnh203");
   btnh203.classList.remove("hour-active");
   chosenHour = "15:30 AM";
   document.getElementById("banana").innerHTML= chosenHour;
}
function btnh16Function() {
   var btnh16 = document.getElementById("btnh16");
   btnh16.classList.add("hour-active");
   var btnh11 = document.getElementById("btnh11");
   btnh11.classList.remove("hour-active");
   var btnh113 = document.getElementById("btnh113");
   btnh113.classList.remove("hour-active");
   var btnh12 = document.getElementById("btnh12");
   btnh12.classList.remove("hour-active");
   var btnh123 = document.getElementById("btnh123");
   btnh123.classList.remove("hour-active");
   var btnh13 = document.getElementById("btnh13");
   btnh13.classList.remove("hour-active");
   var btnh133 = document.getElementById("btnh133");
   btnh133.classList.remove("hour-active");
   var btnh14 = document.getElementById("btnh14");
   btnh14.classList.remove("hour-active");
   var btnh143 = document.getElementById("btnh143");
   btnh143.classList.remove("hour-active");
   var btnh15 = document.getElementById("btnh15");
   btnh15.classList.remove("hour-active");
   var btnh153 = document.getElementById("btnh153");
   btnh153.classList.remove("hour-active");
   var btnh163 = document.getElementById("btnh163");
   btnh163.classList.remove("hour-active");
   var btnh17 = document.getElementById("btnh17");
   btnh17.classList.remove("hour-active");
   var btnh173 = document.getElementById("btnh173");
   btnh173.classList.remove("hour-active");
   var btnh18 = document.getElementById("btnh18");
   btnh18.classList.remove("hour-active");
   var btnh183 = document.getElementById("btnh183");
   btnh183.classList.remove("hour-active");
   var btnh19 = document.getElementById("btnh19");
   btnh19.classList.remove("hour-active");
   var btnh193 = document.getElementById("btnh193");
   btnh193.classList.remove("hour-active");
   var btnh20 = document.getElementById("btnh20");
   btnh20.classList.remove("hour-active");
   var btnh203 = document.getElementById("btnh203");
   btnh203.classList.remove("hour-active");
   chosenHour = "16:00 AM";
   document.getElementById("banana").innerHTML= chosenHour;
}
function btnh163Function() {
   var btnh163 = document.getElementById("btnh163");
   btnh163.classList.add("hour-active");
   var btnh11 = document.getElementById("btnh11");
   btnh11.classList.remove("hour-active");
   var btnh113 = document.getElementById("btnh113");
   btnh113.classList.remove("hour-active");
   var btnh12 = document.getElementById("btnh12");
   btnh12.classList.remove("hour-active");
   var btnh123 = document.getElementById("btnh123");
   btnh123.classList.remove("hour-active");
   var btnh13 = document.getElementById("btnh13");
   btnh13.classList.remove("hour-active");
   var btnh133 = document.getElementById("btnh133");
   btnh133.classList.remove("hour-active");
   var btnh14 = document.getElementById("btnh14");
   btnh14.classList.remove("hour-active");
   var btnh143 = document.getElementById("btnh143");
   btnh143.classList.remove("hour-active");
   var btnh15 = document.getElementById("btnh15");
   btnh15.classList.remove("hour-active");
   var btnh153 = document.getElementById("btnh153");
   btnh153.classList.remove("hour-active");
   var btnh16 = document.getElementById("btnh16");
   btnh16.classList.remove("hour-active");
   var btnh17 = document.getElementById("btnh17");
   btnh17.classList.remove("hour-active");
   var btnh173 = document.getElementById("btnh173");
   btnh173.classList.remove("hour-active");
   var btnh18 = document.getElementById("btnh18");
   btnh18.classList.remove("hour-active");
   var btnh183 = document.getElementById("btnh183");
   btnh183.classList.remove("hour-active");
   var btnh19 = document.getElementById("btnh19");
   btnh19.classList.remove("hour-active");
   var btnh193 = document.getElementById("btnh193");
   btnh193.classList.remove("hour-active");
   var btnh20 = document.getElementById("btnh20");
   btnh20.classList.remove("hour-active");
   var btnh203 = document.getElementById("btnh203");
   btnh203.classList.remove("hour-active");
   chosenHour = "16:30 AM";
   document.getElementById("banana").innerHTML= chosenHour;
}
function btnh17Function() {
   var btnh17 = document.getElementById("btnh17");
   btnh17.classList.add("hour-active");
   var btnh11 = document.getElementById("btnh11");
   btnh11.classList.remove("hour-active");
   var btnh113 = document.getElementById("btnh113");
   btnh113.classList.remove("hour-active");
   var btnh12 = document.getElementById("btnh12");
   btnh12.classList.remove("hour-active");
   var btnh123 = document.getElementById("btnh123");
   btnh123.classList.remove("hour-active");
   var btnh13 = document.getElementById("btnh13");
   btnh13.classList.remove("hour-active");
   var btnh133 = document.getElementById("btnh133");
   btnh133.classList.remove("hour-active");
   var btnh14 = document.getElementById("btnh14");
   btnh14.classList.remove("hour-active");
   var btnh143 = document.getElementById("btnh143");
   btnh143.classList.remove("hour-active");
   var btnh15 = document.getElementById("btnh15");
   btnh15.classList.remove("hour-active");
   var btnh153 = document.getElementById("btnh153");
   btnh153.classList.remove("hour-active");
   var btnh16 = document.getElementById("btnh16");
   btnh16.classList.remove("hour-active");
   var btnh163 = document.getElementById("btnh163");
   btnh163.classList.remove("hour-active");
   var btnh173 = document.getElementById("btnh173");
   btnh173.classList.remove("hour-active");
   var btnh18 = document.getElementById("btnh18");
   btnh18.classList.remove("hour-active");
   var btnh183 = document.getElementById("btnh183");
   btnh183.classList.remove("hour-active");
   var btnh19 = document.getElementById("btnh19");
   btnh19.classList.remove("hour-active");
   var btnh193 = document.getElementById("btnh193");
   btnh193.classList.remove("hour-active");
   var btnh20 = document.getElementById("btnh20");
   btnh20.classList.remove("hour-active");
   var btnh203 = document.getElementById("btnh203");
   btnh203.classList.remove("hour-active");
   chosenHour = "17:00 AM";
   document.getElementById("banana").innerHTML= chosenHour;
}
function btnh173Function() {
   var btnh173 = document.getElementById("btnh173");
   btnh173.classList.add("hour-active");
   var btnh11 = document.getElementById("btnh11");
   btnh11.classList.remove("hour-active");
   var btnh113 = document.getElementById("btnh113");
   btnh113.classList.remove("hour-active");
   var btnh12 = document.getElementById("btnh12");
   btnh12.classList.remove("hour-active");
   var btnh123 = document.getElementById("btnh123");
   btnh123.classList.remove("hour-active");
   var btnh13 = document.getElementById("btnh13");
   btnh13.classList.remove("hour-active");
   var btnh133 = document.getElementById("btnh133");
   btnh133.classList.remove("hour-active");
   var btnh14 = document.getElementById("btnh14");
   btnh14.classList.remove("hour-active");
   var btnh143 = document.getElementById("btnh143");
   btnh143.classList.remove("hour-active");
   var btnh15 = document.getElementById("btnh15");
   btnh15.classList.remove("hour-active");
   var btnh153 = document.getElementById("btnh153");
   btnh153.classList.remove("hour-active");
   var btnh16 = document.getElementById("btnh16");
   btnh16.classList.remove("hour-active");
   var btnh163 = document.getElementById("btnh163");
   btnh163.classList.remove("hour-active");
   var btnh17 = document.getElementById("btnh17");
   btnh17.classList.remove("hour-active");
   var btnh18 = document.getElementById("btnh18");
   btnh18.classList.remove("hour-active");
   var btnh183 = document.getElementById("btnh183");
   btnh183.classList.remove("hour-active");
   var btnh19 = document.getElementById("btnh19");
   btnh19.classList.remove("hour-active");
   var btnh193 = document.getElementById("btnh193");
   btnh193.classList.remove("hour-active");
   var btnh20 = document.getElementById("btnh20");
   btnh20.classList.remove("hour-active");
   var btnh203 = document.getElementById("btnh203");
   btnh203.classList.remove("hour-active");
   chosenHour = "17:30 AM";
   document.getElementById("banana").innerHTML= chosenHour;
}
function btnh18Function() {
   var btnh18 = document.getElementById("btnh18");
   btnh18.classList.add("hour-active");
   var btnh11 = document.getElementById("btnh11");
   btnh11.classList.remove("hour-active");
   var btnh113 = document.getElementById("btnh113");
   btnh113.classList.remove("hour-active");
   var btnh12 = document.getElementById("btnh12");
   btnh12.classList.remove("hour-active");
   var btnh123 = document.getElementById("btnh123");
   btnh123.classList.remove("hour-active");
   var btnh13 = document.getElementById("btnh13");
   btnh13.classList.remove("hour-active");
   var btnh133 = document.getElementById("btnh133");
   btnh133.classList.remove("hour-active");
   var btnh14 = document.getElementById("btnh14");
   btnh14.classList.remove("hour-active");
   var btnh143 = document.getElementById("btnh143");
   btnh143.classList.remove("hour-active");
   var btnh15 = document.getElementById("btnh15");
   btnh15.classList.remove("hour-active");
   var btnh153 = document.getElementById("btnh153");
   btnh153.classList.remove("hour-active");
   var btnh16 = document.getElementById("btnh16");
   btnh16.classList.remove("hour-active");
   var btnh163 = document.getElementById("btnh163");
   btnh163.classList.remove("hour-active");
   var btnh17 = document.getElementById("btnh17");
   btnh17.classList.remove("hour-active");
   var btnh173 = document.getElementById("btnh173");
   btnh173.classList.remove("hour-active");
   var btnh183 = document.getElementById("btnh183");
   btnh183.classList.remove("hour-active");
   var btnh19 = document.getElementById("btnh19");
   btnh19.classList.remove("hour-active");
   var btnh193 = document.getElementById("btnh193");
   btnh193.classList.remove("hour-active");
   var btnh20 = document.getElementById("btnh20");
   btnh20.classList.remove("hour-active");
   var btnh203 = document.getElementById("btnh203");
   btnh203.classList.remove("hour-active");
   chosenHour = "18:00 AM";
   document.getElementById("banana").innerHTML= chosenHour;
}
function btnh183Function() {
   var btnh183 = document.getElementById("btnh183");
   btnh183.classList.add("hour-active");
   var btnh11 = document.getElementById("btnh11");
   btnh11.classList.remove("hour-active");
   var btnh113 = document.getElementById("btnh113");
   btnh113.classList.remove("hour-active");
   var btnh12 = document.getElementById("btnh12");
   btnh12.classList.remove("hour-active");
   var btnh123 = document.getElementById("btnh123");
   btnh123.classList.remove("hour-active");
   var btnh13 = document.getElementById("btnh13");
   btnh13.classList.remove("hour-active");
   var btnh133 = document.getElementById("btnh133");
   btnh133.classList.remove("hour-active");
   var btnh14 = document.getElementById("btnh14");
   btnh14.classList.remove("hour-active");
   var btnh143 = document.getElementById("btnh143");
   btnh143.classList.remove("hour-active");
   var btnh15 = document.getElementById("btnh15");
   btnh15.classList.remove("hour-active");
   var btnh153 = document.getElementById("btnh153");
   btnh153.classList.remove("hour-active");
   var btnh16 = document.getElementById("btnh16");
   btnh16.classList.remove("hour-active");
   var btnh163 = document.getElementById("btnh163");
   btnh163.classList.remove("hour-active");
   var btnh17 = document.getElementById("btnh17");
   btnh17.classList.remove("hour-active");
   var btnh173 = document.getElementById("btnh173");
   btnh173.classList.remove("hour-active");
   var btnh18 = document.getElementById("btnh18");
   btnh18.classList.remove("hour-active");
   var btnh19 = document.getElementById("btnh19");
   btnh19.classList.remove("hour-active");
   var btnh193 = document.getElementById("btnh193");
   btnh193.classList.remove("hour-active");
   var btnh20 = document.getElementById("btnh20");
   btnh20.classList.remove("hour-active");
   var btnh203 = document.getElementById("btnh203");
   btnh203.classList.remove("hour-active");
   chosenHour = "18:30 AM";
   document.getElementById("banana").innerHTML= chosenHour;
}
function btnh19Function() {
   var btnh19 = document.getElementById("btnh19");
   btnh19.classList.add("hour-active");
   var btnh11 = document.getElementById("btnh11");
   btnh11.classList.remove("hour-active");
   var btnh113 = document.getElementById("btnh113");
   btnh113.classList.remove("hour-active");
   var btnh12 = document.getElementById("btnh12");
   btnh12.classList.remove("hour-active");
   var btnh123 = document.getElementById("btnh123");
   btnh123.classList.remove("hour-active");
   var btnh13 = document.getElementById("btnh13");
   btnh13.classList.remove("hour-active");
   var btnh133 = document.getElementById("btnh133");
   btnh133.classList.remove("hour-active");
   var btnh14 = document.getElementById("btnh14");
   btnh14.classList.remove("hour-active");
   var btnh143 = document.getElementById("btnh143");
   btnh143.classList.remove("hour-active");
   var btnh15 = document.getElementById("btnh15");
   btnh15.classList.remove("hour-active");
   var btnh153 = document.getElementById("btnh153");
   btnh153.classList.remove("hour-active");
   var btnh16 = document.getElementById("btnh16");
   btnh16.classList.remove("hour-active");
   var btnh163 = document.getElementById("btnh163");
   btnh163.classList.remove("hour-active");
   var btnh17 = document.getElementById("btnh17");
   btnh17.classList.remove("hour-active");
   var btnh173 = document.getElementById("btnh173");
   btnh173.classList.remove("hour-active");
   var btnh18 = document.getElementById("btnh18");
   btnh18.classList.remove("hour-active");
   var btnh183 = document.getElementById("btnh183");
   btnh183.classList.remove("hour-active");
   var btnh193 = document.getElementById("btnh193");
   btnh193.classList.remove("hour-active");
   var btnh20 = document.getElementById("btnh20");
   btnh20.classList.remove("hour-active");
   var btnh203 = document.getElementById("btnh203");
   btnh203.classList.remove("hour-active");
   chosenHour = "19:00 AM";
   document.getElementById("banana").innerHTML= chosenHour;
}
function btnh193Function() {
   var btnh193 = document.getElementById("btnh193");
   btnh193.classList.add("hour-active");
   var btnh11 = document.getElementById("btnh11");
   btnh11.classList.remove("hour-active");
   var btnh113 = document.getElementById("btnh113");
   btnh113.classList.remove("hour-active");
   var btnh12 = document.getElementById("btnh12");
   btnh12.classList.remove("hour-active");
   var btnh123 = document.getElementById("btnh123");
   btnh123.classList.remove("hour-active");
   var btnh13 = document.getElementById("btnh13");
   btnh13.classList.remove("hour-active");
   var btnh133 = document.getElementById("btnh133");
   btnh133.classList.remove("hour-active");
   var btnh14 = document.getElementById("btnh14");
   btnh14.classList.remove("hour-active");
   var btnh143 = document.getElementById("btnh143");
   btnh143.classList.remove("hour-active");
   var btnh15 = document.getElementById("btnh15");
   btnh15.classList.remove("hour-active");
   var btnh153 = document.getElementById("btnh153");
   btnh153.classList.remove("hour-active");
   var btnh16 = document.getElementById("btnh16");
   btnh16.classList.remove("hour-active");
   var btnh163 = document.getElementById("btnh163");
   btnh163.classList.remove("hour-active");
   var btnh17 = document.getElementById("btnh17");
   btnh17.classList.remove("hour-active");
   var btnh173 = document.getElementById("btnh173");
   btnh173.classList.remove("hour-active");
   var btnh18 = document.getElementById("btnh18");
   btnh18.classList.remove("hour-active");
   var btnh183 = document.getElementById("btnh183");
   btnh183.classList.remove("hour-active");
   var btnh19 = document.getElementById("btnh19");
   btnh19.classList.remove("hour-active");
   var btnh20 = document.getElementById("btnh20");
   btnh20.classList.remove("hour-active");
   var btnh203 = document.getElementById("btnh203");
   btnh203.classList.remove("hour-active");
   chosenHour = "19:30 AM";
   document.getElementById("banana").innerHTML= chosenHour;
}
function btnh20Function() {
   var btnh20 = document.getElementById("btnh20");
   btnh20.classList.add("hour-active");
   var btnh11 = document.getElementById("btnh11");
   btnh11.classList.remove("hour-active");
   var btnh113 = document.getElementById("btnh113");
   btnh113.classList.remove("hour-active");
   var btnh12 = document.getElementById("btnh12");
   btnh12.classList.remove("hour-active");
   var btnh123 = document.getElementById("btnh123");
   btnh123.classList.remove("hour-active");
   var btnh13 = document.getElementById("btnh13");
   btnh13.classList.remove("hour-active");
   var btnh133 = document.getElementById("btnh133");
   btnh133.classList.remove("hour-active");
   var btnh14 = document.getElementById("btnh14");
   btnh14.classList.remove("hour-active");
   var btnh143 = document.getElementById("btnh143");
   btnh143.classList.remove("hour-active");
   var btnh15 = document.getElementById("btnh15");
   btnh15.classList.remove("hour-active");
   var btnh153 = document.getElementById("btnh153");
   btnh153.classList.remove("hour-active");
   var btnh16 = document.getElementById("btnh16");
   btnh16.classList.remove("hour-active");
   var btnh163 = document.getElementById("btnh163");
   btnh163.classList.remove("hour-active");
   var btnh17 = document.getElementById("btnh17");
   btnh17.classList.remove("hour-active");
   var btnh173 = document.getElementById("btnh173");
   btnh173.classList.remove("hour-active");
   var btnh18 = document.getElementById("btnh18");
   btnh18.classList.remove("hour-active");
   var btnh183 = document.getElementById("btnh183");
   btnh183.classList.remove("hour-active");
   var btnh19 = document.getElementById("btnh19");
   btnh19.classList.remove("hour-active");
   var btnh193 = document.getElementById("btnh193");
   btnh193.classList.remove("hour-active");
   var btnh203 = document.getElementById("btnh203");
   btnh203.classList.remove("hour-active");
   chosenHour = "20:00 AM";
   document.getElementById("banana").innerHTML= chosenHour;
}
function btnh203Function() {
   var btnh203 = document.getElementById("btnh203");
   btnh203.classList.add("hour-active");
   var btnh11 = document.getElementById("btnh11");
   btnh11.classList.remove("hour-active");
   var btnh113 = document.getElementById("btnh113");
   btnh113.classList.remove("hour-active");
   var btnh12 = document.getElementById("btnh12");
   btnh12.classList.remove("hour-active");
   var btnh123 = document.getElementById("btnh123");
   btnh123.classList.remove("hour-active");
   var btnh13 = document.getElementById("btnh13");
   btnh13.classList.remove("hour-active");
   var btnh133 = document.getElementById("btnh133");
   btnh133.classList.remove("hour-active");
   var btnh14 = document.getElementById("btnh14");
   btnh14.classList.remove("hour-active");
   var btnh143 = document.getElementById("btnh143");
   btnh143.classList.remove("hour-active");
   var btnh15 = document.getElementById("btnh15");
   btnh15.classList.remove("hour-active");
   var btnh153 = document.getElementById("btnh153");
   btnh153.classList.remove("hour-active");
   var btnh16 = document.getElementById("btnh16");
   btnh16.classList.remove("hour-active");
   var btnh163 = document.getElementById("btnh163");
   btnh163.classList.remove("hour-active");
   var btnh17 = document.getElementById("btnh17");
   btnh17.classList.remove("hour-active");
   var btnh173 = document.getElementById("btnh173");
   btnh173.classList.remove("hour-active");
   var btnh18 = document.getElementById("btnh18");
   btnh18.classList.remove("hour-active");
   var btnh183 = document.getElementById("btnh183");
   btnh183.classList.remove("hour-active");
   var btnh19 = document.getElementById("btnh19");
   btnh19.classList.remove("hour-active");
   var btnh193 = document.getElementById("btnh193");
   btnh193.classList.remove("hour-active");
   var btnh20 = document.getElementById("btnh20");
   btnh20.classList.remove("hour-active");
   chosenHour = "20:30 AM";
   document.getElementById("banana").innerHTML= chosenHour;
}


/* CALENDAR END */


function addRow () {
   document.querySelector('#new-ticket').insertAdjacentHTML(
     'afterbegin',
     `<div class="data-tickets-add" id="++">
     

     <div class="data-tickets-info">
         <select name="type-person" id="type-person">
             <option value="Adult" id="Adult">Adult</option>
             <option value="child-12" id="child-12">&lt;18 years</option>
             <option value="Member" id="Member">Member</option>
             <option value="Senior"id="Senior">Senior</option>
         </select>

         <div class="data-info-name">
             <p id="visit-day"></p>
         </div>

         <div class="data-info-quantity">
             <select name="quantity" id="quantity">
               <option value="1" id="one">1</option>
               <option value="0" id="zero" onclick="removeRow(this)">0</option>
               <option value="1" id="one">1</option>
               <option value="2" id="two">2</option>
               <option value="3" id="three">3</option>
               <option value="4"id="four">4</option>
               <option value="5"id="five">5</option>
               <option value="6"id="six">6</option>
             </select>
         </div>

         <div class="data-info-promo">
             <p id="final-price">6,00€</p>
         </div>
     </div>
 </div>
 <input type="button" value="-" class="remove-btn" onclick="removeRow(this)">`      
   )
   
 }
let input = getElementById("visit-day")
 function removeRow (input) {
   
   input.parentNode.remove(input);
 }




function personFunction(){
   var type = document.getElementById("type-person").value;
if( type == "Adult"){
   mult = 6;
}
if( type == "child"){
   mult = 1;
}
if( type == "Member"){
   mult = 0;
}
if( type == "Senior"){
   mult = 3;
}
document.getElementById("price-unit").innerHTML =  mult + ".00€"

atualizeFunction();
}


function quantFunction(){
   var quant = document.getElementById("quantity").value;
   atualizeFunction();
}

function atualizeFunction(){
   var quant = document.getElementById("quantity").value;
   total =mult*quant ;
   document.getElementById("total-ticket").innerHTML =  total + ".00€"
document.getElementById("total-ticket-2").innerHTML =  total + ".00€"
}

document.getElementById("total-ticket-2").innerHTML =  total + ".00€";




/* MODAL PHOTOS */
function openModal() {
   document.getElementById("myModal").style.display = "block";
 }
 
 function closeModal() {
   document.getElementById("myModal").style.display = "none";
 }
 
 var slideIndex = 1;
 showSlides(slideIndex);
 
 function plusSlides(n) {
   showSlides(slideIndex += n);
 }
 
 function currentSlide(n) {
   showSlides(slideIndex = n);
 }
 
 function showSlides(n) {
   var i;
   var slides = document.getElementsByClassName("mySlides");
   var dots = document.getElementsByClassName("demo");
   var captionText = document.getElementById("caption");
   if (n > slides.length) {slideIndex = 1}
   if (n < 1) {slideIndex = slides.length}
   for (i = 0; i < slides.length; i++) {
       slides[i].style.display = "none";
   }
   for (i = 0; i < dots.length; i++) {
       dots[i].className = dots[i].className.replace(" active", "");
   }
   slides[slideIndex-1].style.display = "block";
   dots[slideIndex-1].className += " active";
   captionText.innerHTML = dots[slideIndex-1].alt;
 }



/* MODAL PHOTOS END */


