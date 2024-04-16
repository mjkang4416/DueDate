// 햄버거 메뉴---------------
const hamburgerMenu = document.getElementById("hamburgerMenu");
const leftMenu = document.getElementById("leftMenu");

hamburgerMenu.addEventListener("click", () => {
  leftMenu.classList.toggle("show-menu");
});

// mypage menu--------------------
document.querySelector(".mypage-btn").addEventListener("click", function () {
  document.getElementById("mypage-menu-wrap").classList.toggle("active-page");
});

document.querySelector(".close-btn").addEventListener("click", function () {
  document.getElementById("mypage-menu-wrap").classList.remove("active-page");
});

document.addEventListener("click", function (event) {
  var menu = document.getElementById("mypage-menu-wrap");
  var target = event.target;
  var isMenuButton =
    target.matches(".mypage-btn") || target.closest(".mypage-btn");
  var isMenu =
    target.matches(".mypage-menu-wrap") || target.closest(".mypage-menu-wrap");
  var isCloseButton = target.matches(".close-btn");

  if (!isMenuButton && !isMenu && !isCloseButton) {
    menu.classList.remove("active-page");
  }
});

//todo list------------------------------
var categoryTodoCounts = {
  category1: 0,
  category2: 0,
  category3: 0,
};

document.addEventListener("click", function (event) {
  var target = event.target;
  if (target.classList.contains("add-todo")) {
    addNewTodoList(event);
  }
  if (target.classList.contains("todo-del")) {
    var todoItem = target.closest(".check-todo"); // 삭제 버튼을 포함한 할일 목록을 찾습니다.
    if (todoItem) {
      var todoInput = todoItem.querySelector(".todo"); // 할일 입력란을 찾습니다.
      todoInput.value = ""; // 할일 입력란을 비웁니다.
    }
  }
});

function addNewTodoList(event) {
  var addButton = event.target;
  var parentCategory = addButton.closest(".category");

  // 카테고리별 할일 목록 개수를 확인합니다.
  var categoryId = parentCategory.getAttribute("id");
  var todoCount = categoryTodoCounts[categoryId] || 0;

  // 각 카테고리별로 5개 이상의 할일 목록을 체크합니다.
  if (todoCount >= 5) {
    alert("이 카테고리의 할일 목록은 최대 5개까지만 생성할 수 있습니다.");
    return;
  }

  // 할일 목록 개수를 증가시킵니다.
  categoryTodoCounts[categoryId] = todoCount + 1;

  // 새로운 할일 목록을 생성합니다.
  var newTodoList = document.createElement("div");
  newTodoList.classList.add("check-todo");

  var todoWrap = document.createElement("div");
  todoWrap.classList.add("todo-wrap");

  var checkTodo = document.createElement("div");
  checkTodo.classList.add("check-todo");

  var checkbox = document.createElement("input");
  checkbox.setAttribute("type", "checkbox");
  checkbox.classList.add("checkbox");

  var inputTodo = document.createElement("input");
  inputTodo.classList.add("todo");
  inputTodo.setAttribute("placeholder", "할일");

  var todoDeleteBtn = document.createElement("button");
  todoDeleteBtn.classList.add("todo-del");

  var deleteImg = document.createElement("img");
  deleteImg.setAttribute("src", "./img/delete.png");
  deleteImg.setAttribute("alt", "del");

  deleteImg.addEventListener("click", function (event) {
    var todoItem = this.closest(".check-todo");
    if (todoItem) {
      var todoInput = todoItem.querySelector(".todo");
      todoInput.value = "";
    }
    deleteImg.addEventListener("click", function (event) {
      if (todoItem) {
        var parent = todoItem.parentElement;
        parent.removeChild(todoItem);
        todoCount--;
      }
    });
  });

  // 생성된 요소들을 조립합니다.
  todoDeleteBtn.appendChild(deleteImg);
  checkTodo.appendChild(checkbox);
  checkTodo.appendChild(inputTodo);
  todoWrap.appendChild(checkTodo);
  todoWrap.appendChild(todoDeleteBtn);
  newTodoList.appendChild(todoWrap);

  // 생성된 새로운 할일 목록을 클릭된 버튼의 부모 요소에 추가합니다.
  parentCategory.nextElementSibling.appendChild(newTodoList);
}

//큰달력 ----------------------------
let date = new Date();
let currYear = date.getFullYear(),
  currMonth = date.getMonth();

const months = [
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

const currentDate = document.querySelector(".current-date");
const daysTag = document.querySelector(".days");
const prevNextBtn = document.querySelectorAll(".rightCalendarMonth button");

const renderCalendar = () => {
  let firstDayofMonth = new Date(currYear, currMonth, 1).getDay();
  let lastDateofMonth = new Date(currYear, currMonth + 1, 0).getDate();
  let lastDayofMonth = new Date(currYear, currMonth, lastDateofMonth).getDay();
  let lastDateofLastMonth = new Date(currYear, currMonth, 0).getDate();
  let divLiTag = "";

  for (let i = firstDayofMonth; i > 0; i--) {
    divLiTag += `<div><li class="inactive">${
      lastDateofLastMonth - i + 1
    }</li></div>`;
  }

  for (let i = 1; i <= lastDateofMonth; i++) {
    let isToday =
      i === date.getDate() &&
      currMonth === new Date().getMonth() &&
      currYear === new Date().getFullYear()
        ? "active"
        : "";
    divLiTag += `<div><li class="${isToday}" data-date="${i}">${i}</li><a></a></div>`;
  }

  for (let i = lastDayofMonth; i < 6; i++) {
    divLiTag += `<div><li class="inactive">${
      i - lastDayofMonth + 1
    }</li></div>`;
  }

  currentDate.innerText = `${months[currMonth]} ${+currYear}`;
  daysTag.innerHTML = divLiTag;
  const days = document.querySelectorAll(".days li");
  days.forEach((day) => {
    day.addEventListener("click", (e) => {
      days.forEach((day) => {
        day.classList.remove("clicked-day");
      });
      e.target.classList.add("clicked-day");
      const selectedDate = e.target.dataset.date;
      showTodoList(selectedDate);
    });
  });
};

const showTodoList = (date) => {
  const todoList = todoLists[date] || [];
  // 여기에 선택한 날짜에 대한 할 일 목록을 보여주는 로직을 작성합니다.
};

const addTodo = (date, todo) => {
  if (!todoLists[date]) {
    todoLists[date] = [];
  }
  todoLists[date].push(todo);
};

window.onload = function () {
  renderCalendar();
};

const leftCurrentDate = document.querySelector(".leftCurrent-date");
const leftDaysTag = document.querySelector(".leftDays");
const leftPrevNextBtn = document.querySelectorAll(".leftCalendarMonth button");

const renderLeftCalendar = () => {
  let firstDayofMonth = new Date(currYear, currMonth, 1).getDay();
  let lastDateofMonth = new Date(currYear, currMonth + 1, 0).getDate();
  let lastDayofMonth = new Date(currYear, currMonth, lastDateofMonth).getDay();
  let lastDateofLastMonth = new Date(currYear, currMonth, 0).getDate();
  let liTag = "";

  for (let i = firstDayofMonth; i > 0; i--) {
    liTag += `<li class="inactive">${lastDateofLastMonth - i + 1}</li>`;
  }

  for (let i = 1; i <= lastDateofMonth; i++) {
    let isToday =
      i === date.getDate() &&
      currMonth === new Date().getMonth() &&
      currYear === new Date().getFullYear()
        ? "leftActive"
        : "";
    liTag += `<li class="${isToday}">${i}</li>`;
  }

  for (let i = lastDayofMonth; i < 6; i++) {
    liTag += `<li class="inactive">${i - lastDayofMonth + 1}</li>`;
  }

  leftCurrentDate.innerText = `${+currYear}  0${currMonth + 1}`;
  leftDaysTag.innerHTML = liTag;
};
renderLeftCalendar();

const updateCalendars = () => {
  renderCalendar();
  renderLeftCalendar();
};

prevNextBtn.forEach((btn) => {
  btn.addEventListener("click", () => {
    currMonth = btn.id === "prev" ? currMonth - 1 : currMonth + 1;

    if (currMonth < 0 || currMonth > 11) {
      date = new Date(currYear, currMonth);
      currYear = date.getFullYear();
      currMonth = date.getMonth();
    } else {
      date = new Date();
    }
    updateCalendars();
  });
});

leftPrevNextBtn.forEach((lbtn) => {
  lbtn.addEventListener("click", () => {
    currMonth = lbtn.id === "prev" ? currMonth - 1 : currMonth + 1;

    if (currMonth < 0 || currMonth > 11) {
      date = new Date(currYear, currMonth);
      currYear = date.getFullYear();
      currMonth = date.getMonth();
    } else {
      date = new Date();
    }
    updateCalendars();
  });
});
