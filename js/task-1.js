const elements = document.querySelectorAll(".item");
console.log(`Number of categories: ${elements.length}`);
// console.log(elements[0].children[0].textContent);
// console.log(elements[0].children[1].children.length);
elements.forEach(element => {
    console.log(`Category: ${element.children[0].textContent}`);
    console.log(`Elements: ${element.children[1].children.length}`);
})