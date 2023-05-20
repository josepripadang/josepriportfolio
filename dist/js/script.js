
//dark ikon
const darkikon = document.querySelector('#darkikon');
const html = document.querySelector('html');
const sunikon = document.querySelector('#sunikon');
darkikon.addEventListener('click', function(){
    html.classList.toggle('dark');
    if (html.classList.contains('dark')) {
        darkikon.classList.add('hidden');
        sunikon.classList.toggle('hidden');
    }
})

sunikon.addEventListener('click', function(){
    html.classList.toggle('dark');
    if (!html.classList.contains('dark')) {
        sunikon.classList.add('hidden');
        darkikon.classList.toggle('hidden');
    }
})



//hamburger

const hamburger = document.querySelector('#hamburger');
const menu = document.getElementById('menu');


hamburger.addEventListener('click', function(){
    hamburger.classList.toggle('hamburger-active');
    menu.classList.toggle('hidden');

})

window.addEventListener('click', function(e){
    if (e.target != hamburger && e.target != menu){
        hamburger.classList.remove('hamburger-active');
        menu.classList.add('hidden');
    }

});


//header 

const header = document.querySelector('header');
const jose = document.getElementById('jose');
//hamburger blue
const line = document.querySelectorAll('.hamburger-line');
const scroll = document.querySelector('#scroll');

window.onscroll = function(){
    const fixedNav = header.offsetTop;

    if (window.pageYOffset > fixedNav) {
        header.classList.add('make-fixed');
        jose.classList.replace('text-white', 'text-primary');
        menu.classList.replace('text-white', 'text-primary');
        menu.classList.replace('bg-primary', 'bg-white');
        scroll.classList.remove('hidden');
        line.forEach(element => {
            element.classList.replace('hamburger-line', 'hamburger-lineb');
        });
        darkikon.classList.add('invert');
    } else {
        
        scroll.classList.add('hidden');
        header.classList.remove('make-fixed');
        jose.classList.add('text-white');
        menu.classList.add('text-white');
        menu.classList.remove('bg-white');
        menu.classList.add('bg-primary');
        line.forEach(element => {
            element.classList.toggle('hamburger-lineb');
            element.classList.toggle('hamburger-line');
            
        });
        darkikon.classList.toggle('invert');
       
    }
};






