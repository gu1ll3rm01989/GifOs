// VARIABLES


let btn_day = document.getElementById('day')
let btn_dark = document.getElementById('dark')
let arrow = document.getElementById('desplegable')
let despleg = document.getElementById('menu-theme')


//CAMBIO DE TEMA

arrow.addEventListener('click', switching)

function switching() {

    if (despleg.style.display === 'none') {
        despleg.style.display = 'block'
    } else {
        despleg.style.display = 'none'
    }
}
arrow.addEventListener('click', switching())

btn_day.addEventListener('click', function() { document.getElementById('link_style').href = '../styles/theme1.css' })
btn_dark.addEventListener('click', function() { document.getElementById('link_style').href = '../styles/theme2.css' })