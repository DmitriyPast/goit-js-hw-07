
const input = document.getElementById("name-input");
// console.log(input);
const output = document.getElementById("name-output");
// console.log(output);
const formInputHandle = ie => output.textContent = ie.target.value?  ie.target.value : "Anonymous";
    // console.log(ie.target.value);

document.addEventListener("input", formInputHandle)