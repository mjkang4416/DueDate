const title = document.querySelector('.t');
const data = document.querySelector('.data');
const submit = document.querySelector('.submit');
const  pluseImg = document.querySelector('.im');

function click(){
    if(title.value == ''){
        alert('입력란이 비어있습니다!');
    }
    else if(data.value == ''){
        alert('입력란이 비어있습니다!');
    }
};


