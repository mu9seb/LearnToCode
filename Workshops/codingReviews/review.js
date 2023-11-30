// Isograms
// isIsogram = true
// if word contains no repeating letters
function isIsogram(str) {
    isIsogram = true;
    let strArray = [];
    for (let i=0; i < str.length; i++) {
        strArray.push(str[i]);
    }
    if (strArray.indexOf())


    console.log(isIsogram);
}
let str = ["teal"];
// isIsogram(str)

// Rock, Paper Scissors
const rps = (p1, p2) => {
    if (p1=="scissors" && p2=="paper") {
        return "Player 1 won!"
    }else if (p1=="paper" && p2=="rock") {
        return "Player 1 won!"
    } else if (p1=="rock" && p2=="scissors") {
        return "Player 1 won!"
    } else {
        return "Player 2 won!"
    }
  };

// console.log(rps("scissors", "rock"));

// Pangram
/** Check if a string contains all letters in the alphabet, at least once.  */
function isPangram(string) {
    let alphabetLetters = "a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,t,u,v,w,x,y,z";
    alphabetLetters = alphabetLetters.split(",");
    let charsArray = string.toLowerCase().split("");

    let isPangram = true;
    alphabetLetters.forEach(letter => {
        if (charsArray.indexOf(letter) == -1) {
            isPangram = false;
        }
    });
    return isPangram;
}
let testPangram = "abcdefghijklmnopqrstuvwxyz";
let testString = "my names seb";

// console.log(isPangram(testPangram))
// console.log(isPangram(testString))

// Reverse Words
const sampleString = "This is an example!";
function reverseWords(str) {
    let displayMessage = "";
    let words = str.split(" ");

    for (let i = 0; i < words.length; i++) {
        const word = words[i];
        let revWord = ""
        for (const char of word) {
            revWord = char + revWord;
        }
        words[i] = revWord
    }
    words.forEach(word => {
        displayMessage = displayMessage.concat(word, " ");
    });
    return displayMessage.trim();
}
reverseWords(sampleString);

// Digital Root
function digitalRoot(n) {
    // Return the recursive sum of all digits in n
    let digits = Array.from(String(n), (num) => Number(num));
    let ans = digits.reduce((a,b) => a + b, 0);

    while (String(ans).length > 1) {
      digits = Array.from(String(ans), (num) => Number(num));
      ans = digits.reduce((a,b) => a + b, 0);
    }
    return ans
  }

// digitalRoot(3673)

// Find the unique number
let arr = [ 0, 0, 0.55, 0, 0 ];
function findUniq(arr) {
  const sortedArr = arr.sort((a,b) => a-b);
  if (sortedArr[0] == sortedArr[1]) {
    return sortedArr[sortedArr.length - 1]
  }
return sortedArr[0]
}
// findUniq(arr)

// Binary Addition
function addBinary(a,b) {
    let result = a + b;
    let binary = ""
    while (result > 0) {
        if (result % 2 == 1) {
            binary = "1" + binary;
        } else {
            binary = "0" + binary;
        }
        result = Math.floor(result/2);
    }
    return binary
}
// console.log(addBinary(1,1))


// Sort the Odds
let oddsArray = [5, 3, 2, 8, 1, 4];
function sortArray(array) {
    /* Sort odds in ascending order and pass evens. */
    let ans = [];

    let odds = array.filter((a) => a % 2 == 1);
    odds.sort((a,b) => a - b);

    let oddCount = 0;
    for (let i = 0; i < array.length; i++) {
        if (array[i] % 2 == 1) {
            ans.push(odds[oddCount]);
            oddCount++;
        } else {
            ans.push(array[i]);
        }
    }
    return ans
  }
// console.log(sortArray(oddsArray))

let letters = ['a', 'b', 'c'];
function addLetters(...letters) {
    // Your task is to add up letters to one letter.
    let alphabet = 'abcdefghijklmnopqrstuvwxyz';
    let ans = 0;
    letters.forEach((char) => {
        ans += alphabet.indexOf(char) + 1;
    })
    return alphabet.at(ans % 26);
}
console.log(addLetters(letters));