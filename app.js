//Total products are = 11
const products1 = [
    {
        name: "Zebronics Bluetooth Speaker",
        image: "./Zebronics Bluetooth Speaker.jpg",
        rating: "★★★★★",
        price: 30.00,
        originalPrice: null,
        category: "product-1"
    },
    {
        name: "Ultra Max 2.01 Big Display",
        image: "./Ultra Max 2.01 Big Display.jpg",
        rating: "★★★★★",
        price: 25.00,
        originalPrice: 60.00,
        category: "product-2"
    },
    {
        name: "Vivobook 16X Laptop",
        image: "./Vivobook 16X Laptop.jpg",
        rating: "★★★★★",
        price: 25.00,
        originalPrice: null,
        category: "product-3"
    },
    {
        name: "Soundcore Wireless Headphones",
        image: "./Soundcore Wireless Headphones.jpg",
        rating: "★★★★★",
        price: 15.00,
        originalPrice: null,
        category: "product-4"
    }
];
const products2 = [
    {
        name: "Noise Buds VS104",
        image: "./Noise Buds VS104.jpg",
        rating: "★★★★★",
        price: 32.00,
        originalPrice: 40.00,
        category: "product-1"
    },
    {
        name: "Mivi Roam 2 Bluetooth",
        image: "./Mivi Roam 2 Bluetooth.jpg",
        rating: "★★★★★",
        price: 15.00,
        originalPrice: null,
        category: "product-2"
    },
    {
        name: "Mivi DuoPods A450",
        image: "./Mivi DuoPods A450.jpg",
        rating: "★★★★★",
        price: 12.00,
        originalPrice: null,
        category: "product-3"
    },
    {
        name: "Lenovo Ideapad Laptop",
        image: "./Lenovo Ideapad Laptop.jpg",
        rating: "★★★★★",
        price: 50.00,
        originalPrice: null,
        category: "product-4"
    }
];
const products3 = [
        {
            name: "Sony Mdr 10rbt",
            image: "./box1.jpg",
            description: "New Collection",
            price: 200,
            originalPrice: null,
        },
        {
            name: "MacBook Pro",
            image: "./box2.jpg",
            description: "Best New",
            price: 1599,
            originalPrice: null,
        },
        {
            name: "Apple iPhone 15 Pro Max",
            image: "./Iphone-15.jpg",
            description: "BIG DISCOUNT",
            price: 1199.00,
            originalPrice: 55.00,
        }
];


let row1 = document.querySelector('.row1');

products1.map((item, index)=>{
    row1.innerHTML += `<div class="product-1">
    <img src="${item.image}" alt="">
    <p>${item.name}</p>
    <p>&#9734;&#9734;&#9734;&#9734;&#9734;</p>
    <ins>$${item.price}</ins>
    <button type="button" onclick="addToCart(${index})">Add to Cart</button>
    `
    
})


let row2 = document.querySelector('.row2');

products2.map((item, index)=>{
    row2.innerHTML += `<div class="product-1">
    <img src="${item.image}" alt="">
    <p>${item.name}</p>
    <p>&#9734;&#9734;&#9734;&#9734;&#9734;</p>
    <ins>$${item.price}</ins>
    <button type="button" onclick="addToCart(${index})">Add to Cart</button></p>
    `
    
})

let cartItems;
const checkDataFromLocalStorage = JSON.parse(localStorage.getItem("cart"));
if (checkDataFromLocalStorage === null) {
  cartItems = [];
} else {
  cartItems = [...checkDataFromLocalStorage];
}


function addToCart(index) {
    const findIndex = cartItems.indexOf(products1[index] || products2[index] || products3[index]);
    if (findIndex === -1) {
      products1[index].quantity = 1;
      products2[index].quantity = 1;
      products3[index].quantity = 1;
      cartItems.push(products1[index]);
      cartItems.push(products2[index]);
      cartItems.push(products3[index]);
      
    }else {
      cartItems[findIndex].quantity += 1;
    }
    Swal.fire({
        position: "top-end",
        icon: "success",
        title: "Product Added to cart",
        showConfirmButton: false,
        timer: 1500
      });
    
}

function checkout() {
    console.log("checkout");
    const convertArrIntoStr = JSON.stringify(cartItems);
    localStorage.setItem("cart", convertArrIntoStr);
    window.location = "./cart.html";
}