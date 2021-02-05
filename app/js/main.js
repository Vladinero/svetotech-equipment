$(function() {
    $('.our__projects-slider').slick({
        nextArrow: '<button type="button" class="slick-btn slick-next"></button>',
        prevArrow: '<button type="button" class="slick-btn slick-prev"></button>',
        slidesToShow: 2,
        slidesToScroll: 1,
        responsive: [{
            breakpoint: 1140,
            settings: {
                slidesToShow: 1,
                slidesToScroll: 1
            }
        }]
    });
    $('.rent__slider').slick({
        nextArrow: '<button type="button" class="slick-btn slick-next"></button>',
        prevArrow: '<button type="button" class="slick-btn slick-prev"></button>',
        slidesToShow: 1,
        slidesToScroll: 1
    });
    $('.header__top-mobile-menu_btn').on('click', function() {
        $('.header__top-nav__items').slideToggle();
    })


});

const tabs = document.querySelectorAll('[data-tab-target]')
const tabContents = document.querySelectorAll('[data-tab-content]')

tabs.forEach(tab => {
    tab.addEventListener('click', () => {
        const target = document.querySelector(tab.dataset.tabTarget)

        tabContents.forEach(tabContent => {
            tabContent.classList.remove('active')
        })

        tabs.forEach(tab => {
            tab.classList.remove('active')
        })

        tab.classList.add('active')
        target.classList.add('active')
    })
})

//mobile menu button//
const btn = document.querySelector('.header__top-mobile-menu_btn'),
    bar = document.querySelector('#bar'),
    nav = document.querySelector('.header__top-nav__items');

btn.addEventListener('click', () => {
    bar.classList.toggle('bar');
});
// /mobile menu button //