// 달수 변경을 위한 변수
const number1 = document.getElementById('main_header_num');
const decreaseBtn = document.getElementById('minus');
const increaseBtn = document.getElementById('plus');

// 현재 달수의 수를 가져오는 코드
var numberValue = parseInt(number1.textContent);

// 달 수 변경 코드
decreaseBtn.addEventListener('click', () => {
    numberValue = numberValue - 1;
    if (numberValue == 0) numberValue = 12;
    number1.textContent = numberValue;
});

increaseBtn.addEventListener('click', () => {
    numberValue = numberValue + 1;
    if (numberValue == 13) numberValue = 1;
    number1.textContent = numberValue;
});

// 모달창 구현을 위한 코드
var box = document.querySelectorAll(".main_box_wrap");

// 모달이 닫혀있는지 알려있는지 확인
let isModalOpen = false;

// 클릭하면 모달이 나오는 box를 하나씩 읽어오는 코드
box.forEach(function(item, index) {
    var modal = document.getElementById("modal" + (index + 1));
    var closeModal = document.getElementById("close_modal" + (index + 1));
    
    item.addEventListener("click", function() {
        if (isModalOpen) {
            modal.style.display = "none";
            isModalOpen = false;
        }
        modal.style.display = "flex";
        isModalOpen = true;
    });

    closeModal.addEventListener("click", function() {
        modal.style.display = "none";
        isModalOpen = false;
    });

    window.addEventListener("keydown", function(event) {
        if (event.key === "Escape") {
            modal.style.display = "none";
            isModalOpen = false;
        }
    });
});


document.addEventListener("DOMContentLoaded", function() {
    var modal1Buttons = document.querySelectorAll("#modal1 .checklist_btn");
    var modal2Buttons = document.querySelectorAll("#modal2 .checklist_btn");
    var modal3Buttons = document.querySelectorAll("#modal3 .checklist_btn");

    var modal1Percentage = document.getElementById("goal_gauge_percentage");
    var modal1Bar = document.getElementById("goal_gauge_bar");
    var modal2Percentage = document.getElementById("task_gauge_percentage");
    var modal2Bar = document.getElementById("task_gauge_bar");
    var modal3Percentage = document.getElementById("todo_gauge_percentage");
    var modal3Bar = document.getElementById("todo_gauge_bar");

    // 각 모달의 버튼들에 대한 클릭 이벤트 리스너를 추가합니다.
    modal1Buttons.forEach(function(button) {
        button.addEventListener("click", function() {
            // 버튼 색상 변경
            if (this.style.backgroundColor === "blue") {
                this.style.backgroundColor = "";
                // percentage 25% 감소
                var currentPercentage = parseInt(modal1Percentage.textContent);
                modal1Percentage.textContent = (currentPercentage - 25) + "%";

                // gauge 25% 감소
                var currentWidth = parseInt(modal1Bar.style.width) || 0;
                modal1Bar.style.width = (currentWidth - 25) + "%";
            } else {
                this.style.backgroundColor = "blue";
                // percentage 25% 증가
                var currentPercentage = parseInt(modal1Percentage.textContent);
                modal1Percentage.textContent = (currentPercentage + 25) + "%";

                // gauge 25% 증가
                var currentWidth = parseInt(modal1Bar.style.width) || 0;
                modal1Bar.style.width = (currentWidth + 25) + "%";
            }
        });
    });

    modal2Buttons.forEach(function(button) {
        button.addEventListener("click", function() {
            // 버튼 색상 변경
            if (this.style.backgroundColor === "blue") {
                this.style.backgroundColor = "";
                // percentage 25% 감소
                var currentPercentage = parseInt(modal2Percentage.textContent);
                modal2Percentage.textContent = (currentPercentage - 25) + "%";

                // gauge 25% 감소
                var currentWidth = parseInt(modal2Bar.style.width) || 0;
                modal2Bar.style.width = (currentWidth - 25) + "%";
            } else {
                this.style.backgroundColor = "blue";
                // percentage 25% 증가
                var currentPercentage = parseInt(modal2Percentage.textContent);
                modal2Percentage.textContent = (currentPercentage + 25) + "%";

                // gauge 25% 증가
                var currentWidth = parseInt(modal2Bar.style.width) || 0;
                modal2Bar.style.width = (currentWidth + 25) + "%";
            }
        });
    });

    modal3Buttons.forEach(function(button) {
        button.addEventListener("click", function() {
            // 버튼 색상 변경
            if (this.style.backgroundColor === "blue") {
                this.style.backgroundColor = "";
                // percentage 25% 감소
                var currentPercentage = parseInt(modal3Percentage.textContent);
                modal3Percentage.textContent = (currentPercentage - 25) + "%";

                // gauge 25% 감소
                var currentWidth = parseInt(modal3Bar.style.width) || 0;
                modal3Bar.style.width = (currentWidth - 25) + "%";
            } else {
                this.style.backgroundColor = "blue";
                // percentage 25% 증가
                var currentPercentage = parseInt(modal3Percentage.textContent);
                modal3Percentage.textContent = (currentPercentage + 25) + "%";

                // gauge 25% 증가
                var currentWidth = parseInt(modal3Bar.style.width) || 0;
                modal3Bar.style.width = (currentWidth + 25) + "%";
            }
        });
    });
});