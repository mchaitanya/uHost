var backdrop = document.querySelector('.backdrop');
var modal = document.querySelector('.modal');
var closeButton = document.querySelector('.modal__action--negative');

var selectPlanButtons = document.querySelectorAll('.plan button');
for (let button of selectPlanButtons) {
    button.addEventListener('click', openModal);
}

backdrop.addEventListener('click', closeModal);
closeButton.addEventListener('click', closeModal);

function openModal() {
    backdrop.style.display = 'block';
    modal.style.display = 'block';
}

function closeModal() {
    modal.style.display = 'none';
    backdrop.style.display = 'none';
}

