// Buttom visible scroll window
function btnScroll() {
    const btnBack = document.querySelector('#btn-fixo > section > a i');
    btnBack.style.display = 'none';

    window.addEventListener('scroll', () => {
        if (window.scrollY < 800) {
            btnBack.style.display = 'none';
        } else {
            btnBack.style.display = 'block';
        }
    });
};
btnScroll();

// Animação de :HOVER nos Textos
function textHover() {
    //Texto 1
    const textPrimary = document.querySelector('.call-content > p');
    const primaryStrong = document.querySelectorAll('.call-content > p > strong');

    textPrimary.addEventListener('mouseenter', () => {
        primaryStrong.forEach(strong => {
            strong.style.color = 'var(--color-font-white)';
        });
    });

    textPrimary.addEventListener('mouseleave', () => {
        primaryStrong.forEach(strong => {
            strong.style.color = 'var(--color-font-black)';
        });
    });

    //Texto 2
    const textSecondary = document.querySelector('.vantagem-content > p');
    const secondaryStrong = document.querySelectorAll('.vantagem-content > p > strong');

    textSecondary.addEventListener('mouseenter', () => {
        secondaryStrong.forEach(strong => {
            strong.style.color = 'var(--color-border)';
        });
    });

    textSecondary.addEventListener('mouseleave', () => {
        secondaryStrong.forEach(strong => {
            strong.style.color = 'var(--color-secondary)';
        });
    });
};
textHover();

// Animação dos cards
function textAnimation() {
    const cards = document.querySelector('.cards');
    const card = document.querySelectorAll('.card');

    cards.addEventListener('mouseenter', () => {
        card.forEach((text) => {
            text.style.animationPlayState = 'paused';
        })
    });

    cards.addEventListener('mouseleave', () => {
        card.forEach((text) => {
            text.style.animationPlayState = 'inherit';
        })
    });
};
textAnimation();

// Navbar icon
function navBar() {
    const navLinks = document.querySelector('.nav-header');
    const navIcons = document.querySelector('.navbar-icon');
};