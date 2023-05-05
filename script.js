const hamburger = document.querySelector('#hamburger');
console.log(hamburger);
const navMenu = document.querySelector('.navBar');
console.log(navMenu);

hamburger.addEventListener("click", function(){
    navMenu.classList.toggle('show');
    console.log('toggle');
    // navMenu.classList.toggle('hamburger');
    
});