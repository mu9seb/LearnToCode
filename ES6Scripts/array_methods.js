let cart = [
    {item: "Bread", price: 3.29, quantity: 2},
    {item: "Milk", price: 4.09, quantity: 1},
    {item: "T-Bone Steak", price: 12.99, quantity: 2},
    {item: "Baking Potato", price: 1.89, quantity: 6},
    {item: "Iceberg Lettuce", price: 2.06, quantity: 1},
    {item: "Ice Cream - Vanilla", price: 6.81, quantity: 1},
    {item: "Apples", price: 0.66, quantity: 6}
];

             // Part A \\
function printItemName(currentCartItem) {
    console.log("--------------------------------");
    console.log(`Name:         ${currentCartItem}`);
}

function getItemNames(cartItem) {
    return cartItem.item;
}

let itemNames = cart.map(getItemNames);
itemNames.forEach(printItemName);

              // Part B \\
function getSum(currentTotal, currentCartItem) {
    return currentTotal + (currentCartItem.price * currentCartItem.quantity);
}

let sum = cart.reduce(getSum, 0);
console.log(`Total Due:                $${sum}`);

              // Part C \\ Not working :'(
let itemNamesSorted = itemNames.sort((a, b) => {
    if (a.item < b.item) return -1;
    else if (a.item == b.item) return 0;
    else return 1;
})
itemNamesSorted.forEach(printItemName);
