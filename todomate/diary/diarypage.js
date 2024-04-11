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
const rightGoToday = document.querySelector(".rightTodayButton");


const renderCalendar = () => {
  let firstDayofMonth = new Date(currYear, currMonth, 1).getDay();
  let lastDateofMonth = new Date(currYear, currMonth + 1,0).getDate();
  let lastDayofMonth = new Date(currYear, currMonth, lastDateofMonth).getDay();
  let lastDateofLastMonth = new Date(currYear, currMonth, 0).getDate();
  let divLiTag = "";

  for (let i = firstDayofMonth; i > 0; i--) {
    divLiTag += `<div id="dayOf${lastDateofLastMonth - i + 1}" class="day">
        <li class="inactive">${lastDateofLastMonth - i + 1}</li>
      </div>`;
  }

  for (let i = 1; i <= lastDateofMonth; i++){
    let isToday = i === date.getDate() && currMonth === new Date().getMonth()
                  && currYear === new Date().getFullYear() ? "active" : "";
    divLiTag += `<div id="dayOf${i}" class="day"><li class="${isToday}">${i}</li></div>`;
  }

  for (let i = lastDayofMonth; i < 6; i++) {
    divLiTag += `<div>
        <li class="inactive">${i - lastDayofMonth + 1}</li>
      </div>`;
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

rightGoToday.addEventListener("click", () =>{
  date = new Date();
  currYear = date.getFullYear();
  currMonth = date.getMonth();
  renderCalendar();
});



//-------------------------------------------------------------------------------------------------------------------------------------

//-------------------------------------------------------- 작은 달력 -------------------------------------------------------------------

const leftCurrentDate = document.querySelector('.leftCurrent-date');
const leftDaysTag = document.querySelector(".leftDays");
const leftPrevNextBtn = document.querySelectorAll(".leftCalendarMonth button");
const leftGoToday = document.querySelector(".leftTodayButton");

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

  leftCurrentDate.innerText = `${currYear}🍔0${currMonth +1}`;
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

leftGoToday.addEventListener("click", () =>{
  date = new Date();
  currYear = date.getFullYear();
  currMonth = date.getMonth();
  renderLeftCalendar();
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

//-------------------------------------------------큰 달력의 날짜 클릭 시 해당 날짜 가지고 일기장으로 넘기기------------------------------------------
const selectDays = document.querySelectorAll(".day");

const dateControl = document.querySelector('input[type="date"]');

dateControl.value = `${currYear}-0${currMonth+1}-${date.getDate()}`;


selectDays.forEach(sdays =>{
  sdays.addEventListener("click", () => {
    console.log("클릭됨");
      
  });
});

// -----------------------------------------------------------------------------------------------------------------------------------
// 일기장 유효성 검사
const writeDiaryForm = document.querySelector('.writeDiaryForm');

const myDiaryDate = document.querySelector('.myDiaryDate').value;
const rightDiaryEmo = document.querySelector('.rightDiaryEmo').value;
const myDiaryTitle = document.querySelector('.myDiaryTitle').value;
const myDiaryDetail = document.querySelector('myDiaryDetail');

const submitBtn = document.querySelector('.submit-button');
const cancel = document.querySelector('#cancel');

// var datatimeRegexp = /^(19|20)\d{2}-(0[1-9]|1[012])-(0[1-9]|[12][0-9]|3[0-1])$/;

// if ( !datatimeRegexp.test($('#diarydate').value()) ) {
    // alert("날짜는 yyyy-mm-dd 형식으로 입력해주세요.");
    // return false;
// }

//※※※※※※※※※※※※※※※※※※※※※※※※※※수정필요
submitBtn.addEventListener('click', () =>{
  if(myDiaryDate.trim() == ""){
    alert("날짜를 작성해 주세요");
  }else if(myDiaryTitle.trim().length == 0){
    alert("제목을 작성해 주세요")
  }else if( myDiaryDetail.value.trim() == ""){
    alert("일기 내용을 작성해 주세요");
  }else{
    alert("작성 완료");
    //DB연동 필요
  }
});
//※※※※※※※※※※※※※※※※※※※※※※※※※※※※※※


cancel.addEventListener('click', () =>{
  alert("일기장 작성 취소");
  writeDiaryForm.reset();
});