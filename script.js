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
document.addEventListener("DOMContentLoaded", function () {
    const cart = document.getElementById("cartNum");
    let cartCounter = 0;
  
    // Get the cart container and cart items
    const cartContainer = document.getElementById("cartContainer");
    const cartItems = document.getElementById("cartItems");
  
    // Get all the cart icons
    const cartIcons = document.getElementsByClassName("cartIcon");
  
    // when an item icon is clicked, increase the counter
    Array.from(cartIcons).forEach((cartIcon) => {
      cartIcon.addEventListener("click", () => {
        cartCounter++;
        cart.textContent = cartCounter;
  
        // target the name and prices of each element
        const parentElement = cartIcon.parentNode.parentNode;
        const nameElement = parentElement.querySelector(".nameItem");
        const name = nameElement ? nameElement.textContent : "Unknown Item";
  
        const priceElement = parentElement.querySelector(".dollarColor");
        const price = priceElement ? priceElement.textContent : "Unknown Price";
  
        // Log the name and price to the console
        console.log(`Item: ${name}, Price: ${price}`);
  
        // Create a new cart item element
        const newItem = document.createElement("div");
        newItem.textContent = `${name}: ${price}`;
  
        // Append the new cart item to the cart items container
        cartItems.appendChild(newItem);
  
        // Show the cart items container
        cartContainer.classList.add("show");
      });
    });
  
    // Add a click event listener to the cart container
    cartContainer.addEventListener("click", () => {
      // Toggle the visibility of the cart items container
      cartContainer.classList.toggle("show");
    });
  });
  
  
  
  