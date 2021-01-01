const box = document.querySelectorAll('.box');
const circles1 = document.querySelector('.circle1')
const circles2 = document.querySelector('.circle2')
const circles3 = document.querySelector('.circle3')
box.forEach(element => {
    element.addEventListener('click', () => {
        if (element.id === 'b1') {
            element.classList.toggle('active1');
            circles1.classList.toggle('active')
        }
        if (element.id === 'b2') {
            element.classList.toggle('active1');
            circles2.classList.toggle('active')
        }
        if (element.id === 'b3') {
            element.classList.toggle('active1');
            circles3.classList.toggle('active')
        }
    })
})