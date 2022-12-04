/*modal*/
var modal = document.getElementById("modal");
var btn = document.getElementById("modalBtn");
var closeModal = document.getElementsByClassName("close")[0];
btn.onclick = function(event) {
    event.preventDefault();
    modal.style.display = "block";
}
closeModal.onclick = function() {
  modal.style.display = "none";
}
window.onclick = function(event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
}
window.onclick = function(event) {
  if (event.target == modalSub) {
    modal.style.display = "none";
    modalSub.style.display ="none";
  }
}

/*modal*/
var modalSub = document.getElementById("submitted");
var btnSub = document.getElementById("submit");
var closeModalSub = document.getElementsByClassName("close-submitted")[0];
const myForm = document.getElementById("form");
myForm.addEventListener("submit",(e)=>{
    e.preventDefault();
    modalSub.style.display = "block";
    modal.style.display="none";
});
closeModalSub.onclick = function() {
    modalSub.style.display = "none";
  }
/*typing text*/
let typed = new Typed('#typed', { // Тут id того блока, в которм будет анимация
    stringsElement: '#typed-strings', // Тут id блока из которого берем строки для анимации
    typeSpeed: 100, // Скорость печати
    startDelay: 200, // Задержка перед стартом анимации
    backSpeed: 50, // Скорость удаления
    loop: true // Указываем, повторять ли анимацию
});
let typedMob = new Typed('#typed-mob', { // Тут id того блока, в которм будет анимация
    stringsElement: '#typed-strings-mob', // Тут id блока из которого берем строки для анимации
    typeSpeed: 100, // Скорость печати
    startDelay: 200, // Задержка перед стартом анимации
    backSpeed: 50, // Скорость удаления
    loop: true // Указываем, повторять ли анимацию
});

