// 햄버거 메뉴---------------
// const hamburgerMenu = document.getElementById("hamburgerMenu");
// const leftMenu = document.getElementById("leftMenu");

// hamburgerMenu.addEventListener("click", () => {
//   leftMenu.classList.toggle("show-menu");
// });

// mypage menu--------------------
document.querySelector(".mypage-btn").addEventListener("click", function () {
  document.getElementById("mypage-menu-wrap").classList.toggle("active-page");
});

document.querySelector(".close-btn").addEventListener("click", function () {
  document.getElementById("mypage-menu-wrap").classList.remove("active-page");
});

document.addEventListener("click", function (event) {
  var menu = document.getElementById("mypage-menu-wrap");
  var target = event.target;
  var isMenuButton =
    target.matches(".mypage-btn") || target.closest(".mypage-btn");
  var isMenu =
    target.matches(".mypage-menu-wrap") || target.closest(".mypage-menu-wrap");
  var isCloseButton = target.matches(".close-btn");

  if (!isMenuButton && !isMenu && !isCloseButton) {
    menu.classList.remove("active-page");
  }
});
