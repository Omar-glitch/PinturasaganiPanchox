const btnMenu = document.querySelector('.icon i');
const menu = document.querySelector('.list-container')
const shadow = document.querySelector('#shadow');
const containerMenu = document.querySelector('#header');
let activador = true;

const close_menu = () => {
    btnMenu.classList.toggle('fa-times');
    shadow.style.visibility = "hidden"; 
    menu.style.top = "-25rem";
    activador = true;
}

const open_menu = () => {
    btnMenu.classList.toggle('fa-times');
    shadow.style.visibility = "visible"; 
    menu.style.top = "3.4375rem";
    activador = false;
}

//Menu de navegacion animacion izquierda
btnMenu.addEventListener('click', () =>{
    if(activador) open_menu();
    else close_menu();
});

const click = (e) => {
    if (btnMenu.contains(e.target)) return;
    if (menu.contains(e.target)) return;
    if (activador) return;
    close_menu();
}

const resize = () => {
    const width = window.innerWidth;
    const height = window.innerHeight;
    const less = width - (width / 7);

    if (less > height) 
        if (!activador) close_menu();
}

window.addEventListener('click', click);
window.addEventListener('resize', resize);

//El scroll
let prevScrollPos = window.scrollY;
let goTop = document.querySelector('.ir-arriba');

window.onscroll = () =>{
    let currenScrollpPos = window.scrollY;
    // Mostrar Menu y ocultarlo
    if(prevScrollPos > currenScrollpPos) containerMenu.style.top = "0";
    else containerMenu.style.top = "-3.4375rem";
    
    prevScrollPos = currenScrollpPos;
    //Mostrar y ocultar scroll estilos
    let arriba = window.scrollY;
    if(arriba <= 600) goTop.style.right = '-100%';
    else goTop.style.right = '1.25rem';

    if (arriba > 30) containerMenu.style.background = "var(--white)";
    else containerMenu.style.background = "transparent";
}

goTop.addEventListener('click', () => {
    //para safari la linea de abajo
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
});

let bol = document.querySelectorAll('.list-container li a');
bol.forEach((element) => {
    element.addEventListener('click', close_menu);
});