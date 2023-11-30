function displayMailingLabel(name, address, city, state, zip) {
    console.log(name);
    console.log(address);
    console.log(city + ", " + state + ", " + zip);
}

let name = "Sebastian Acosta";
let address = "4218 West Milada Drive";
let city = "Phoenix";
let state = "AZ";
let zip = "85339";

displayMailingLabel(name, address, city, state, zip)

function addNumbers(num1, num2) {
    let result = num1 + num2;
    console.log(`${num1} + ${num2} = ${result}`);
}

addNumbers(4, 10)

function displayReceipt(totalDue, amountPaid) {
    let changeDue = totalDue - amountPaid;
    if (changeDue < 0) {
        console.log("You still owe " + changeDue);
    } else {
        console.log(`Total Due: $${totalDue}`);
        console.log(`Amount Paid: $${amountPaid}`);
        console.log(`Change Due: $${changeDue}`);
    }
}

displayReceipt(20, 10)