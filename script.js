const numberInput = document.getElementById("number");
const convertButton = document.getElementById("convert-btn");
const output = document.getElementById("output");


function convertToRoman(number) {
  let num = number;
 let result = "";
 while (num > 0){
   if (num >= 1000) {
     result += 'M';
     num -= 1000;
   } else if (num >= 900) {
     result += 'CM';
     num -= 900;
   } else if (num >= 500) {
     result += 'D';
     num -= 500;
   } else if (num >= 400) {
     result += 'CD';
     num -= 400;
   } else if (num >= 100) {
     result += 'C';
     num -= 100;
   } else if (num >= 90) {
     result += 'XC';
     num -= 90;
   } else if (num >= 50) {
     result += 'L';
     num -= 50;
   } else if (num >= 40) {
     result += 'XL';
     num -= 40;
   } else if (num >= 10) {
     result += 'X';
     num -= 10;
   } else if (num >= 9) {
     result += 'IX';
     num -= 9;
   } else if (num >= 5) {
     result += 'V';
     num -= 5;
   } else if (num >= 4) {
     result += 'IV';
     num -= 4;
   } else {
     result += 'I';
     num -= 1;
   }
 }
 return result;
}

function setOutput(result) {
  output.classList.remove("hidden");
  output.innerText = result;
}

convertButton.addEventListener("click", () => {
  const number = Number(numberInput.value);
  if (numberInput.value === "") {
    setOutput("Please enter a valid number");
  } else if (number <= 0){
    setOutput("Please enter a number greater than or equal to 1");
  } else if (number >= 4000){
    setOutput("Please enter a number less than or equal to 3999");
  } else {
    setOutput(convertToRoman(number));
  }
});

numberInput.addEventListener("keydown", (e) => {
    if (e.key === "Enter") {
        convertButton.click();
    }
});