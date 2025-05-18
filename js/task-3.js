const input = document.getElementById("name-input");
// console.log(input);
const output = document.getElementById("name-output");
// console.log(output);
const formInputHandle = (ie) =>
  (output.textContent = ie.target.value.trim()
    ? ie.target.value.trim()
    : "Anonymous");
// console.log(ie.target.value);

input.addEventListener("input", formInputHandle);
