/*===================== Animacion de formularios =====================*/
const SIGN_IN_BTN = document.querySelector('#sign-in-btn');
const SIGN_UP_BTN = document.querySelector('#sign-up-btn');
const CONTAINER = document.querySelector('.container-form');

SIGN_UP_BTN.addEventListener('click', () => {
    CONTAINER.classList.add("sign-up-mode");
});

SIGN_IN_BTN.addEventListener('click', () => {
    CONTAINER.classList.remove('sign-up-mode');
})