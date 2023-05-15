// this function is for when the hamburger menu appears at media query 320px, you click on the hamburger menu and the nav list appear(Home/Blog/Contact)

// Target the Hamburger (i) from font-awesome and save to a variable
const hamburger = document.querySelector('#hamburger');
console.log(hamburger);
// Target the Navbar and save to a variable
const navMenu = document.querySelector('.navBar');
console.log(navMenu);
// when the hamburger image is clicked and the NavBar is hidden,
// The Nav bar containing (Home/Blog/Contact) will appear
// when the Hamburger menu is clicked while the navBar is visable, the navbar will disapear 
hamburger.addEventListener('click', () => {
    if(navMenu.style.display === 'none') {
        navMenu.style.display = "block";
    } else {
        navMenu.style.display = 'none';
    }
});

const links = document.querySelectorAll('.navBar a');
links.forEach(link => {
    link.addEventListener('click', () => {
        navMenu.style.display = 'none';
    });
});

// Target the container element by its ID
const container = document.getElementById('imageContainer');
// get all the container's images and save to a variable
const images = container.querySelectorAll('.images');
// Loop through all images within the container and add a click function, when the image is clicked on a pop up window of the image will appear
for(let i = 0; i < images.length; i++){
    images[i].onclick = function(){
        // new window will appear with the image
        window.open(this.src, "Image", "width=400,height=400");
    }
}

// add item to cart
// when you click on add to cart img the cart number will go up
let cart = [];
let count = 0;

const counter = document.getElementById('.cartNum');
const cartIcon = document.querySelectorAll('.cartIcon');
const nameItem = document.querySelectorAll('.nameItem')[0].innerText; 
const dollarColor = document.querySelectorAll('.dollarColor');

const itemContainer = document.querySelectorAll('.imageBox');


for(let i = 0; i < dollarColor.length; i++){
   dollarColor[i].addEventListener('click', (event)=>{
    const priceOfProduct = event.target.innerText;
    cart.push(priceOfProduct);
    console.log(cart);
}); 
}

for(let r = 0; r < nameItem.length; r++){
    nameItem[r].addEventListener('click', (event)=> {
        const nameOfProduct = event.target.innerText;
        cart.push(nameOfProduct);
        console.log(cart);
    })
}

// console.log(counter);
// function addToCart(item, price){
//     cart.push(item);
//     count += price;
//     console.log(item + " has been added to the cart.");
//     console.log("Cart total is now: $" + count);
// }

// addToCart(item.nameItem,price.dollarColor);

