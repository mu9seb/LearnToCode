function convertFtoC(temp_f) {
    let temp_c = (temp_f-32) * (5/9);
    let displayMessage = console.log(`A temperature of ${temp_f} degrees Fahrenheit equates to ${temp_c} degrees Celcius.`)
    return displayMessage;
}
