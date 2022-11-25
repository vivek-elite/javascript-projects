let wishList = [];

function setup() 
{
    let products = document.querySelectorAll(".but");
    for (let i = 0; i < products.length; i++)
    {
        products[i].onclick = function(e) {
            addItem(e);
        }
    }
}

function addItem (e) {
    let productId = e.target.getAttribute("id");
    if(!wishList.find(element => element === productId)){
        let productDiv = document.getElementById("product" + productId);

        let wishDiv = document.createElement("div");
        wishDiv.setAttribute("id", "wish" + productId);
        wishDiv.setAttribute("class", "product");
        wishDiv.setAttribute("style", "margin-bottom: 10px;")
        wishDiv.innerHTML += productDiv.innerHTML;
        let inputTag = document.createElement("input");
        inputTag.setAttribute("id", "remove" + productId);
        inputTag.setAttribute("type", "button");
        inputTag.setAttribute("value", "Remove");
        inputTag.setAttribute("class", "removebut");
        inputTag.onclick = function() {
            document.getElementById("wish" + productId).remove();
            wishList = wishList.filter(function(element) {
                return element !== productId
            })
        }
        wishDiv.appendChild(inputTag);

        let aside = document.getElementById("wishlist");
        aside.appendChild(wishDiv);

        wishList.push(productId);
    }
}
window.addEventListener("load", setup);