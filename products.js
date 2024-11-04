const products1 = [
    {
        name: "Zebronics Bluetooth Speaker",
        image: "./images/Zebronics Bluetooth Speaker.jpg",
        rating: "★★★★★",
        price: 30.00,
        originalPrice: null,
        category: "product-1"
    },
    {
        name: "Ultra Max 2.01 Big Display",
        image: "./images/Ultra Max 2.01 Big Display.jpg",
        rating: "★★★★★",
        price: 25.00,
        originalPrice: 60.00,
        category: "product-2"
    },
    {
        name: "Vivobook 16X Laptop",
        image: "./images/Vivobook 16X Laptop.jpg",
        rating: "★★★★★",
        price: 25.00,
        originalPrice: null,
        category: "product-3"
    },
    {
        name: "Soundcore Wireless Headphones",
        image: "./images/Soundcore Wireless Headphones.jpg",
        rating: "★★★★★",
        price: 15.00,
        originalPrice: null,
        category: "product-4"
    },
    {
        name: "Noise Buds VS104",
        image: "./images/Noise Buds VS104.jpg",
        rating: "★★★★★",
        price: 32.00,
        originalPrice: 40.00,
        category: "product-1"
    },
    {
        name: "Mivi Roam 2 Bluetooth",
        image: "./images/Mivi Roam 2 Bluetooth.jpg",
        rating: "★★★★★",
        price: 15.00,
        originalPrice: null,
        category: "product-2"
    },
    {
        name: "Mivi DuoPods A450",
        image: "./images/Mivi DuoPods A450.jpg",
        rating: "★★★★★",
        price: 12.00,
        originalPrice: null,
        category: "product-3"
    },
    {
        name: "Lenovo Ideapad Laptop",
        image: "./images/Lenovo Ideapad Laptop.jpg",
        rating: "★★★★★",
        price: 50.00,
        originalPrice: null,
        category: "product-4"
    },
    {
        name: "Sony Mdr 10rbt",
        image: "./images/box1.jpg",
        description: "New Collection",
        price: 200,
        originalPrice: null,
    },
    {
        name: "MacBook Pro",
        image: "./images/box2.jpg",
        description: "Best New",
        price: 1599,
        originalPrice: null,
    },
    {
        name: "Apple iPhone 15 Pro Max",
        image: "./images/Iphone-15.jpg",
        description: "BIG DISCOUNT",
        price: 1199.00,
        originalPrice: 55.00,
    }
];
let div = document.querySelector(".products-buy");
products1.map((item,index) => {
    div.innerHTML += `<div class="products">
                <img src="${item.image}" alt="">
                <p>${item.name}</p>
                <p>&#9734;&#9734;&#9734;&#9734;&#9734;</p>
                <ins>$${item.price}</ins>
                <button type="button" onclick="addToCart(${index})">Add to Cart</button>
            </div>`
})





// cart ma jo objects haan usse refresh hone ya product page pa wapis jane ka baad bhi save rakhna
const checkDataFromLocalStorage = JSON.parse(localStorage.getItem("cart"));

let cartItems;
if (checkDataFromLocalStorage === null) {
    cartItems = [];
} else {
  cartItems = [...checkDataFromLocalStorage];
}
console.log(checkDataFromLocalStorage);





function addToCart(index){
    const checkIndex = cartItems.indexOf(products1[index]);//index check kare ga ke cartItem ma wo product khn mojod ha agar nhi ha tu -1 value dega
    if(checkIndex === -1){
        products1[index].quantity = 1 //.quantity ka mtlb jo bhi objects han un ma ek or property add kar dega that is quantity or eski value 1 assign kar dega 
        cartItems.push(products1[index])
    }else{
        cartItems[checkIndex].quantity += 1 //agar phle se hi mojod ha tu uski quantity wali property ma ek plus kar dega
    }
    console.log(cartItems);

    Swal.fire({
        position: "top-end",
        icon: "success",
        title: "Product Added to cart",
        showConfirmButton: false,
        timer: 1500
    });
    
}





//local storage ma save karani haa
function viewCart() { //check Out 
const arrToString = JSON.stringify(cartItems);
localStorage.setItem("cart",arrToString);
// console.log(arrToString);
window.location = "cart.html"; //Checkout ke liye cart dekhna: Jab user view cart button click karta hai aur cart ko dekhne ki zaroorat hoti hai, toh ye line use hoti hai || ya hame new page pa laake jaye ga.
}





let count = document.querySelector('#span-count');
let allItems = count.innerHTML = `${cartItems.length}`
console.log(allItems);