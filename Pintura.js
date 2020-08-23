window.addEventListener('load', ()=>{
    const contenedorLoader = document.querySelector(".contenedor-loader");
    contenedorLoader.style.opacity = 0;
    contenedorLoader.style.visibility = "hidden";
})  
let btnMenu = document.querySelector('.icon');
let menu = document.querySelector('.list-container')
let containerMenu = document.querySelector('#header');
let activador = true;
//Menu de navegacion animacion izquierda
btnMenu.addEventListener('click', () =>{
    document.querySelector('.icon i').classList.toggle('fa-times');
    if(activador){
        menu.style.top = "60px";
        menu.style.transition = "0.5s";
        activador=false;
    }else{
        menu.style.top = "-1000px";
        menu.style.transition = "0.5s";
        activador=true;
    }
});
//El scroll
let prevScrollPos = window.pageYOffset;
let goTop = document.querySelector('.ir-arriba');
window.onscroll = () =>{
    let currenScrollpPos = window.pageYOffset;
    // Mostrar Menu y ocultarlo
    if(prevScrollPos > currenScrollpPos){
        containerMenu.style.top = "0";
        containerMenu.style.transition = "0.5s";
    }else{
        containerMenu.style.top = "-60px";
        containerMenu.style.transition = "0.5s";
    }
    prevScrollPos = currenScrollpPos;
    //Mostrar y ocultar scroll estilos
    let arriba = window.pageYOffset;
    if(arriba <= 600){
        containerMenu.style.borderBottom = "3px solid #ff2e63";
        goTop.style.right = '-100%';
    }else{
        containerMenu.style.borderBottom = "3px solid #ff2e63";
        goTop.style.right = '30px';
        goTop.style.transition = "0.5s";
    }
}
goTop.addEventListener('click', () => {
    //para safari la linea de abajo
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
});
let bol = document.querySelectorAll('.list-container li a');
bol.forEach( (element) => {
    element.addEventListener('click', () => {
       menu.style.top = "-1000px";
       document.querySelector('.icon i').classList.remove('fa-times');
       document.querySelector('.icon i').classList.add('fa-bars');
       activador=true;
    });
});