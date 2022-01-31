const navBtns = document.querySelectorAll('.dropdown-toggle')
navBtns.forEach(navBtn => {
    navBtn.addEventListener('click', (e) => {
        navBtn.closest('li').classList.toggle('show')
        e.preventDefault()
        e.stopPropagation()
    })
})

let canvas = document.getElementById('canvas')
let view = new Viewer(canvas, img)
let img = document.getElementById("img");
view.draw();


if (document.querySelector('.events')) {
    new Splide('.events', {
        type: 'loop',
        perPage: 3,
        breakpoints: {
            981: {
                perPage: 2,
            },
            767: {
                perPage: 1,
            },
        }
    }).mount();

}
if (document.querySelector('.schemes')) {
    new Splide('.schemes', {
        type: 'loop',
        perPage: 2,
        padding: '10px',
        breakpoints: {
            767: {
                perPage: 1,
            },
        }
    }).mount();
}
