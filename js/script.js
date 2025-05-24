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
let addProductForm = document.getElementById("addProductForm")

document.addEventListener('keydown', function (e) {
    // Normalize the key for lowercase
    const key = e.key.toLowerCase();

    if (e.ctrlKey && key === 'a') {
        e.preventDefault();
        addProductForm.style.display = "flex";
    }
});
document.addEventListener('keydown', function (e) {
    // Normalize the key for lowercase
    const key = e.key.toLowerCase();

    if (e.ctrlKey && key === 'z') {
        e.preventDefault();
        addProductForm.style.display = "none";
    }
});
// /////////////////////////////////////////////////////
let name = document.getElementById("name");
let email = document.getElementById("email");
let submit = document.getElementById("submit");
submit.addEventListener("click", () => {
    if (name.value.toLowerCase() === "admin" && email.value.toLowerCase() === "admin@gmail.com") {
        addProductForm.style.display = "flex";

    }
})


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
// let newProducts = [{

// }]
function createProd() {
    document.getElementById("con5-allItems").innerHTML = ""
    products.map((item, index) => {
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

let productName = document.getElementById("productName")
let productPrice = document.getElementById("productPrice")
let productImage = document.getElementById("productImage")
let productDiscount = document.getElementById("productDiscount")
let addProductBtn = document.getElementById("addProductBtn")

addProductBtn.addEventListener("click", (event) => {
    event.preventDefault()
    // console.log("reyad")
    let product = {
        name: productName.value,
        price: productPrice.value,
        image: productImage.value,
        discount: productDiscount.value
    }
    products.push(product)
    // newProducts.push(product)
    createProd()
    createManager()
    productName.value = ""
    productPrice.value = ""
    productImage.value = ""
    productDiscount.value = ""


})
// /////////////////////////////////////
closeForm.addEventListener("click", () => {
    addProductForm.style.display = "none"
})

document.getElementById("manager").addEventListener("click", () => {
    document.querySelector(".manager").style.display = "block"

})
// //////////////////////////////////////////
// add products to the manager


function createManager() {
    document.querySelector(".manager-content").innerHTML = ""
    products.map((item, index) => {
        let discountPrice = item.price - (item.price * item.discount / 100)
        document.querySelector(".manager-content").innerHTML += `
        <div class="item-add">
        <div class="img"><img src="${item.image}" alt=""></div>
        
        <div class="infos">
            <h4>${item.name}</h4>
            <p>Price:${item.price}</p>
            <p>Discount:${item.discount}%</p>
            <p>Final Price:${discountPrice}</p>
            <div class="controler">
                <button class="btn btn-danger">Delete</button>
                <button class="btn btn-primary">Edit</button>
            </div>
        </div>
    </div>`

    })
}
createManager()
// //////////////////////////////
closeManager.addEventListener("click", () => {
    document.querySelector(".manager").style.display = "none"
})
