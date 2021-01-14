const burger = document.querySelector('.burger'),
    clos = document.querySelector('.btn-close'),
    menuItem = document.querySelectorAll('.menu-item');

// Клик по бургеру

burger.addEventListener('click', function click() {
    document.querySelector('.home__right').classList.add('active')
});

// Клик по крестику

clos.addEventListener('click', close);

function close() {
    document.querySelector('.home__right').classList.remove('active')
};
// Клик по пункту меню

for (let i = 0; i < menuItem.length; i++) {
    menuItem[i].addEventListener('click', () => {
        menuItem.forEach((elm) => {
            elm.classList.remove('focus')
        })
        menuItem[i].classList.add('focus')
        close()
    })
}


// console.log(menuItem)