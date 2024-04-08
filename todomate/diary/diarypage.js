//---------------------------------------------------------- 큰달력 달력------------------------------------------------------------------
let date = new Date();
let currYear = date.getFullYear(), currMonth = date.getMonth();
 
// console.log(date);
// console.log(currYear);
// console.log(currMonth);

const months = [
  'January',
  'February',
  'March',
  'April',
  'May',
  'June',
  'July',
  'August',
  'September',
  'October',
  'November',
  'December',
];
 
// console.log(months[currMonth]);



const currentDate = document.querySelector('.current-date');
const daysTag = document.querySelector(".days");
const prevNextBtn = document.querySelectorAll(".rightCalendarMonth button");


const renderCalendar = () => {
  let firstDayofMonth = new Date(currYear, currMonth, 1).getDay();
  let lastDateofMonth = new Date(currYear, currMonth + 1,0).getDate();
  let lastDayofMonth = new Date(currYear, currMonth, lastDateofMonth).getDay();
  let lastDateofLastMonth = new Date(currYear, currMonth, 0).getDate();
  let divLiTag = "";

  for (let i = firstDayofMonth; i > 0; i--) {
    divLiTag += `<div><li class="inactive">${lastDateofLastMonth - i + 1}</li></div>`;
  }

  for (let i = 1; i <= lastDateofMonth; i++){
    let isToday = i === date.getDate() && currMonth === new Date().getMonth()
                  && currYear === new Date().getFullYear() ? "active" : "";
    divLiTag += `<div><li class="${isToday}">${i}</li><a></a></div>`;
  }

  for (let i = lastDayofMonth; i < 6; i++) {
    divLiTag += `<div><li class="inactive">${i - lastDayofMonth + 1}</li></div>`;
  }

  currentDate.innerText = `${months[currMonth]}🚓${+currYear}`;
  daysTag.innerHTML = divLiTag;
}
renderCalendar();

prevNextBtn.forEach(btn => {
  btn.addEventListener("click", () =>{
    currMonth = btn.id === "prev" ? currMonth -1 : currMonth + 1;

    if(currMonth < 0 || currMonth > 11){
      date = new Date(currYear, currMonth);
      currYear = date.getFullYear();
      currMonth = date.getMonth();
    }else{
      date = new Date();
    }
    renderCalendar();
  });
});

//-------------------------------------------------------------------------------------------------------------------------------------

//-------------------------------------------------------- 작은 달력 -------------------------------------------------------------------

const leftCurrentDate = document.querySelector('.leftCurrent-date');
const leftDaysTag = document.querySelector(".leftDays");
const leftPrevNextBtn = document.querySelectorAll(".leftCalendarMonth button");

const renderLeftCalendar = () => {
  let firstDayofMonth = new Date(currYear, currMonth, 1).getDay();
  let lastDateofMonth = new Date(currYear, currMonth + 1,0).getDate();
  let lastDayofMonth = new Date(currYear, currMonth, lastDateofMonth).getDay();
  let lastDateofLastMonth = new Date(currYear, currMonth, 0).getDate();
  let liTag = '';

  for (let i = firstDayofMonth; i > 0; i--) {
    liTag += `<li class="inactive">${lastDateofLastMonth - i + 1}</li>`;
  }

  for (let i = 1; i <= lastDateofMonth; i++){
    let isToday = i === date.getDate() && currMonth === new Date().getMonth()
                  && currYear === new Date().getFullYear() ? "leftActive" : "";
    liTag += `<li class="${isToday}">${i}</li>`;
  }

  for (let i = lastDayofMonth; i < 6; i++) {
    liTag += `<li class="inactive">${i - lastDayofMonth + 1}</li>`;
  }

  leftCurrentDate.innerText = `${+currYear}🍔0${currMonth +1}`;
  leftDaysTag.innerHTML = liTag;
}
renderLeftCalendar();

leftPrevNextBtn.forEach(lbtn => {
  lbtn.addEventListener("click", () =>{
    currMonth = lbtn.id === "prev" ? currMonth -1 : currMonth + 1;

    if(currMonth < 0 || currMonth > 11){
      date = new Date(currYear, currMonth);
      currYear = date.getFullYear();
      currMonth = date.getMonth();
    }else{
      date = new Date();
    }
    renderLeftCalendar();
  });
});







// ------------------------------------------------------------------------------------------------------------------------------------


// ----------------------------------------------- 일기장 || 캘린더 버튼 클릭 시---------------------------------------------------------
const showDiary = document.getElementById("showDiary");
const showCalendarbtn = document.querySelector("#showCalendarbtn");

const diaryTitle = document.querySelector(".diaryOrCalendar");
const myDiary = document.querySelector(".myDiary");

const rightCalendarMonth = document.querySelector(".rightCalendarMonth");
const diaryCalender = document.querySelector(".diaryCalender");


showDiary.addEventListener('click', function (){
  if(diaryTitle.style.display=='none' && myDiary.style.display=='none'){
    diaryTitle.style.display = '';
    myDiary.style.display = '';
    rightCalendarMonth.style.display = 'none';
    diaryCalender.style.display = 'none';
  }
});

showCalendarbtn.addEventListener('click', function(){
  if(rightCalendarMonth.style.display == 'none' && diaryCalender.style.display == 'none'){
    diaryTitle.style.display = 'none';
    myDiary.style.display = 'none';
    rightCalendarMonth.style.display = '';
    diaryCalender.style.display = '';
  }
});
// ----------------------------------------------------------------------------------------------------------------------------------------