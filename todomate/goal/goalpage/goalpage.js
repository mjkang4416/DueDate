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
    const progressBar = document.querySelector('#goal_bar');
    const percentageText = document.querySelector('#goal_percentage');
    const increaseButton = document.querySelector('#goal_increase');

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

document.addEventListener("DOMContentLoaded", function() {
    const progressBar = document.querySelector('#project_bar');
    const percentageText = document.querySelector('#project_percentage');
    const increaseButton = document.querySelector('#project_increase');

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

document.addEventListener("DOMContentLoaded", function() {
    const progressBar = document.querySelector('#task_bar');
    const percentageText = document.querySelector('#task_percentage');
    const increaseButton = document.querySelector('#task_increase');

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