let menuBtn = document.querySelector('.burger-menu');
let menuList = document.querySelector('.menu-list');

menuBtn.addEventListener('click', function (){
    menuBtn.classList.toggle('active');
    menuList.classList.toggle('active');
})