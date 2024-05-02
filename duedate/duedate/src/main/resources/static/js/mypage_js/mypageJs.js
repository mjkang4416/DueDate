var setting = document.getElementById('setting');
var modal = document.getElementById('modal');

const closeModal = document.querySelector('#close_modal');
const openModal = document.querySelector('#setting_img');
const fileInput = document.getElementById('fileInput');
const img = document.getElementById('modal_img');
const photoImg = document.getElementById('modal_photo');
const name1 = document.getElementById('modal_Id');
const email = document.getElementById('modal_email');
const nickname = document.getElementById('modal_nickname');
const profileImg = document.getElementById("profile_img");

const profileName = document.getElementById('profile_name');
const profileEmail = document.getElementById('profile_email');
const profileNickname = document.getElementById('profile_nickname');

const checkModal = document.getElementById('modal_check');
const cancelModal = document.getElementById('modal_cancel');

let isModalOpen = false;

openModal.addEventListener("click", ()=> {
    isModalOpen = true;
    modal.style.display="flex";
    originProfile();
});

closeModal.addEventListener("click", ()=> {
    isModalOpen = false;
    modal.style.display="none";
});

photoImg.addEventListener("click", ()=> {
    document.getElementById('fileInput').click();
});

checkModal.addEventListener("click", ()=> {
    profileChange();
    modal.style.display="none";
});

cancelModal.addEventListener("click", ()=> {
    modal.style.display="none";
});

function handleFileSelect(event) {
    var file = event.target.files[0]; // 선택된 파일

    // FileReader 객체를 사용하여 파일을 읽음
    var reader = new FileReader();
    reader.onload = function(event) {
      var profileImage = img;
      // 읽어온 파일의 내용을 프로필 이미지로 설정
      profileImage.src = event.target.result;

      // 여기서는 실제로 프로필을 서버에 업데이트하는 코드를 추가해야 합니다.
      // 예를 들어, AJAX 요청을 보내거나 어떤 방식으로든 프로필을 업데이트할 수 있습니다.
      // 이 예제에서는 변경된 이미지의 데이터 URI를 콘솔에 출력합니다.
      console.log('프로필 이미지가 변경되었습니다:', event.target.result);
    };
    
    // 파일을 읽어오도록 요청
    reader.readAsDataURL(file);
}

function profileChange() {
    profileImg.src = img.src;
    profileName.innerText = "이름 : " + name1.value;
    profileEmail.innerText = "이메일 : " + email.value;
    profileNickname.innerText = "닉네임 : " + nickname.value;
}

function originProfile() {
    img.src = profileImg.src;
    name1.value = profileName.innerText.split(' : ')[1].trim();
    email.value = profileEmail.innerText.split(' : ')[1].trim();
    nickname.value = profileNickname.innerText.split(' : ')[1].trim();
}

window.addEventListener("keydown", function(event) {
    if (event.key === "Escape" && isModalOpen) {
        modal.style.display = "none";
        isModalOpen = false;
    }
});

profileImg.addEventListener("click", () => {
    isModalOpen = true;
    modal.style.display="flex";
    originProfile();
});



function validateForm() {
    let valid = true;
    const password = document.getElementById('passwd_input').value;
    const confirmPassword = document.getElementById('passwd_check').value;

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
    if (valid) {
        alert('비밀번호 변경 성공!');
    }
    return valid;
}