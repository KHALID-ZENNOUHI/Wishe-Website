// navbar toggle
const humberger = document.querySelector(".humberger");
const navMenu = document.querySelector(".nav-menu");
humberger.addEventListener("click", () => {
    humberger.classList.toggle("active");
    navMenu.classList.toggle("active");
})

// side bar

const sideBar = document.querySelector(".side-bar");
const panierIcon = document.querySelector(".panier-icon")
panierIcon.addEventListener("mouseover",() => {
    sideBar.style.display = "flex";
});
panierIcon.addEventListener("mouseout",() => {
    sideBar.style.display = "none";
});
sideBar.addEventListener("mouseout", () => {
    sideBar.style.display = "none";
});
sideBar.addEventListener("mouseover", () => {
    sideBar.style.display = "flex";
});


// searche icon & input

const searche = document.querySelector(".searche");
const searcheInput = document.querySelector(".searche-input");
const hiddenItems = document.querySelector(".items-hidden")
searche?.addEventListener("click", (e) => {
    searcheInput.style.display = "block";
    searche.style.display = "none";
    hiddenItems.style.display = "none";
});

// form validation

let form = document.querySelector(".form1");
let firstNameInput = document.querySelector("[name = 'First-Name']");
let lastNameInput = document.querySelector("[name = 'Last-Name']");
let emailInput = document.querySelector("[name = 'Email']");
let button = document.querySelector("[name = 'button']");
button?.addEventListener("click", (e) => {
    button.style.backgroundColor = "#334155";
});
form?.addEventListener("submit", (e) => {
    firstName = false;
    lastName = false;
    emailInput = false;
    textArea = false;
    if (firstNameInput.value !== "" && firstNameInput.value.length <= 10 && lastNameInput.value !== "" && lastNameInput.value.length <= 10 && emailInput !=="") {
        firstName = true;
        lastName = true;
        emailInput = true;
        textArea = true;
    }
    if (firstName === false || lastName === false || emailInput === false) {
        e.preventDefault();
    }
});

// add-to-card of product details page

let productCounter = 3;
let addToCard = document.querySelector(".add-to-card-button");
let addToCardIcon = document.querySelector(".cart-items2")
let productQuantity = document.querySelectorAll(".product-quantity");
let productQuantityAll = document.querySelector(".product-quantity-all");
let plusProduct = document.querySelectorAll(".plus");
let minceProduct = document.querySelectorAll(".mince");
let productPrice = document.querySelectorAll(".product-price");
let totalePrice = document.querySelector(".totale-price");
let totale = 0;
addToCard?.addEventListener("click", (e) => {
    productCounter++;
    productQuantityAll.textContent = productCounter;
});
for (let index = 0; index < plusProduct.length; index++) {
    plusProduct[index].addEventListener("click", (e) => {
        productQuantity[index].textContent++;
        for (let index = 0; index < productPrice.length; index++) {
            totale =totale + parseInt(productQuantity[index].textContent)*parseInt(productPrice[index].textContent);
        }
        totalePrice.textContent = totale;
    });
}
for (let index = 0; index < minceProduct.length; index++) {
    minceProduct[index].addEventListener("click", (e) => {
        if (productQuantity[index].textContent > 0) {
            productQuantity[index].textContent--;
        }
        for (let index = 0; index < productPrice.length; index++) {
            totale = totale + parseInt(productQuantity[index].textContent)*parseInt(productPrice[index].textContent);  
            console.log(parseInt(productQuantity[index].textContent)); 
        }
        totalePrice.textContent = totale;
    });
}
