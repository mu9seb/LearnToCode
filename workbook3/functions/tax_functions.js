function getSocSecTax(grossPay) {
    let federalTaxRate = 0.062;

    let socialSecurityTax = federalTaxRate*grossPay;
    return socialSecurityTax;
}

function getMedicareTax(grossPay) {
    let medicareTax;
    let federalTaxRate = 0.0145;

    medicareTax = federalTaxRate * grossPay;
    return medicareTax;
}

function getFederalTax(grossPay, withholdingCode) {
    let federalTaxRate;
    
    if (withholdingCode >= 4) {
        let excess = withholdingCode - 4;
        let excessWithheld = excess * 0.005;
        federalTaxRate = 18 - withhold;
    } else if (withholdingCode == 3) {
        federalTaxRate = 0.185;
    } else if (withholdingCode == 2) {
        federalTaxRate = 0.195;
    } else if (withholdingCode == 1) {
        federalTaxRate = 0.21;
    } else if (withholdingCode == 0) {
        federalTaxRate = 0.23;
    }

    let displayMessage = console.log(`With a gross pay of $${grossPay} and withholding code, ${withholdingCode}, the federal tax rate is ${federalTaxRate}%`)
    return displayMessage;
}

getFederalTax(750, 0)