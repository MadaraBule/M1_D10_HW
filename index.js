let x = "John";
let y = "Doe";
//-----------
let person = {
    name: "Jonathan",
    surname: "Grey",
    email: "realemail@google.com"
};
delete person.email;
//------------
let theGreatesArray = ["a", "s", "d", "f", "g", "h", "j", "k", "l", "z",]
console.log(theGreatesArray);
//--------------
let randomNumber = Array.from({ length: 100 }, () => Math.floor(Math.random() * 100));
console.log(randomNumber);
//-------------------
const highest = Math.max(...randomNumber);
const lowest = Math.min(...randomNumber);
console.log(highest);
console.log(lowest);
//-------------
//STUCK
//let tenOfTen = Array.from({ length: 10 }, () => Math.floor(Math.random() * 100));
//---------
let arr1 = [1, 2, 3, 4, 5];
let arr2 = [1, 2, 3];
function returnLongest(a, b) {
    if (a.length > b.length) {
        return a
    } else {
        return b
    }
}
console.log(returnLongest(arr1, arr2));
//-----
sum1 = arr1.reduce((a, b) => a + b, 0);
sum2 = arr2.reduce((a, b) => a + b, 0);
function returnHigh(a, b) {
    if (a > b) {
        return a
    } else {
        return b
    }
}
console.log(returnHigh(sum1, sum2));
//------DOM--------
