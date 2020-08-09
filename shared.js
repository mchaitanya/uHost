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
        showBackdrop();
        modal.classList.add('open');
    }
}

function closeModal() {
    if (modal) {
        // modal.style.display = 'none';
        // backdrop.style.display = 'none';
        modal.classList.remove('open');
        hideBackdrop();
    }
}

function openSideNav() {
    showBackdrop();
    mobileNav.classList.add('open');
}

function closeSideNav() {
    mobileNav.classList.remove('open');
    hideBackdrop();
}

function showBackdrop() {
    backdrop.style.display = 'block';
    // delay the adding of the class
    // so that the display doesn't change at the same time as the opacity
    setTimeout(_ => backdrop.classList.add('open'), 10)
}

function hideBackdrop() {
    backdrop.classList.remove('open');
    // wait for the transition to end before changing display back
    // this should be the same as the duration on the transition property
    setTimeout(_ => backdrop.style.display = 'none', 200);
}
