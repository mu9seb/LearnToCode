let code = "ACME:123-L";

function getSupplier(code) {
    // returns all chars before ":"
    let index = code.indexOf(":");''
    let displayCode  = code.substring(0, index);
    return console.log(displayCode);
}

getSupplier(code)

function getProductNumber(code) {
    // returns all chars between ":" and "-"
    let index1 = code.indexOf(":") + 1;
    let index2 = code.indexOf("-");
    let displayCode  = code.substring(index1, index2);
    return console.log(displayCode)
}

getProductNumber(code)

function getSize(code) {
    // returns all chars after "-"
    let index = code.indexOf("-") + 1;
    let displayCode  = code.slice(index);
    return console.log(displayCode);
}

getSize(code)