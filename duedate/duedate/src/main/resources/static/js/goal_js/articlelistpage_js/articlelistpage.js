var modal = document.getElementById("modal");
var modalTitle = document.getElementById("box_title");
var modalText = document.getElementById("box_text");
const closeModal = document.getElementById('close_modal');

var articleItems = document.querySelectorAll(".article_box_li");

const number1 = document.getElementById('main_header_num');
const decreaseBtn = document.getElementById('minus');
const increaseBtn = document.getElementById('plus');

let isModalOpen = false;

let numberValue = parseInt(number1.textContent);

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


articleItems.forEach(function(item, index) {
    item.addEventListener("click", function() {

        if (isModalOpen) {
            modal.style.display = "none";
            isModalOpen = false;
        }

        var title = item.querySelector(".article_li_title").textContent;

        modalTitle.textContent = title;

        modal.style.display = "flex";
        isModalOpen = true;
    });
});

closeModal.addEventListener("click", function() {
    modal.style.display = "none";
    isModalOpen = false;
});

window.addEventListener("keydown", function(event) {
    if (event.key === "Escape" && isModalOpen) {
        modal.style.display = "none";
        isModalOpen = false;
    }
});


const diaryOrder = document.querySelectorAll('.box')[0];
diaryOrder.setAttribute('style', 'background-color : rgb(223, 241, 235)');
