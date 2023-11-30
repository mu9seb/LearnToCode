let products = [
    {product: "Gummy Worms", price: 5.79},
    {product: "Plain M&Ms", price: 2.89},
    {product: "Peanut M&Ms", price: 2.89},
    {product: "Swedish Fish", price: 3.79},
    {product: "Gushers", price: 4.79},
    {product: "Fruit Roll Ups", price: 2.99},
    {product: "Ring Pops", price: 2.79},
    {product: "Poptarts", price: 5.19},
    {product: "Chili Lemon Lays", price: 2.29},
    {product: "Sour Bears", price: 2.79},
    // TODO: fill the array with 10 candies of various
    // price ranges
    ];



// Exercise 1 \\
let cheapCandies = products.filter(item => item.price < 4);
console.log(`Here's a list of candies all priced less than $4.00:`);
console.table(cheapCandies);


// let mMs = products.filter(item => {
//     if ("M&Ms" in item.product) {
//         return item;
//     }
// });
// mMs.forEach(item => console.log(item)); 

let swedishFish = products.find((item) => item.product == "Swedish Fish");
if (swedishFish.length != NaN) {
    console.log(`Yes there's swedish fish. Wouldn't you like some?`)
} else {
    console.log(`No swedish fish for you!`)
}
