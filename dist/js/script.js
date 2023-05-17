
//hamburger

const hamburger = document.querySelector('#hamburger');
const menu = document.getElementById('menu');


hamburger.addEventListener('click', function(){
    hamburger.classList.toggle('hamburger-active');
    menu.classList.toggle('hidden');


})


//header 

const header = document.querySelector('header');
const jose = document.getElementById('jose');
//hamburger blue
const line = document.querySelectorAll('.hamburger-line');
window.onscroll = function(){
    const fixedNav = header.offsetTop;

    if (window.pageYOffset > fixedNav) {
        header.classList.add('make-fixed');
        jose.classList.replace('text-white', 'text-primary');
        menu.classList.replace('text-white', 'text-primary');
        menu.classList.replace('bg-primary', 'bg-white');
        
        line.forEach(element => {
            element.classList.replace('hamburger-line', 'hamburger-lineb');
        });
    } else {
        header.classList.remove('make-fixed');
        jose.classList.add('text-white');
        menu.classList.add('text-white');
        menu.classList.add('bg-primary');
        line.forEach(element => {
            element.classList.toggle('hamburger-lineb');
            element.classList.toggle('hamburger-line');
            
        });
       
    }
};






