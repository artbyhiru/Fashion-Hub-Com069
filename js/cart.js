function addCart(name, price) {

    let cart = JSON.parse(localStorage.getItem("cart")) || [];

    cart.push({ name: name, price: price });

    localStorage.setItem("cart", JSON.stringify(cart));

    alert("Product added to cart");

}


// remove item
function removeItem(index) {

    let cart = JSON.parse(localStorage.getItem("cart")) || [];

    cart.splice(index, 1);

    localStorage.setItem("cart", JSON.stringify(cart));

    location.reload();

}