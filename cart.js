console.log("hello cart");
function newPage(){
  window.location ='products.html';
  localStorage.setItem('cart', JSON.stringify(convert));
}





// data mere pas string ki form ma hi get hogi
const data = localStorage.getItem('cart');
//next line ma, ma data ko phir se array ma convert kara rha
let convert = JSON.parse(data);
// console.log(convert);
// ab ya coverted data mera pas array of objects ki form ma ha ab esma ma map chalaonga





let output = document.querySelector("#output");
const totalAmounts = document.querySelector(".total-amount");



function renderItems(){
  let totalAmount = 0;
  totalAmounts.innerHTML = '';

  if(convert.length > 0){
    convert.map((item, index) => {
      totalAmount += item.price * item.quantity;
      output.innerHTML += `
      <div class="cart-products" id="product-container-${index}">
        <div class="image">
            <img src="${item.image}" alt="">
        </div>
        <div class="details">
            <p>${item.name}</p>
            <ins> $${item.price}</ins>
            <p id="Select-quantity">Total Price:<ins>$${item.price * item.quantity}</ins></p>
            <p id="Select-quantity">Select Quantity</p>
            <div class="button-add-minus">
              <button type="button" onclick="minus(${index})">-</button>
              <p >${item.quantity}</p>
              <button type="button" onclick="plus(${index})">+</button>
            </div>

            <button class="delete-btn" onclick="deleteItem(${index})">Delete</button>
        </div>     
      </div>
      `;
    });

    totalAmounts.innerHTML = `Total Amount: $${totalAmount}`
  }else{
    output.innerHTML = '<h2> No item Found..</h2>'
  }
}

renderItems()





function plus(index){
  output.innerHTML = ''
  //console.log(item)
  convert[index].quantity += 1
  renderItems()
}





function minus(index){
  output.innerHTML = ''
  //console.log(item)
  convert[index].quantity -= 1
  renderItems()
  if(convert[index].quantity === 0){
    output.innerHTML = ''
    convert.splice(index , 1)
    renderItems()
  }
}





function deleteItem(index){
  output.innerHTML = ''
  convert.splice(index,1);
  renderItems()
}