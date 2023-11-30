let s = "(1 1)(3 3)"
function travelChessboard(s) {
// find out the number of different paths you can take to get from point A to point B by moving one cell at a time either down or right.
// point A always up and to the left of point B --> x1 < x2, y1 < y2

// get and store coordinates from given string
    const sampleRegEx = /\d/g; // find all (gloabl match) digits
    const [x1, y1, x2, y2] = Array.from(s.match(sampleRegEx).map(Number));
    let rows = y2-y1+1, cols = x2-x1+1;
    let factorialRows, factorialCols;

    if (rows === 1) {
        return 1;
    }
    while (rows > 1) {
        rows--;
        factorialRows *= rows;
    } 
    return factorialRows;
// from coord values, calculate number of rows & cols
// number of possible paths = (rows!) / (cols! * (rows-cols)!)
}
console.log(travelChessboard(s));
