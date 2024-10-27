const menu = document.querySelector('#menuIcon')
const navlist = document.querySelector('.navlist')

menu.onclick =()=>{
    menu.classList.toggle('bx-x')
    navlist.classList.toggle('open')
}

const sr =ScrollReveal({
    distance: '500px',
    duration: 2000 ,
    delay: 500,
    reset: true,
    easing: 'ease-in-out'
})

sr.reveal('.logo',{
    delay: 300,
    origin: 'rigth'
})

sr.reveal('.heroText',{
    delay: 300,
    origin: 'rigth'
})

sr.reveal('.heroImagen',{
    delay: 300,
    origin: 'left'
})

sr.reveal('.icons',{
    delay: 300,
    origin: 'rigth'
})

