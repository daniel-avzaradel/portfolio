function blink() {
    const arrowL = document.querySelectorAll('.fa-chevron-left')
    const arrowR = document.querySelectorAll('.fa-chevron-right')

    setTimeout(function() {

        setTimeout(function() {
            arrowL[0].classList.add('arrow')
        }, 300);
        setTimeout(function() {
            arrowL[1].classList.add('arrow')
        }, 200);
        setTimeout(function() {
            arrowL[2].classList.add('arrow')
        }, 100);
        setTimeout(function() {
            arrowR[0].classList.add('arrow')
        }, 100);
        setTimeout(function() {
            arrowR[1].classList.add('arrow')
        }, 200);
        setTimeout(function() {
            arrowR[2].classList.add('arrow')
        }, 300);

    }, 000)

    arrowL[0].classList.remove('arrow')
    arrowL[1].classList.remove('arrow')
    arrowL[2].classList.remove('arrow')
    arrowR[0].classList.remove('arrow')
    arrowR[1].classList.remove('arrow')
    arrowR[2].classList.remove('arrow')
    
}

const navBar = document.querySelector('#colapse-menu');
const mobileMenu = document.getElementById('hidden');
const li = document.querySelectorAll('#hidden ul li')

console.log(li)
console.log(mobileMenu)

navBar.addEventListener('click', () => {
    mobileMenu.classList.toggle('hidden')
})


li[0].addEventListener('click', () => {
    mobileMenu.classList.toggle('hidden')
})
li[1].addEventListener('click', () => {
    mobileMenu.classList.toggle('hidden')
})
li[2].addEventListener('click', () => {
    mobileMenu.classList.toggle('hidden')
})
li[3].addEventListener('click', () => {
    mobileMenu.classList.toggle('hidden')
})
li[4].addEventListener('click', () => {
    mobileMenu.classList.toggle('hidden')
})