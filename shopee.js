//Form login/register
const register = document.querySelector('.header__navbar-item--register');
const login = document.querySelector('.header__navbar-item--login');
const modalRegister = document.querySelector('.modal__register');
const modalLogin = document.querySelector('.modal__login');
const modalContainers = document.querySelectorAll('.auth-form');
const modals = [modalRegister, modalLogin];
const switchBtns = document.querySelectorAll(".auth-form__switch-btn");

register.addEventListener('click', () => modalRegister.classList.add('open'));
login.addEventListener('click', () => modalLogin.classList.add('open'));
modals.forEach(modal => {
    modal.addEventListener('click', () => {
        modal.classList.remove('open')
    })
});

// const controlBacks = document.querySelectorAll('.btn--nomal')
// controlBacks.forEach(backBtn => {
//     backBtn.addEventListener('click', e => {
//         e.stopPropagation();
//         let goBacks= [...modals,...backBtn]
//         goBacks.forEach(goBack => {
//             goBack.classList.remove('open')
//         })
//     });
// });

// Switch register and login

switchBtns.forEach(switchBtn => {
    switchBtn.addEventListener('click', () => {
        modalRegister.classList.toggle('open');
        modalLogin.classList.toggle('open');
    })
})

modalContainers.forEach(modalCtn => {
    modalCtn.addEventListener('click', e => e.stopPropagation())
});

// Form liked

const likeBtn = document.querySelector('.home-product-item__like');
likeBtn.addEventListener('click', () => {
    likeBtn.classList.toggle("home-product-item__like-liked");
    likeBtn.classList.toggle("home-product-item__like");
})











