// this function is for when the hamburger menu appears at media query 320px, you click on the hamburger menu and the nav list appear(Home/Blog/Contact)

// Target the Hamburger (i) from font-awesome and save to a variable
const hamburger = document.querySelector('#hamburger');
// console.log(hamburger);
// Target the Navbar and save to a variable
const navMenu = document.querySelector('.navBar');
// console.log(navMenu);
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


//  // adding the items to the cart, make the item number increase
//  document.addEventListener("DOMContentLoaded", function() {
//     // Get all the cart icons
//     const cartIcons = document.querySelectorAll(".cartIcon");
//     // Get the cart number element
//     const cartNumElement = document.getElementById("cartNum");
//     // Set the initial cart count
//     let cartCount = 0;

//     // Add click event listener to each cart icon
//     cartIcons.forEach(function(icon) {
//         icon.addEventListener("click", function() {
//             // Increase the cart count
//             cartCount++;
//             // Update the cart number element
//             cartNumElement.innerText = cartCount;
//         });
//     });
// });

// Get the cart element
const cart = document.getElementById("cartNum");

// Get all the cart icons
const cartIcons = document.getElementsByClassName("cartIcon");

// Initialize the cart counter
let cartCounter = 0;

// Iterate over each cart icon
Array.from(cartIcons).forEach((cartIcon) => {
  // Add a click event listener to each cart icon
  cartIcon.addEventListener("click", () => {
    // Increment the cart counter
    cartCounter++;
    
    // Update the cart number display
    cart.textContent = cartCounter;
    
    // Create a new cart item
    const cartItem = document.createElement("div");
    cartItem.classList.add("cartItem");
    
    // Get the name and price of the item
    const parentElement = cartIcon.parentNode.parentNode;
    const nameElement = parentElement.querySelector(".nameItem");
    const name = nameElement ? nameElement.textContent : "Unknown Item";
    
    const priceElement = parentElement.querySelector(".dollarColor");
    const price = priceElement ? priceElement.textContent : "Unknown Price";
    
    // Set the HTML content of the cart item
    cartItem.innerHTML = `
      <span>${name}</span>
      <span>${price}</span>
    `;
    
    // Append the cart item to the cart
    document.getElementById("cartContainer").appendChild(cartItem);
  });
});




// const cartIcon = document.querySelectorAll('.cartIcon');
// add item to cart
// when you click on add to cart img the cart number will go up
//     const addItemToCart = cartIcon.addEventListener('click', function(){
    
//     let nameItem = document.querySelector('.nameItem').value;
//     let dollarColor = document.querySelector('.dollarColor').value;

//     let cart = [{
//         name: nameItem,
//         price: dollarColor,
//     }];

//     for(let i = 0; i < list.length; i++){
//         for(let j = 0; j < list[i].review.length; j++) {
//             list[0].review[j].push(newData)
//             console.log(list);
//         }
//     }
//     console.log(addItemToCart);
// })


// let count = 0;

// const counter = document.getElementById('.cartNum');

// const nameItem = document.querySelectorAll('.nameItem'); 
// const dollarColor = document.querySelectorAll('.dollarColor');

// const itemContainer = document.querySelectorAll('.imageBox');
// let priceOfProduct;
// let nameOfProduct;




// for(let i = 0; i < dollarColor.length; i++){
//    dollarColor[i].addEventListener('click', (event)=>{
//     priceOfProduct = event.target.innerText;
//     cart.push(priceOfProduct);
//     console.log(cart);
// }); 
// }

// console.log(nameItem);

// for(let i = 0; i < nameItem.length; i++){
//     nameItem[i].addEventListener('click', (event)=> {
//         nameOfProduct = event.target.innerText;
//         cart.push(nameOfProduct);
//         console.log(cart);
//     })
// }

// for(let i = 0; i < cartIcon.length; i++){
//     cartIcon[i].addEventListener('click', (event)=> {
//         const  addToCart = event.target.innerText;
//         cart.push(nameOfProduct, priceOfProduct);
//         console.log(cart);
//     })
// }


// console.log(counter);
// function addToCart(item, price){
//     cart.push(item);
//     count += price;
//     console.log(item + " has been added to the cart.");
//     console.log("Cart total is now: $" + count);
// }

// addToCart(item.nameItem,price.dollarColor);
