const iconMenu = document.querySelector('.header__menu');
const menuBody = document.querySelector('.header__mob-wrp');
const logo = document.querySelector('.header-logo');
const link = document.getElementById('close');
iconMenu.addEventListener('click', function(e){
    document.body.classList.toggle('lock');
    iconMenu.classList.toggle('active3');
    menuBody.classList.toggle('active3');
    logo.classList.toggle('width');
});
link.addEventListener('click', function(){
    document.body.classList.toggle('lock');
    iconMenu.classList.toggle('active3');
    menuBody.classList.toggle('active3');
    logo.classList.toggle('width');
})