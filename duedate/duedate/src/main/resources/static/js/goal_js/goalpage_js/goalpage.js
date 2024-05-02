const ulList = document.querySelectorAll('ul');

ulList.forEach(function(ul) {
    // li 요소의 개수를 확인
    var liCount = ul.querySelectorAll('li').length;
    
    // 만약 <li> 요소의 개수가 0이면 이미지를 띄움
    if (liCount === 0) {
        ul.nextElementSibling.style.display = "flex";
    }
    else {
        ul.nextElementSibling.style.display = "none";
    }
});
