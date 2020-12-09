{
    const nav = document.querySelector('#nav');
    const navToggle = document.querySelector('#nav_toggle');

    nav.classList.remove('active');

    navToggle.addEventListener('click', event => {
        event.preventDefault();

        navToggle.classList.toggle('active');
        nav.classList.toggle('active');
    })
}

new Swiper('.main-slider', {
    // Стрелки
    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev'
    },

    // Пагинация
    pagination: {
        el: '.swiper-pagination',
        // Возможность переключатся на буллеты
        clickable: true,
        // Диннамические буллеты
        dynamicBullets: true,
    },
});

new Swiper('.place-slider', {
    // Стрелки
    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev'
    },

    // Пагинация
    pagination: {
        el: '.swiper-pagination',
        // Возможность переключатся на буллеты
        clickable: true,
        // Диннамические буллеты
        dynamicBullets: true,
    },
});

new Swiper('.reviews-slider', {
    direction: 'vertical',
    loop: true,

    // Пагинация
    pagination: {
        el: '.swiper-pagination',
        // Возможность переключатся на буллеты
        clickable: true,
    },
});

{
    const cart = document.querySelector("#cart");
    const modal= document.querySelector("#modal");
    const close = modal.querySelector("#modal-close");
    const body = document.querySelector("body");

    cart.addEventListener("click", event => {
        event.preventDefault();

        modal.classList.add("show");
        body.classList.add("no-scroll");
    });

    close.addEventListener("click", event => {
        event.preventDefault();

        modal.classList.remove("show");
        body.classList.remove("no-scroll");
    });
}