// Переменные для двух видов модальных окон
let button = document.querySelector('#button');
let modal = document.querySelector('#modal');
let close = document.querySelector('#close');

// Модальное окно, закрывается желчком ЛКМ по кнопке в виде X
button.addEventListener('click', function() {
  modal.classList.toggle('modal_active');
  document.body.style.overflow = "hidden";
});

close.addEventListener('click', function(event) {
  modal.classList.toggle('modal_active');
  document.body.style.overflow = "auto";
});

modal.addEventListener('click', function(event) {
  event.target.classList.toggle('modal_active');
 
});

// Автоматическое закрытие модального окна через 5 секунд
/*
function closeModal() {
  modal.classList.remove('modal_active');
}

button.addEventListener('click', function() {
  modal.classList.add('modal_active');
  setTimeout(closeModal, 5000);
});
*/