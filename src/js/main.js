// Переменные для двух видов модальных окон
var button = document.querySelector('#button');
var modal = document.querySelector('#modal');
var close = document.querySelector('#close');

// Модальное окно, закрывается желчком ЛКМ по кнопке в виде X
function closeModal() {
  modal.classList.remove('modal_active');
}

button.addEventListener('click', function() {
  modal.classList.add('modal_active');
});

close.addEventListener('click', function(){
  modal.classList.remove('modal_active');
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