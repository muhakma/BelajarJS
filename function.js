function printHeart() {
    console.log("<3");
}

printHeart();

function multiply(a, b) {
    return a * b;
}

console.log(multiply(2, 3)); // Output: 6
console.log(multiply(9, 9)); // Output: 81
console.log(multiply(5, 4)); // Output: 20

let animal = "Giant Pacific Octopus";
function observe () {
    let animal = "Pajama Squid"
    console.log(animal);
}
observe ();

const sayHello = (name) => `Hello ${name}!`;
console.log(sayHello("Hagrid")); // "Hello Hagrid!"
console.log(sayHello("Luna"));   // "Hello Luna!"

function setTime() {
    const header = document.getElementById("header");
    header.textContent = new Date().toString();
  }
  setInterval(setTime, 1000);
  console.log("Program Finish");