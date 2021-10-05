const user = {
    name: "Kim",
    active: true,
    cart: [],
    purchases: []
}

const AddToCart = item => {
    user.cart.push(item);
}

const Purchase = () => {

    const addToPurchase = (item) => {
        user.purchases.push(item);
    }

    user.cart.map(
        addToPurchase
    );

    user.cart = [];
}

AddToCart("a");
AddToCart("b");
AddToCart("c");

console.log(user);

Purchase();

console.log(user);