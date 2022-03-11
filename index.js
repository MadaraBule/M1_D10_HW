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
//STUCK 28
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
let container = document.getElementsByClassName("container")
//---------
let t = document.getElementById("roundBorders.tr")
t = t.document.getElementsByTagName("td");
//-------
//STUCK 33
//-------
document.getElementById("heading?").innerHTML = "new thing";
//-----
function newRows() {
    let table = document.getElementById("roundBorders");
    let row = table.insertRow(0);
    let cell1 = row.insertCell(1);
    let cell2 = row.insertCell(2);
    let cell3 = row.insertCell(3);
    let cell4 = row.insertCell(4);
    let cell5 = row.insertCell(5);
    cell1.innerHTML = "1";
    cell2.innerHTML = "2";
    cell3.innerHTML = "3";
    cell4.innerHTML = "4";
    cell5.innerHTML = "5";
};
function onLoad() {
    newRows()
}
window.onload = onLoad
//-------
let booom = document.getElementById("roundBorders.tr")
t = t.document.getElementsByTagName("td");
booom.classList.add("test");
//---------
let check = document.strictErrorChecking
if (condition) {
    console.log("Page Loaded!")
} else {
    console.log("")
}
//----------------------------------------------------------------------
let empty = " ";
let emptyThing = document.replaceChild(empty, "emptyThis")
//------------