window.addEventListener('DOMContentLoaded', function(event) {

    var spotlight = tns({
        container: '.spotlight__wrapper',
        items: 1,
        slideBy: 'page',
        autoplay: false,
        controls: false,
        navPosition: 'bottom',
        speed: 500,
        loop: false
    });

    var toggle = document.querySelector('.toggle-menu');
    var header = document.querySelector('.header');
    var modal = document.querySelector('.modal');
    var body = document.body;

    var open_menu = function(event) {
        header.classList.toggle('open');
        toggle.classList.toggle('is-active');
        modal.classList.toggle('active');
        body.classList.toggle('overflow-hidden');
    }

    toggle.addEventListener('click', function(event) { open_menu(event) })
    modal.addEventListener('click', function(event) { open_menu(event) })

});
