let monthlyPaymentField = document.getElementById("monthlyPaymentField").value;
let totalInterestField = document.getElementById("totalInterestPaidField").value;


function mortgageCalculator () {
    // 1. Gather Inputs
    const principal = Number(document.getElementById("principalInput").value);
    const interestRate = Number(document.getElementById("interestRateInput").value);
    const loanLength = Number(document.getElementById("loanLengthInput").value);

    // 2. Gather known values, plug in formula to find unknowns
    let monthlyInterest = interestRate / 1200;
    let numPayments = loanLength * 12;

        // Monthly payment formula
    const monthlyPayment = (principal*monthlyInterest) / (1 - (1 + monthlyInterest)**(-numPayments));
    console.log(monthlyPayment);
        // Total Interest Paid formula
    const totalInterest = (monthlyPayment * numPayments) - principal; 
    console.log(totalInterest);

    // 3. Display output
    monthlyPaymentField = monthlyPayment;
    totalInterestField = totalInterest;
}