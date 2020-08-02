var backdrop = document.querySelector('.backdrop');
var mobileNav = document.querySelector('.mobile-nav');
var toggleButton = document.querySelector('.toggle-button');

var modal = document.querySelector('.modal');
var modalCloseButton = document.querySelector('.modal__action--negative');
if (modalCloseButton) {
    modalCloseButton.addEventListener('click', closeModal);
}

var selectPlanButtons = document.querySelectorAll('.plan button');
for (let button of selectPlanButtons) {
    button.addEventListener('click', openModal);
}

toggleButton.addEventListener('click', openSideNav);
backdrop.addEventListener('click', function() {
    closeModal();
    closeSideNav();
});

function openModal() {
    if (modal) {
        // backdrop.style.display = 'block';
        // modal.style.display = 'block';
        backdrop.classList.add('open');
        modal.classList.add('open');
    }
}

function closeModal() {
    if (modal) {
        // modal.style.display = 'none';
        // backdrop.style.display = 'none';
        modal.classList.remove('open');
        backdrop.classList.remove('open');
    }
}

function openSideNav() {
    backdrop.classList.add('open');
    mobileNav.classList.add('open');
}

function closeSideNav() {
    mobileNav.classList.remove('open');
    backdrop.classList.remove('open');
}
