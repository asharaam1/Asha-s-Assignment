console.log("hello cart");

const data = localStorage.getItem("cart");
const convert = JSON.parse(data);
console.log(convert);

let output = document.querySelector("#output");

convert.map((item, index) => {
  output.innerHTML += `
  <div class="cart-products">
    <div class="image">
        <img src="${item.image}" alt="">
    </div>
    <div class="details">
        <p>${item.name}</p>
        <ins> $${item.price}</ins>
        <p id="Select-quantity">Select Quantity</p>

        
        <div class="button-add-minus">
            <button type="button" onclick="minus(${index})">-</button>
            <p id="qun-num-${index}">${item.quantity}</p>
            <button type="button" onclick="plus(${index})">+</button>
        </div>
    </div>     
  </div>
  `;
});



function plus(index) {
  let number = document.querySelector(`#qun-num-${index}`);
  number.innerHTML++;
}

function minus(index) {
  let number = document.querySelector(`#qun-num-${index}`);
  if (number.innerHTML > '0') {
    number.innerHTML--;
  }
}

