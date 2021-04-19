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