let NextBut = document.getElementById("next");
let PrevBut = document.getElementById("prev");
let curentPos = 0;
let max = 900;

NextBut.addEventListener("click", () => {
    if (curentPos < max) {
        curentPos += 85;
        document.querySelector(".con4-inner").style.transform += "translateX(-180px)"
        document.querySelector(".con4-inner").style.transition = "all .3s ease-in-out"
    }
})

PrevBut.addEventListener("click", () => {
    if (curentPos > 0) {
        curentPos -= 85;
        document.querySelector(".con4-inner").style.transform += "translateX(180px)"
        document.querySelector(".con4-inner").style.transition = "all .3s ease-in-out"
    }
})


// ///////////////////////////////////////////////
document.addEventListener('keydown', function (e) {
    // Normalize the key for lowercase
    const key = e.key.toLowerCase();

    if (e.ctrlKey && key === 'a') {
        e.preventDefault();               // stop the browser’s default Ctrl+G action
        window.location.href = "Admin.html";
    }
});
let name = document.getElementById("name");
let email = document.getElementById("email");
let submit = document.getElementById("submit");
submit.addEventListener("click", () => {
    if(name.value.toLowerCase() ==="admin" && email.value.toLowerCase() === "admin@gmail.com"){
        window.location.href = "Admin.html";
    }
})
// ////////////////////////////////////////////////
// let productName = document.getElementById("productName");
// let productPrice = document.getElementById("productPrice");
// let productDiscount = document.getElementById("productDiscount");
// let productDescription = document.getElementById("productDescription");
// let productImage = document.getElementById("productImage");
// let productStock = document.getElementById("productStock");
// let productSubmit = document.getElementById("productSubmit");
// admin.js
// 1) Grab your elements
const productName     = document.getElementById("productName");
const productPrice    = document.getElementById("productPrice");
const productDiscount = document.getElementById("productDiscount");
const productImage    = document.getElementById("productImage");
const productSubmit   = document.getElementById("productSubmit");



let products = [{
    name: "product name",
    price: "500",
    image: "img/product-thumb-1.png",
    discount: "30",
},
{
    name: "product name",
    price: "250",
    image: "img/product-thumb-2.png",
    discount: "10",
},
{
    name: "product name",
    price: "950",
    image: "img/product-thumb-3.png",
    discount: "33",
},
{
    name: "product name",
    price: "670",
    image: "img/product-thumb-4.png",
    discount: "40",
},
{
    name: "product name",
    price: "180",
    image: "img/product-thumb-5.png",
    discount: "20",
},
{
    name: "product name",
    price: "830",
    image: "img/product-thumb-6.png",
    discount: "25",
},
{
    name: "product name",
    price: "380",
    image: "img/product-thumb-1.png",
    discount: "70",
},
{
    name: "product name",
    price: "670",
    image: "img/product-thumb-6.png",
    discount: "60",
},


]
function createProd() {
    products.map((item,index)=>{
        discountPrice = item.price - (item.price * item.discount / 100)
        // console.log(item,index)
        document.getElementById("con5-allItems").innerHTML += `
        <div class="col-xl-3 col-lg-4 col-md-6 col-sm-6 col-12">
        <div class="con5-inner ">
            <div class="img">
                <img src="${item.image}" alt="" loading="lazy">
            </div>
            <div class="con5-infos">
                <h4>${item.name}</h4>
                <span>
                    <i class="fa-solid fa-star"></i>
                    <i class="fa-solid fa-star"></i>
                    <i class="fa-solid fa-star"></i>
                    <i class="fa-solid fa-star"></i>
                    <i class="fa-solid fa-star"></i>
                    <span>(20)</span>
                </span>
                <div class="price">
                    <p class="dis"><del> ${item.price}</del></p>
                    <p class="mainPrice">${discountPrice}</p>
                    <p class="offer">${item.discount}% Off</p>
                </div>
                <div class="lastSec">
                    <input type="number" value="1">
                    <button>Add To Cart</button>
                    <i class="fa-solid fa-heart"></i>
                </div>

            </div>
        </div>
    </div>  `
    })
}
createProd()



//   productSubmit.addEventListener("click", (e) => {
//     e.preventDefault();
  
//     const product = {
//       name:     productName.value,
//       price:    productPrice.value,
//       discount: productDiscount.value,
//       image:    productImage.value,
//     };
  
//     console.log("New product:", product);
//     products.push(product);
  
//     productName.value     = "";
//     productPrice.value    = "";
//     productDiscount.value = "";
//     productImage.value    = "";
  
//     createProd();
//   });
  