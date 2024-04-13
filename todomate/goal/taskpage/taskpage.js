var box = document.querySelectorAll(".main_box_wrap");

let isModalOpen = false;

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