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
// localStorage
let products = JSON.parse(localStorage.getItem("products")) || [
    { id:1,  name:"product name", price:"500", image:"img/product-thumb-1.png", discount:"30", star:false },
    { id:2,  name:"product name", price:"320", image:"img/product-thumb-2.png", discount:"10", star:false },
    { id:3,  name:"product name", price:"780", image:"img/product-thumb-3.png", discount:"50", star:false },
    { id:4,  name:"product name", price:"240", image:"img/product-thumb-4.png", discount:"30", star:false },
    /* … etc … */
  ];
  let star = JSON.parse(localStorage.getItem("star")) || [
    { id:1,  name:"product name", price:"500", image:"img/product-thumb-1.png", discount:"30", star:true },
    { id:2,  name:"product name", price:"320", image:"img/product-thumb-2.png", discount:"10", star:true },
    { id:3,  name:"product name", price:"780", image:"img/product-thumb-3.png", discount:"50", star:true },
    { id:4,  name:"product name", price:"240", image:"img/product-thumb-4.png", discount:"30", star:true },
  ];
  function saveProducts() {
    localStorage.setItem("products", JSON.stringify(products));
    localStorage.setItem("star", JSON.stringify(star));

  }  
  
 
// /////////////////////////////////////////////////////



// let products = [{
//     id: 1,
//     name: "product name",
//     price: "500",
//     image: "img/product-thumb-1.png",
//     discount: "30",
//     star: false,
// },
// {
//     id: 2,
//     name: "product name",
//     price: "250",
//     image: "img/product-thumb-2.png",
//     discount: "10",
//     star: false,
// },
// {
//     id: 3,
//     name: "product name",
//     price: "950",
//     image: "img/product-thumb-3.png",
//     discount: "33",
//     star: false,
// },
// {
//     id: 4,
//     name: "product name",
//     price: "670",
//     image: "img/product-thumb-4.png",
//     discount: "40",
//     star: false,
// },
// {
//     id: 5,
//     name: "product name",
//     price: "180",
//     image: "img/product-thumb-5.png",
//     discount: "20",
//     star: true,
// },
// {
//     id: 6,
//     name: "product name",
//     price: "830",
//     image: "img/product-thumb-6.png",
//     discount: "25",
//     star: true,
// },
// {
//     id: 7,
//     name: "product name",
//     price: "380",
//     image: "img/product-thumb-1.png",
//     discount: "70",
//     star: true,
// },
// {
//     id: 8,
//     name: "product name",
//     price: "670",
//     image: "img/product-thumb-6.png",
//     discount: "60",
//     star: true,
// },
// ]
// let star = [
//     {
//         id: 8,
//         name: "product name",
//         price: "670",
//         image: "img/product-thumb-6.png",
//         discount: "60",
//         star: true,
//     },
//     {
//         id: 7,
//         name: "product name",
//         price: "380",
//         image: "img/product-thumb-1.png",
//         discount: "70",
//         star: true,
//     },
//     {
//         id: 6,
//         name: "product name",
//         price: "830",
//         image: "img/product-thumb-6.png",
//         discount: "25",
//         star: true,
//     },
//     {
//         id: 5,
//         name: "product name",
//         price: "180",
//         image: "img/product-thumb-5.png",
//         discount: "20",
//         star: true,
//     },
// ]

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
function createStar() {
    
    document.getElementById("most-popular-inner").innerHTML = ""
    star.map((item, index) => {
        discountPrice = item.price - (item.price * item.discount / 100)
        // console.log(item,index)
        document.getElementById("most-popular-inner").innerHTML += `
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
createStar()
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
    localStorage.setItem("products", JSON.stringify(products))
    Swal.fire({
        title: "Product Added Successfully!",
        icon: "success",
        draggable: true
    });
    // newProducts.push(product)
    saveProducts();          // ← save
    createProd()
    AddToManager()
    productName.value = ""
    productPrice.value = ""
    productImage.value = ""
    productDiscount.value = ""


})
// /////////////////////////////////////
// open add product form using ctrl + a
let addProductForm = document.getElementById("addProductForm")
document.addEventListener('keydown', function (e) {
    const key = e.key.toLowerCase();

    if (e.ctrlKey && key === 'a') {
        e.preventDefault();
        addProductForm.style.display = "flex";
    }
});
// close add product form using ctrl + z
document.addEventListener('keydown', function (e) {
    // Normalize the key for lowercase
    const key = e.key.toLowerCase();

    if (e.ctrlKey && key === 'z') {
        e.preventDefault();
        addProductForm.style.display = "none";
    }
});
// admin login
let name = document.getElementById("name");
let email = document.getElementById("email");
let submit = document.getElementById("submit");
submit.addEventListener("click", () => {
    if (name.value.toLowerCase() === "admin" && email.value.toLowerCase() === "admin@gmail.com") {
        addProductForm.style.display = "flex";

    }
})


// close add product form
closeForm.addEventListener("click", () => {
    addProductForm.style.display = "none"
})

// open manager 
document.getElementById("manager").addEventListener("click", () => {
    document.querySelector(".manager").style.display = "block"

})
// close manager
closeManager.addEventListener("click", () => {
    document.querySelector(".manager").style.display = "none"
})
// //////////////////////////////////////////
// add products to the manager
function AddToManager() {
    document.querySelector(".manager-content").innerHTML = ""
    products.map((item, index) => {
        let star = ""
        if (item.star === true) {
            star = `<button class="btn btn-warning" onclick="starProduct(${index})" ><i class="fa-solid fa-star"></i></button>`
        } else {
            star = `<button class="btn btn-warning" onclick="starProduct(${index})" ><i class="fa-regular fa-star"></i></button>`
        }
        let discountPrice = item.price - (item.price * item.discount / 100)
        document.querySelector(".manager-content").innerHTML += `
        <div class="item-add">
        <div class="img"><img src="${item.image}" alt="">
        
        </div>
        
        <div class="infos">
        <h4>${item.name}</h4>
        <p>Price:${item.price}</p>
        <p>Discount:${item.discount}%</p>
        <p>Final Price:${discountPrice}</p>
        <div class="controler">
        <button onclick="deleteProduct(${index})" class="btn btn-danger">Delete</button>
        <button onclick="editProduct(${index})" class="btn btn-primary">Edit</button>
        ${star}
        </div>
        </div>
    </div>`

    })
}
function starProduct(index) {
    if (products[index].star === true) {
        star.splice(star.indexOf(products[index]), 1)
    } else {
        star.push(products[index])
    }
    products[index].star = !products[index].star
    saveProducts();          // ← save
    createStar()
    AddToManager()
}
AddToManager()
// //////////////////////////////
// delete products
function deleteProduct(index) {
    products.splice(index, 1)
    saveProducts();          // ← save
    AddToManager()
    createProd()
}
// /////////////////////////////
// edit products
function editProduct(index) {
    addProductBtn.style.display = "none"
    editProductBtn.style.display = "block"
    productName.value = products[index].name
    productPrice.value = products[index].price
    // productImage.value = products[index].image
    productDiscount.value = products[index].discount
    editProductBtn.dataset.index = index
}
let editProductBtn = document.getElementById("editProductBtn")
editProductBtn.style.display = "none"
editProductBtn.addEventListener("click", (event) => {
    event.preventDefault()
    let index = event.target.dataset.index
    let product = {
        name: productName.value,
        price: productPrice.value,
        image: productImage.value,
        discount: productDiscount.value
    }
    products[index] = product
    saveProducts();          // ← save
    AddToManager()
    createProd()
    addProductBtn.style.display = "block"
    editProductBtn.style.display = "none"
    productName.value = ""
    productPrice.value = ""
    productImage.value = ""
    productDiscount.value = ""
    addProductBtn.textContent = "Add Product"
    addProductBtn.dataset.index = ""
})
editProductBtn.style.display = "none"

