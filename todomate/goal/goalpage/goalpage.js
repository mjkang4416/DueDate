const number1 = document.getElementById('main_header_num');
const decreaseBtn = document.getElementById('minus');
const increaseBtn = document.getElementById('plus');

let numberValue = parseInt(number1.textContent);

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



document.addEventListener("DOMContentLoaded", function() {
    const progressBar = document.querySelector('.bar');
    const percentageText = document.querySelector('.percentage');
    const increaseButton = document.querySelector('.increaseButton');

    let percentage = 0;

    function updateProgressBar() {
        progressBar.style.width = percentage + '%';
        percentageText.textContent = percentage + '%';
    }

    increaseButton.addEventListener('click', function() {
        if (percentage < 100) {
            percentage += 10; // 상승할 값
            updateProgressBar();
        }
    });
});