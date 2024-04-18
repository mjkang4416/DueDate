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

const selectDateNgo = document.querySelector("#datepicker");







const renderCalendar = () => {
  let firstDayofMonth = new Date(currYear, currMonth, 1).getDay();
  let lastDateofMonth = new Date(currYear, currMonth + 1,0).getDate();
  let lastDayofMonth = new Date(currYear, currMonth, lastDateofMonth).getDay();
  let lastDateofLastMonth = new Date(currYear, currMonth, 0).getDate();
  let divLiTag = "";

  for (let i = firstDayofMonth; i > 0; i--) {
    divLiTag += `<div>
        <li class="inactive">${lastDateofLastMonth - i + 1}</li>
      </div>`;
  }



  for (let i = 1; i <= lastDateofMonth; i++){
    let isToday = i === date.getDate() && currMonth === new Date().getMonth()
                  && currYear === new Date().getFullYear() ? "active" : "";
    divLiTag += `<div id="dayOf${i}" class="day" onclick=selectDay(${i})><li class="${isToday}">${i}</li><span class="newDiaryEmo${i}"></span></div>`;

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




// ----------------------------------------------- 일기장 || 캘린더 버튼 클릭 시---------------------------------------------------------
const showDiary = document.getElementById("showDiary");
const showCalendarbtn = document.querySelector("#showCalendarbtn");

const diaryTitle = document.querySelector(".diaryOrCalendar");
const myDiary = document.querySelector(".myDiary");

const rightCalendarMonth = document.querySelector(".rightCalendarMonth");
const diaryCalender = document.querySelector(".diaryCalender");



showDiary.addEventListener('click', function (){
  if(myDiary.style.display=='none'){
    myDiary.style.display = '';
    diaryCalender.style.display = 'none';

  }
});

showCalendarbtn.addEventListener('click', function(){
  if(diaryCalender.style.display == 'none'){
    myDiary.style.display = 'none';
    diaryCalender.style.display = '';
  }
});
// ----------------------------------------------------------------------------------------------------------------------------------------

//-------------------------------------------------큰 달력의 날짜 클릭 시 해당 날짜 가지고 일기장으로 넘기기------------------------------------------

// 큰달력 div에 onclick으로 넣음
function selectDay(day){
  let selectDate = currYear+"-"+(currMonth+1)+"-"+day;
  for (let i = 1; i <= 31; i++) {
    // console.log(selectDate);
    if(selectDate <= currYear+"-"+(date.getMonth()+1)+"-"+date.getDate()){
        selectDateNgo.value = selectDate;
        if(myDiary.style.display=='none'){
          myDiary.style.display = '';
          diaryCalender.style.display = 'none';
        }
      }else{
        alert("오늘까지의 일기를 작성해 주세요");
        break;
      // myDiary.style.display = 'none';
      // diaryCalender.style.display = '';
    }
  }
};





// -----------------------------------------------------------------------------------------------------------------------------------
// 일기장 유효성 검사
const writeDiaryForm = document.querySelector('.writeDiaryForm');

const myDiaryDate = document.querySelector('#datepicker');
const rightDiaryEmo = document.querySelector('.rightDiaryEmo');
const myDiaryTitle = document.querySelector('.myDiaryTitle');
const myDiaryDetail = document.querySelector('.myDiaryDetail');

const submitBtn = document.querySelector('.submit-button');
const cancel = document.querySelector('#cancel');



submitBtn.addEventListener('click', () =>{
  if(myDiaryDate.value == ""){
    alert("날짜를 작성해 주세요");
  }else if(myDiaryTitle.value == ""){
    alert("제목을 작성해 주세요")
  }else if(myDiaryDetail.value == ""){
    alert("일기 내용을 작성해 주세요");
  }else{
    alert("작성 완료");
    /*다이어리 데이트 벨류와 달력의 날짜가 같으면
    dayOf${o}아이디에 class="day ${haveDiary}" 추가
    li태그 뒤에 <span>${rightDiaryEmo.value}</span> 추가*/
    // alert(rightDiaryEmo.value);


    //달력이동 또는 투데이 버튼 클릭 또는 일기장에서 날짜선택 시 작동 이상 수정 필요
    const newDiaryEmo = document.querySelectorAll(".days span");
    const dayof = document.querySelectorAll(".day");
    // const leftCalDiarychk = document.querySelectorAll(".leftDays li")

    const chkDiary = () => {
      for (let k = 1; k <= 31; k++) {
        if(myDiaryDate.value === date.getFullYear()+"-"+(currMonth+1)+"-"+k){
          dayof[k-1].className = 'day haveDiary';
          newDiaryEmo[k-1].innerText= rightDiaryEmo.value;
        }else{
        }
        // renderCalendar();
      } 
    }
    chkDiary();
    writeDiaryForm.reset();
    
    
    

    // daysTag.innerHTML = `<span>😊</span>`;
    // let divEmoTag = 
    // console.log(rightDiaryEmo.value);
    // if(myDiaryDate.value === df){
    // }; 
    //작성 완료 시 일기장 
    //1 .DB연동
    //2. 날짜랑 이모티코 가지고 큰달력으로 넘어가서 달력 위에 뿌리기
  }
});

cancel.addEventListener('click', () =>{
  alert("일기장 작성 취소");
  writeDiaryForm.reset();
});



  

//-------------------------------------------------------- 작은 달력 -------------------------------------------------------------------

// const leftCurrentDate = document.querySelector('.leftCurrent-date');
// const leftDaysTag = document.querySelector(".leftDays");
// const leftPrevNextBtn = document.querySelectorAll(".leftCalendarMonth button");
// const leftGoToday = document.querySelector(".leftTodayButton");

// const renderLeftCalendar = () => {
//   let firstDayofMonth = new Date(currYear, currMonth, 1).getDay();
//   let lastDateofMonth = new Date(currYear, currMonth + 1,0).getDate();
//   let lastDayofMonth = new Date(currYear, currMonth, lastDateofMonth).getDay();
//   let lastDateofLastMonth = new Date(currYear, currMonth, 0).getDate();
//   let liTag = '';

//   for (let i = firstDayofMonth; i > 0; i--) {
//     liTag += `<li class="inactive">${lastDateofLastMonth - i + 1}</li>`;
//   }

//   for (let i = 1; i <= lastDateofMonth; i++){
//     let isToday = i === date.getDate() && currMonth === new Date().getMonth()
//                   && currYear === new Date().getFullYear() ? "leftActive" : "";
//     liTag += `<li class="${isToday}">${i}</li>`;
//   }

//   for (let i = lastDayofMonth; i < 6; i++) {
//     liTag += `<li class="inactive">${i - lastDayofMonth + 1}</li>`;
//   }

//   leftCurrentDate.innerText = `${currYear}🍔0${currMonth +1}`;
//   leftDaysTag.innerHTML = liTag;
// }
// renderLeftCalendar();

// leftPrevNextBtn.forEach(lbtn => {
//   lbtn.addEventListener("click", () =>{
//     currMonth = lbtn.id === "prev" ? currMonth -1 : currMonth + 1;

//     if(currMonth < 0 || currMonth > 11){
//       date = new Date(currYear, currMonth);
//       currYear = date.getFullYear();
//       currMonth = date.getMonth();
//     }else{
//       date = new Date();
//     }
//     renderLeftCalendar();
//   });
// });

// leftGoToday.addEventListener("click", () =>{
//   date = new Date();
//   currYear = date.getFullYear();
//   currMonth = date.getMonth();
//   renderLeftCalendar();
// });





// ------------------------------------------------------------------------------------------------------------------------------------