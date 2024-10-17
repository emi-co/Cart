var add_bts = document.querySelectorAll("shop-item-button"),
quantity_ctn = document.getElementById("cart_quantity_input")
quantity = 0; 


const products = [

    {
        value = 1,
        name:"Album 1",
        price: 12.99,
    }, 

    {
        value = 2,
        name:"Album 2",
        price: 14.99
    },  


    {
        value = 3,
        name:"Album 3",
        price: 9.99,
  
    }, 

    {
        value = 4,
        name:"Album 4",
        price: 19.99,
    
    }, 

    {
        value = 1,
        name:"t-shirt",
        price: 19.99,
      
    }, 

    {
        value = 1,
        name:"t-shirt",
        price: 19.99,
       
    } 

];

products.forEach(
    ({ name, value, price, }) => {
      shop-item.innerHTML += `
        <div class="shop-item">
          <h2>${name}</h2>
          <span class="shop-item-price">$${price}</span>
          <button 
            id="${id}" 
            class="shop-item-button">Add to cart
          </button>
        </div>
      `;
    }
  );

//Add to Cart



//Remove from Cart


//Test SSH Key



{/* <img class="cart-item-image" src="Images/Shirt.png" width="100" height="100">
<span class="cart-item-title">T-Shirt</span>
</div>
<span class="cart-price cart-column">$19.99</span>
<div class="cart-quantity cart-column">
<input class="cart-quantity-input" type="number" value="1">
<button class="btn btn-danger" type="button">REMOVE</button>
</div> */}