let isAuth = localStorage.getItem("isAuth")  || "Not Authenticated";

if(isAuth !== "Authenticated"){
    window.Location.href="./login.html";
};

// let productDiv = document.getElementById("products")
// function displayProducts(data){
//     data.forEach((obj) => {
//         let div = document.createElement("div");
//         let h3 = document.createElement("h3");
//         h3.innerText = obj.title;
//         let img = document.createElement("img");
//         img.src = obj.image;
//         img.style.height = "100px"
//         let price = document.createElement("p")
//         price.innerText = obj.price 

//         div.append(h3, image);
//         productsDiv.append(div)
//     });
// }
        
   


// fetch("./db.json")
//     .then((res) => res.json())
//     .then((data) => displayProducts(data))
//     .catch((err) => console.log(err)); 





  // array of objects
  let data = [
    {
        name: "Tea 1kg",
        price: "305",
        img: "https://www.bigbasket.com/media/uploads/p/m/1212259_1-soft-drink.jpg",
    },
    {
        name: "Pepsi Black",
        price: "135",
        img: "https://www.bigbasket.com/media/uploads/p/m/1203608_1-mineral-water.jpg",
    },
    {
        name: "Coconut Water",
        price: "513",
        img: "https://www.bigbasket.com/media/uploads/p/m/1206997_2-coconut-water-with-no-added-sugar.jpg",
    },
    {
        name: "Nescafe Coffee",
        price: "564",
        img: "https://www.bigbasket.com/media/uploads/p/m/1204494_1-coffee-classic.jpg",
    },
    {
        name: "Coca Cola",
        price: "156",
        img: "https://www.bigbasket.com/media/uploads/p/m/1208189_1-juice-mango-refresh.jpg",
    },
    {
        name: "Thums Up (12 x 750ml)",
        price: "350",
        img: "https://www.bigbasket.com/media/uploads/p/m/1212259_1-soft-drink.jpg",
    },
    {
        name: "Bisleri Mineral Water",
        price: "120",
        img: "https://www.bigbasket.com/media/uploads/p/m/1203608_1-mineral-water.jpg",
    },
    {
        name: "Bourn Vita (2 x 750gm)",
        price: "525",
        img: "https://www.bigbasket.com/media/uploads/p/m/1204494_1-coffee-classic.jpg",
    },
    {
        name: "Sparkling Water",
        price: "100",
        img: "https://www.bigbasket.com/media/uploads/p/m/265680_11-sparkling-water-club-soda.jpg",
    },
    {
        name: "Maaza",
        price: "95",
        img: "https://www.bigbasket.com/media/uploads/p/m/1208189_1-juice-mango-refresh.jpg",
    },
    {
        name: "Real Juice (3 x 1L)",
        price: "305",
        img: "https://www.bigbasket.com/media/uploads/p/m/1204494_1-coffee-classic.jpg",
    },
    {
        name: "Bru Gold Instant Coffee",
        price: "261",
        img: "https://www.bigbasket.com/media/uploads/p/m/1208189_1-juice-mango-refresh.jpg",
    },

];

//   1. Run a foreach loop on products data and console log individual product names
// 2. Append this data on DOM
// 2.1 create elements
// document.body.append("parent");
let parent = document.getElementById('products');

function showProducts(d) {

    parent.innerHTML = null;

    d.forEach(function (product) {
        // console.log(product.name);
        let div = document.createElement("div");

        let img = document.createElement("img");
        img.src = product.img;

        let product_price = document.createElement("p");
        product_price.textContent ="₹" + product.price;

        let product_name = document.createElement("p");
        product_name.textContent = product.name;

        let add_to_cart = document.createElement("button");
        add_to_cart.innerText = "Add to Cart";

        add_to_cart.onclick = function () {
            addToCart(product);
        }

        div.append(img, product_name, product_price, add_to_cart);

        parent.append(div);

    });

}

showProducts(data);
// check if cart exists in localstorage;

if (localStorage.getItem("cart") === null) {
    localStorage.setItem("cart", JSON.stringify([]));
}
let cart = JSON.parse(localStorage.getItem("cart"));
let alimul = document.getElementById("bask");
alimul.innerText= cart.length + " Items";

function addToCart(p) {
    let products_cart = JSON.parse(localStorage.getItem("cart"));

    products_cart.push(p);

    localStorage.setItem("cart", JSON.stringify(products_cart));
    console.log(products_cart);
    let bak = products_cart.length;
    let bsk = document.getElementById("bask");
    bsk.innerText = bak + " Items";


}


function sortLH() {
    // 1. array data will be same but we will reshuffle based on price
    // 2. show the reshuffled array on DOM
    let arr = data.sort(function (a, b) {
        return a.price - b.price;
    });
    showProducts(arr);
}

function sortHL() {
    // 1. array data will be same but we will reshuffle based on price
    // 2. show the reshuffled array on DOM

    let arr1 = data.sort(function (a, b) {
        return b.price - a.price;
    });
    showProducts(arr1);
}








var slideIndex = 0;
carousel();

function carousel() {
    var i;
    var x = document.getElementsByClassName("mySlides");
    for (i = 0; i < x.length; i++) {
        x[i].style.display = "none";
    }
    slideIndex++;
    if (slideIndex > x.length) { slideIndex = 1 }
    x[slideIndex - 1].style.display = "block";
    setTimeout(carousel, 3000);
}
function myFunction() {
    var dots = document.getElementById("dots");
    var moreText = document.getElementById("more");
    var btnText = document.getElementById("myBtn");

    if (dots.style.display === "none") {
        dots.style.display = "inline";
        btnText.innerHTML = "Read more";
        moreText.style.display = "none";
    } else {
        dots.style.display = "none";
        btnText.innerHTML = "Read less";
        moreText.style.display = "inline";
    }
}