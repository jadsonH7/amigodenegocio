// Buttom fixo com Scroll
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

// Conteudo principal
function textMain() {
    const textPrimary = document.querySelector('.call-content > p');
    const primaryStrong = document.querySelectorAll('.call-content > p > strong');

    textPrimary.addEventListener('mouseenter', () => {
        primaryStrong.forEach(strong => {
            strong.style.color = 'var(--color-font-white)';
        });
    });

    textPrimary.addEventListener('mouseleave', () => {
        primaryStrong.forEach(strong => {
            strong.style.color = 'var(--color-border)';
        });
    });
};
textMain();

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

// Menu
function navBar() {
    const logo = document.querySelector('.logo');
    const navLinks = document.querySelector('.hero > .nav-header');
    const btnOpenMenu = document.querySelector('.navbar-icon > .bi-list');
    const btnCloseMenu = document.querySelector('.navbar-icon > .bi-x-lg');

    btnOpenMenu.addEventListener('click', () => {
        navLinks.style.display = 'flex';

        btnOpenMenu.style.display = 'none';
        btnCloseMenu.style.display = 'block';

        logo.classList.add('logo-position');
        logo.style.visibility = 'hidden';
    });

    btnCloseMenu.addEventListener('click', () => {
        navLinks.style.display = 'none';
        
        btnOpenMenu.style.display = 'flex';
        btnCloseMenu.style.display = 'none';
        
        logo.classList.remove('logo-position');
        logo.style.visibility = 'visible';
    });

    const h2Menu = document.createElement('h2');
    const imgMenu = document.createElement('img');
    const boxLogo = document.createElement('span');

    h2Menu.classList = 'title-menu';
    h2Menu.textContent = 'Fala meu parceiro!';

    imgMenu.src = 'public/imgs/adesivos/Property 1=Padra╠âo.png';
    imgMenu.classList = 'img-menu';

    boxLogo.classList = 'box-logo';

    boxLogo.appendChild(imgMenu);
    navLinks.append(boxLogo, h2Menu);

};
navBar();

// Pagina vantagem
function vantagens() {
     //Texto vantagem
     const textSecondary = document.querySelector('.vantagem-content > p');
     const secondaryStrong = document.querySelectorAll('.vantagem-content > p > strong');
 
     textSecondary.addEventListener('mouseenter', () => {
         secondaryStrong.forEach(strong => {
             strong.style.color = 'var(--color-font-white)';
         });
     });
 
     textSecondary.addEventListener('mouseleave', () => {
         secondaryStrong.forEach(strong => {
             strong.style.color = 'var(--color-secondary)';
         });
     });

    const vantagemImg = document.querySelector('.vantagem-img > img')
    const logoMaquina = document.querySelector('.box-maquina > span > img');

    const width = window.innerWidth;
    if(width <= 440) {
        vantagemImg.src = 'public/imgs/banner/banner-3.png';
        logoMaquina.src = 'public/imgs/logotipo/Ton_Parceiro_Logo_RGB-07.png';

        textSecondary.addEventListener('mouseenter', () => {
            secondaryStrong.forEach(strong => {
                strong.style.color = 'var(--color-primary)';
            });
        });
    }
};
vantagens();

// Texto frete gratis
function sendFree() {
    const container = document.querySelector('.send-message');
    const send = document.querySelector('.send-message > h1')

    
    const width = window.innerWidth;
    if (width <= 600) {
        send.textContent = 'Frete Grátis';
        send.classList = 'send-title';
        container.append(send);
    }
}
sendFree();