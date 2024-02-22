const navSlide = () => {
    const burger = document.querySelector('.burger');
    const nav = document.querySelector('.group');

    burger.addEventListener('click', () => {
        nav.classList.toggle('nav-active');
    });
}

navSlide();