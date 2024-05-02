document.addEventListener("DOMContentLoaded", function() {
    var loginForm = document.getElementById("loginForm");

    loginForm.addEventListener("submit", function(event) {
        event.preventDefault();

        var email = document.getElementById("email").value;
        var password = document.getElementById("password").value;

        if(email === "test@gmail.com" && password === "1234") {
            window.location.href = "../diary/diarypage.html";
        } else {
            alert("이메일 또는 비밀번호가 틀렸습니다!.");
        }
    });
});
