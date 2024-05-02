/*
왜 인증 팝업이 2번뜰까....고쳐보겠슴당
*/


document.addEventListener('DOMContentLoaded', function() {
    let certiNum = '';
    let isSent = false;

    document.querySelector('.emailverify-button').addEventListener('click', function() {
        if (!isSent) {
            isSent = true;
            certiNum = Math.floor(100000 + Math.random() * 900000).toString();
            alert("인증번호: " + certiNum);
        }
    });

    document.querySelector('.confirmverify-button').addEventListener('click', function() {
        if (isSent) { 
            var verificationCode = document.getElementById('verificationCode').value;
            if (verificationCode === certiNum) {
                alert("인증이 완료되었습니다.");
                isSent = false; 
            } else {
                alert("올바르지 않은 번호입니다.");
            }
        }
    });

    document.querySelector('.reverify-button').addEventListener('click', function() {
        certiNum = Math.floor(100000 + Math.random() * 900000).toString();
        alert("새 인증번호: " + certiNum);
        isSent = true;
    });

    selectDateoption();
});


function validateForm() {
    let valid = true;
    const username = document.getElementById('username').value;
    const nickname = document.getElementById('nickname').value;
    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;
    const confirmPassword = document.getElementById('confirmPassword').value;
    const terms = document.getElementById('service-terms').checked;
    const privacy = document.getElementById('privacy-policy').checked;
    const marketing = document.getElementById('third-party').checked;
    const ageConfirmation = document.getElementById('age-confirmation').checked;
    if (nickname === "existingNickname") { 
        document.getElementById('nicknameError').style.display = 'block';
        valid = false;
    } else {
        document.getElementById('nicknameError').style.display = 'none';
    }
    if (password.length < 6) {
        document.getElementById('passwordError').style.display = 'block';
        valid = false;
    } else {
        document.getElementById('passwordError').style.display = 'none';
    }
    if (password !== confirmPassword) {
        document.getElementById('confirmPasswordError').style.display = 'block';
        valid = false;
    } else {
        document.getElementById('confirmPasswordError').style.display = 'none';
    }
    if (!terms || !privacy || !marketing || !ageConfirmation) {
        alert('모든 필수 항목을 확인해주세요.');
        valid = false;
    }
    if (valid) {
        alert('가입이 완료되었습니다!');
    }
    return valid;
}

function checkEmail() {
    const email = document.getElementById('email').value;
    if (email === "existingEmail@example.com") {
        document.getElementById('emailError').style.display = 'block';
    } else {
        document.getElementById('emailError').style.display = 'none';
    }
}

function selectDateoption() {
    const monthSelect = document.getElementById('birthday-month');
    const daySelect = document.getElementById('birthday-day');
    const yearSelect = document.getElementById('birthday-year');
    for (let i = 1; i <= 12; i++) {
        let option = new Option(i, i);
        monthSelect.add(option);
    }
    for (let i = 1; i <= 31; i++) {
        let option = new Option(i, i);
        daySelect.add(option);
    }
    const currentYear = new Date().getFullYear();
    for (let i = currentYear; i >= 1900; i--) {
        let option = new Option(i, i);
        yearSelect.add(option);
    }
}
